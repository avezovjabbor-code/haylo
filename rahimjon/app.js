// ============================================
// RAHIMJON ENGLISH TEST - APPLICATION LOGIC
// Beginner Level (A1-A2)
// ============================================

// App State
const state = {
    currentCategory: null,
    questions: [],
    currentIndex: 0,
    userAnswers: [], // { question, selected, correct, isCorrect, skipped, timeSpent, explanation }
    timerInterval: null,
    secondsElapsed: 0,
    soundEnabled: true,
    totalScore: parseInt(localStorage.getItem('rahimjon_total_score') || '0', 10),
    totalCorrect: parseInt(localStorage.getItem('rahimjon_total_correct') || '0', 10),
    testsCompleted: parseInt(localStorage.getItem('rahimjon_tests_completed') || '0', 10),
};

// ============================================
// AUDIO SYSTEM (Web Audio API Synthesizer)
// No external mp3 files required!
// ============================================
class SoundEffects {
    constructor() {
        this.ctx = null;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                this.ctx = new AudioCtx();
            }
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playClick() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + 0.05);
        } catch (e) { }
    }

    playCorrect() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        try {
            const now = this.ctx.currentTime;
            // Play a pleasant two-tone chime (C5 -> G5)
            const osc1 = this.ctx.createOscillator();
            const osc2 = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc1.type = 'triangle';
            osc2.type = 'sine';

            osc1.frequency.setValueAtTime(523.25, now); // C5
            osc1.frequency.setValueAtTime(659.25, now + 0.1); // E5
            osc1.frequency.setValueAtTime(783.99, now + 0.2); // G5

            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);

            osc1.connect(gain);
            gain.connect(this.ctx.destination);
            osc1.start(now);
            osc1.stop(now + 0.55);
        } catch (e) { }
    }

    playWrong() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);

            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.25);
        } catch (e) { }
    }

    playFanfare() {
        if (!state.soundEnabled) return;
        this.init();
        if (!this.ctx) return;
        try {
            const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
            notes.forEach((freq, idx) => {
                const now = this.ctx.currentTime + (idx * 0.12);
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.35);
            });
        } catch (e) { }
    }
}

const sounds = new SoundEffects();

// ============================================
// SPEECH SYNTHESIS (Pronounce English words)
// ============================================
function speakEnglish(text) {
    if (!('speechSynthesis' in window)) {
        showToast('Brauzeringiz ovozli talaffuzni qo\'llamaydi', 'ℹ️');
        return;
    }
    window.speechSynthesis.cancel();

    // Extract mainly english words or clean text
    const cleanText = text.replace(/_+/g, 'blank').replace(/["'«»]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // Slightly slower for beginner students
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
}

// ============================================
// CONFETTI EFFECT
// ============================================
function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#06b6d4', '#ffffff'];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            w: Math.random() * 10 + 6,
            h: Math.random() * 6 + 4,
            vx: (Math.random() - 0.5) * 16,
            vy: (Math.random() - 0.7) * 16 - 3,
            rot: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 12,
            color: colors[Math.floor(Math.random() * colors.length)],
            gravity: 0.35,
            opacity: 1
        });
    }

    let animationId;
    let frame = 0;

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;

        pieces.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.rot += p.vRot;
            p.opacity -= 0.007;

            if (p.opacity > 0 && p.y < canvas.height + 50) {
                active = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rot * Math.PI) / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
        });

        frame++;
        if (active && frame < 200) {
            animationId = requestAnimationFrame(render);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationId);
        }
    }

    render();
}

// ============================================
// PARTICLES GENERATION
// ============================================
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    container.innerHTML = '';
    const count = 25;
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 8 + 4;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}%`;
        p.style.animationDuration = `${Math.random() * 14 + 10}s`;
        p.style.animationDelay = `${Math.random() * 8}s`;
        container.appendChild(p);
    }
}

// ============================================
// NAVIGATION & SCREENS
// ============================================
function hideAllScreens() {
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('categoriesSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'none';
}

function goHome() {
    sounds.playClick();
    clearInterval(state.timerInterval);
    hideAllScreens();
    document.getElementById('heroSection').style.display = 'flex';
    document.getElementById('navStats').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showCategories() {
    sounds.playClick();
    clearInterval(state.timerInterval);
    hideAllScreens();
    document.getElementById('categoriesSection').style.display = 'block';
    document.getElementById('navStats').style.display = 'flex';
    renderCategories();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// CATEGORIES RENDERING
// ============================================
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    // Total questions across DB
    let totalQuestionsCount = 0;
    Object.keys(QUESTIONS_DB).forEach(k => {
        totalQuestionsCount += QUESTIONS_DB[k].questions.length;
    });

    // 1. Render "Barcha mavzular (Mix)" card
    const mixCard = document.createElement('div');
    mixCard.className = 'category-card mix-card';
    mixCard.style.setProperty('--card-accent', '#ec4899');
    mixCard.style.setProperty('--card-glow', 'rgba(236, 72, 153, 0.25)');
    mixCard.style.setProperty('--card-accent-bg', 'rgba(236, 72, 153, 0.15)');
    mixCard.innerHTML = `
        <div class="category-card-top">
            <div class="category-icon">🎯</div>
            <span class="category-count">15 ta Savol</span>
        </div>
        <h3 class="category-name">Barcha Mavzular (Mix)</h3>
        <p class="category-desc">Barcha mavzulardan tasodifiy tanlangan aralash test sinovi. Haqiqiy imtihon tajribasi!</p>
        <div class="category-card-bottom">
            <span class="category-difficulty difficulty-medium">Aralash (A1-A2)</span>
            <span class="category-start-label">Boshlash &rarr;</span>
        </div>
    `;
    mixCard.onclick = () => startQuiz('mix');
    grid.appendChild(mixCard);

    // 2. Render each individual category
    Object.entries(QUESTIONS_DB).forEach(([key, cat]) => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.setProperty('--card-accent', cat.color);
        card.style.setProperty('--card-glow', `${cat.color}33`);
        card.style.setProperty('--card-accent-bg', `${cat.color}20`);

        const diffClass = cat.difficulty === 'medium' ? 'difficulty-medium' : 'difficulty-easy';
        const diffText = cat.difficulty === 'medium' ? 'O\'rta (A2)' : 'Oson (A1)';

        card.innerHTML = `
            <div class="category-card-top">
                <div class="category-icon">${cat.icon}</div>
                <span class="category-count">${cat.questions.length} ta Savol</span>
            </div>
            <h3 class="category-name">${cat.name}</h3>
            <p class="category-desc">${cat.description}</p>
            <div class="category-card-bottom">
                <span class="category-difficulty ${diffClass}">${diffText}</span>
                <span class="category-start-label">Boshlash &rarr;</span>
            </div>
        `;
        card.onclick = () => startQuiz(key);
        grid.appendChild(card);
    });
}

// ============================================
// QUIZ MANAGEMENT
// ============================================
function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function startQuiz(categoryKey) {
    sounds.playClick();
    state.currentCategory = categoryKey;
    state.currentIndex = 0;
    state.userAnswers = [];
    state.secondsElapsed = 0;

    let rawQuestions = [];
    let categoryTitle = "";

    if (categoryKey === 'mix') {
        categoryTitle = "Barcha Mavzular (Mix)";
        // Grab 2-3 questions randomly from each category
        Object.values(QUESTIONS_DB).forEach(cat => {
            const shuffled = shuffleArray(cat.questions);
            rawQuestions.push(...shuffled.slice(0, 3));
        });
        rawQuestions = shuffleArray(rawQuestions).slice(0, 15);
    } else {
        const cat = QUESTIONS_DB[categoryKey];
        categoryTitle = cat.name;
        rawQuestions = shuffleArray(cat.questions);
    }

    state.questions = rawQuestions;

    hideAllScreens();
    document.getElementById('quizSection').style.display = 'block';
    document.getElementById('quizCategoryLabel').textContent = categoryTitle;

    // Start timer
    clearInterval(state.timerInterval);
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
        state.secondsElapsed++;
        updateTimerDisplay();
    }, 1000);

    renderCurrentQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateTimerDisplay() {
    const minutes = Math.floor(state.secondsElapsed / 60);
    const seconds = state.secondsElapsed % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const el = document.getElementById('timerValue');
    if (el) el.textContent = formatted;
}

function renderCurrentQuestion() {
    const q = state.questions[state.currentIndex];
    const total = state.questions.length;
    const currentNum = state.currentIndex + 1;

    // Progress
    document.getElementById('quizCounter').textContent = `${currentNum} / ${total}`;
    const progressPercent = ((currentNum - 1) / total) * 100;
    document.getElementById('quizProgressFill').style.width = `${progressPercent}%`;

    // Question Number badge
    document.getElementById('questionNumber').textContent = `Savol ${currentNum} / ${total}`;

    // Question Text
    const textEl = document.getElementById('questionText');
    textEl.textContent = q.question;

    // Speech button setup
    const speechBtn = document.getElementById('btnSpeechQuestion');
    if (speechBtn) {
        speechBtn.onclick = () => speakEnglish(q.question);
    }

    // Remove existing explanation box if any
    const existingExpl = document.getElementById('currentExplanation');
    if (existingExpl) existingExpl.remove();

    // Options list
    const optionsContainer = document.getElementById('optionsList');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.id = `optionBtn_${idx}`;
        btn.innerHTML = `
            <span class="option-letter">${letters[idx]}</span>
            <span class="option-text">${optText}</span>
        `;
        btn.onclick = () => selectOption(idx);
        optionsContainer.appendChild(btn);
    });

    // Reset Next / Skip buttons
    const btnNext = document.getElementById('btnNext');
    const btnNextText = document.getElementById('btnNextText');
    btnNext.disabled = true;
    btnNextText.textContent = (state.currentIndex === total - 1) ? "Natijani Ko'rish" : "Keyingisi";

    const btnSkip = document.getElementById('btnSkip');
    btnSkip.disabled = false;
    btnSkip.style.display = 'inline-flex';
}

function selectOption(selectedIdx) {
    const q = state.questions[state.currentIndex];
    const isCorrect = (selectedIdx === q.correct);

    // Play feedback sound
    if (isCorrect) {
        sounds.playCorrect();
    } else {
        sounds.playWrong();
    }

    // Disable all options and show colors
    q.options.forEach((_, idx) => {
        const btn = document.getElementById(`optionBtn_${idx}`);
        if (!btn) return;
        btn.classList.add('disabled');

        if (idx === q.correct) {
            btn.classList.add('correct');
            const icon = document.createElement('span');
            icon.className = 'option-result-icon';
            icon.textContent = '✅';
            btn.appendChild(icon);
        } else if (idx === selectedIdx && !isCorrect) {
            btn.classList.add('wrong');
            const icon = document.createElement('span');
            icon.className = 'option-result-icon';
            icon.textContent = '❌';
            btn.appendChild(icon);
        }
    });

    // Save answer state
    state.userAnswers[state.currentIndex] = {
        question: q.question,
        options: q.options,
        selected: selectedIdx,
        correct: q.correct,
        isCorrect: isCorrect,
        skipped: false,
        explanation: q.explanation || "To'g'ri javob ko'rsatilgan qoidaga binoan tanlanadi."
    };

    // Show explanation box immediately for learning
    const explBox = document.createElement('div');
    explBox.id = 'currentExplanation';
    explBox.className = 'explanation-box';
    explBox.innerHTML = `
        <div class="explanation-title">
            <span>💡</span>
            <span>Tushuntirish:</span>
        </div>
        <div class="explanation-text">${q.explanation || ''}</div>
    `;
    document.getElementById('questionCard').appendChild(explBox);

    // Enable Next button and disable skip
    document.getElementById('btnNext').disabled = false;
    document.getElementById('btnSkip').style.display = 'none';

    // Pronounce the correct answer for learning
    speakEnglish(q.options[q.correct]);
}

function skipQuestion() {
    sounds.playClick();
    const q = state.questions[state.currentIndex];

    state.userAnswers[state.currentIndex] = {
        question: q.question,
        options: q.options,
        selected: -1,
        correct: q.correct,
        isCorrect: false,
        skipped: true,
        explanation: q.explanation || ""
    };

    advanceQuestion();
}

function nextQuestion() {
    sounds.playClick();
    advanceQuestion();
}

function advanceQuestion() {
    if (state.currentIndex < state.questions.length - 1) {
        state.currentIndex++;
        renderCurrentQuestion();
    } else {
        finishQuiz();
    }
}

// ============================================
// FINISH QUIZ & RESULTS
// ============================================
function finishQuiz() {
    clearInterval(state.timerInterval);

    // Calculate score
    const total = state.questions.length;
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    state.userAnswers.forEach(ans => {
        if (!ans) {
            skippedCount++;
        } else if (ans.skipped) {
            skippedCount++;
        } else if (ans.isCorrect) {
            correctCount++;
        } else {
            wrongCount++;
        }
    });

    const percent = Math.round((correctCount / total) * 100);

    // Update global persistent storage
    state.totalScore += (correctCount * 10);
    state.totalCorrect += correctCount;
    state.testsCompleted += 1;

    localStorage.setItem('rahimjon_total_score', state.totalScore);
    localStorage.setItem('rahimjon_total_correct', state.totalCorrect);
    localStorage.setItem('rahimjon_tests_completed', state.testsCompleted);

    updateNavbarStats();

    // Hide quiz and show results
    hideAllScreens();
    document.getElementById('resultsSection').style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Header badge & title based on score
    const resIcon = document.getElementById('resultsIcon');
    const resTitle = document.getElementById('resultsTitle');
    const resSubtitle = document.getElementById('resultsSubtitle');

    if (percent >= 90) {
        resIcon.textContent = '🏆';
        resTitle.textContent = "Ajoyib Natija! Barakalla!";
        resSubtitle.textContent = "Siz ingliz tilini juda yaxshi o'zlashtirmoqdasiz!";
        sounds.playFanfare();
        launchConfetti();
    } else if (percent >= 70) {
        resIcon.textContent = '🎉';
        resTitle.textContent = "Yaxshi Natija!";
        resSubtitle.textContent = "Testni muvaffaqiyatli yakunladingiz, shunday davom eting!";
        sounds.playFanfare();
        launchConfetti();
    } else if (percent >= 50) {
        resIcon.textContent = '👍';
        resTitle.textContent = "Yomon Emas!";
        resSubtitle.textContent = "Biroz ko'proq mashq qilsangiz, natijangiz yanada yaxshilanadi.";
    } else {
        resIcon.textContent = '💪';
        resTitle.textContent = "Mashq Qilishda Davom Eting!";
        resSubtitle.textContent = "Xatolaringizni ko'rib chiqing va qaytadan sinab ko'ring!";
    }

    // Score Circle SVG animation
    const circle = document.getElementById('scoreFillCircle');
    const percentEl = document.getElementById('scorePercent');
    percentEl.textContent = `${percent}%`;

    // 2 * PI * r = 2 * 3.14159 * 54 = ~339.292
    const circumference = 339.292;
    const offset = circumference - (percent / 100) * circumference;
    setTimeout(() => {
        if (circle) circle.style.strokeDashoffset = offset;
    }, 150);

    // Stats
    document.getElementById('resCorrect').textContent = correctCount;
    document.getElementById('resWrong').textContent = wrongCount;
    document.getElementById('resSkipped').textContent = skippedCount;

    const minutes = Math.floor(state.secondsElapsed / 60);
    const seconds = state.secondsElapsed % 60;
    document.getElementById('resTime').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Detailed Review List
    renderResultsReview();
}

function renderResultsReview() {
    const container = document.getElementById('resultsReview');
    if (!container) return;
    container.innerHTML = '';

    state.userAnswers.forEach((ans, idx) => {
        if (!ans) return;
        const item = document.createElement('div');
        const num = idx + 1;

        let statusClass = 'review-correct';
        if (ans.skipped) statusClass = 'review-skipped';
        else if (!ans.isCorrect) statusClass = 'review-wrong';

        item.className = `review-item ${statusClass}`;

        const correctText = ans.options[ans.correct];
        const userText = ans.selected >= 0 ? ans.options[ans.selected] : "O'tkazib yuborilgan";

        let answerContent = '';
        if (ans.isCorrect) {
            answerContent = `Sizning javobingiz: <span class="ans-correct">✅ ${userText}</span>`;
        } else if (ans.skipped) {
            answerContent = `<span class="ans-wrong">⚠️ O'tkazilgan</span> | To'g'ri javob: <span class="ans-correct">✅ ${correctText}</span>`;
        } else {
            answerContent = `Sizning javobingiz: <span class="ans-wrong">❌ ${userText}</span> | To'g'ri javob: <span class="ans-correct">✅ ${correctText}</span>`;
        }

        item.innerHTML = `
            <div class="review-question">${num}. ${ans.question}</div>
            <div class="review-answers-box">${answerContent}</div>
            <div class="review-expl">💡 <strong>Izoh:</strong> ${ans.explanation}</div>
        `;

        container.appendChild(item);
    });
}

function retryQuiz() {
    if (state.currentCategory) {
        startQuiz(state.currentCategory);
    } else {
        showCategories();
    }
}

// ============================================
// SOUND TOGGLE & TOAST
// ============================================
function toggleSound() {
    state.soundEnabled = !state.soundEnabled;
    const btn = document.getElementById('btnSoundToggle');
    if (btn) {
        btn.textContent = state.soundEnabled ? '🔊' : '🔇';
    }
    showToast(state.soundEnabled ? "Ovoz yoqildi" : "Ovoz o'chirildi", state.soundEnabled ? '🔊' : '🔇');
}

function showToast(message, icon = '✅') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');
    if (!toast) return;

    toastMsg.textContent = message;
    toastIcon.textContent = icon;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

function updateNavbarStats() {
    const scoreEl = document.getElementById('totalScore');
    const correctEl = document.getElementById('totalCorrect');
    if (scoreEl) scoreEl.textContent = state.totalScore;
    if (correctEl) correctEl.textContent = state.totalCorrect;
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    updateNavbarStats();
});
