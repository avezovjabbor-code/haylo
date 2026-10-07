// ============================================
// RAHIMJON ENGLISH TEST - QUESTION DATABASE
// Beginner Level Questions (A1 - A2)
// O'zbek tilidagi tushuntirishlar bilan
// ============================================

const QUESTIONS_DB = {
    grammar: {
        name: "Grammar (Grammatika)",
        icon: "📝",
        description: "To be, zamonlar, artikllar va asosiy qoidalar",
        difficulty: "easy",
        color: "#6366f1",
        questions: [
            {
                question: "She _____ a doctor at the city hospital.",
                options: ["am", "is", "are", "be"],
                correct: 1,
                explanation: "'She' (u - ayol) uchinchi shaxs birlik bo'lgani uchun 'is' ishlatiladi."
            },
            {
                question: "They _____ from Uzbekistan.",
                options: ["is", "am", "are", "be"],
                correct: 2,
                explanation: "'They' (ular) ko'plikda bo'lgani uchun 'are' ishlatiladi."
            },
            {
                question: "I _____ a student at school.",
                options: ["is", "are", "am", "be"],
                correct: 2,
                explanation: "'I' (men) uchun doimo 'am' ishlatiladi."
            },
            {
                question: "He _____ to school by bus every day.",
                options: ["go", "goes", "going", "gone"],
                correct: 1,
                explanation: "Present Simple zamonida 'he/she/it' uchun fe'lga '-s' yoki '-es' qo'shiladi (go -> goes)."
            },
            {
                question: "We _____ English books every evening.",
                options: ["read", "reads", "reading", "reader"],
                correct: 0,
                explanation: "'We' (biz) olmoshi bilan fe'l o'zining oddiy ko'rinishida 'read' bo'lib keladi."
            },
            {
                question: "_____ you like chocolate ice cream?",
                options: ["Does", "Do", "Is", "Are"],
                correct: 1,
                explanation: "Present Simple so'roq gapida 'you' olmoshi uchun 'Do' yordamchi fe'li ishlatiladi."
            },
            {
                question: "She _____ not watch TV in the morning.",
                options: ["do", "does", "is", "are"],
                correct: 1,
                explanation: "'She' olmoshi bilan inkor gapda 'does not' (doesn't) ishlatiladi."
            },
            {
                question: "There _____ a book on the desk.",
                options: ["are", "is", "am", "be"],
                correct: 1,
                explanation: "Birlikdagi buyum ('a book') uchun 'There is' ishlatiladi."
            },
            {
                question: "There _____ three cats in the garden.",
                options: ["is", "are", "am", "was"],
                correct: 1,
                explanation: "Ko'plikdagi buyum yoki jonzotlar ('three cats') uchun 'There are' ishlatiladi."
            },
            {
                question: "Look! The children _____ football now.",
                options: ["play", "plays", "are playing", "is playing"],
                correct: 2,
                explanation: "'Now' (hozir) va 'Look!' ayni vaqtda sodir bo'layotgan ish-harakat (Present Continuous) bo'lib, 'children' ko'plik uchun 'are playing' bo'ladi."
            },
            {
                question: "This is _____ apple.",
                options: ["a", "an", "the", "two"],
                correct: 1,
                explanation: "Unli tovush bilan boshlangan birlik otlar oldidan 'an' artikli ishlatiladi (an apple)."
            },
            {
                question: "_____ is your name?",
                options: ["What", "Where", "Who", "When"],
                correct: 0,
                explanation: "Ismni so'rashda 'What' (Nima) so'roq so'zi ishlatiladi: 'What is your name?'."
            },
            {
                question: "I have two _____ at home.",
                options: ["cat", "cats", "cates", "a cat"],
                correct: 1,
                explanation: "Ko'plikdagi otlarga '-s' qo'shimchasi qo'shiladi: 'two cats'."
            },
            {
                question: "This is my brother. _____ name is Jasur.",
                options: ["Her", "His", "My", "Its"],
                correct: 1,
                explanation: "O'g'il bola ('brother') uchun egalik olmoshi 'His' (uning) bo'ladi."
            },
            {
                question: "_____ pencil is this? - It is mine.",
                options: ["Whose", "Who", "Where", "Why"],
                correct: 0,
                explanation: "'Kimning?' deb so'rash uchun 'Whose' ishlatiladi: 'Whose pencil is this?'."
            }
        ]
    },
    vocabulary: {
        name: "Vocabulary (Lug'at)",
        icon: "📚",
        description: "Kundalik so'zlar, oila, hayvonlar va ranglar",
        difficulty: "easy",
        color: "#10b981",
        questions: [
            {
                question: "'Apple' so'zining o'zbek tilidagi tarjimasi nima?",
                options: ["Nok", "Olma", "Uzum", "Gilos"],
                correct: 1,
                explanation: "'Apple' - olma degani."
            },
            {
                question: "'School' so'zi nimani anglatadi?",
                options: ["Uy", "Do'kon", "Maktab", "Kasalxona"],
                correct: 2,
                explanation: "'School' - maktab degan ma'noni bildiradi."
            },
            {
                question: "'Brother' so'zining tarjimasi qaysi?",
                options: ["Ota", "Aka / Uka", "Ona", "Opa / Singil"],
                correct: 1,
                explanation: "'Brother' - aka yoki uka degani."
            },
            {
                question: "'Beautiful' so'zi nimani anglatadi?",
                options: ["Katta", "Kichik", "Go'zal / Chiroyli", "Tezkor"],
                correct: 2,
                explanation: "'Beautiful' - go'zal, chiroyli degan ma'noni bildiradi."
            },
            {
                question: "Ingliz tilida 'suv' qanday aytiladi?",
                options: ["Milk", "Juice", "Water", "Tea"],
                correct: 2,
                explanation: "'Water' - suv degani. (Milk - sut, Juice - sharbat, Tea - choy)."
            },
            {
                question: "'Cat' so'zining tarjimasi:",
                options: ["Kuchuk", "Mushuk", "Qush", "Ot"],
                correct: 1,
                explanation: "'Cat' - mushuk."
            },
            {
                question: "'Happy' so'zining antonimi (qarama-qarshisi) qaysi?",
                options: ["Sad", "Good", "Nice", "Big"],
                correct: 0,
                explanation: "'Happy' (xursand) so'zining aksi 'Sad' (xafa, g'amgin) dir."
            },
            {
                question: "Ingliz tilida 'kitob' so'zi qanday bo'ladi?",
                options: ["Pen", "Book", "Desk", "Bag"],
                correct: 1,
                explanation: "'Book' - kitob degani."
            },
            {
                question: "'Doctor' so'zi nimani anglatadi?",
                options: ["O'qituvchi", "Shifokor / Vrach", "Haydovchi", "Oshpaz"],
                correct: 1,
                explanation: "'Doctor' - shifokor, vrach degani."
            },
            {
                question: "'Red' qaysi rang?",
                options: ["Ko'k", "Yashil", "Qizil", "Sariq"],
                correct: 2,
                explanation: "'Red' - qizil rang."
            },
            {
                question: "Quyidagilardan qaysi biri 'Oila a'zosi' emas?",
                options: ["Mother", "Father", "Pencil", "Sister"],
                correct: 2,
                explanation: "'Pencil' - bu qalam, qolganlari esa oila a'zolari (Mother - ona, Father - ota, Sister - opa/singil)."
            },
            {
                question: "'Breakfast' qaysi ovqatlanish vaqti?",
                options: ["Nonushta", "Tushlik", "Kechki ovqat", "Desert"],
                correct: 0,
                explanation: "'Breakfast' - ertalabki nonushta degani."
            },
            {
                question: "Ingliz tilida 'quyosh' qanday aytiladi?",
                options: ["Moon", "Sun", "Star", "Sky"],
                correct: 1,
                explanation: "'Sun' - quyosh degani. (Moon - oy, Star - yulduz, Sky - osmon)."
            },
            {
                question: "'Big' so'zining ma'nosi nima?",
                options: ["Kichik", "Katta", "Tor", "Keng"],
                correct: 1,
                explanation: "'Big' - katta degani. Kichik esa 'Small'."
            },
            {
                question: "'Teacher' so'zi nimani anglatadi?",
                options: ["O'quvchi", "O'qituvchi", "Direktor", "Talaba"],
                correct: 1,
                explanation: "'Teacher' - o'qituvchi, ustoz degani."
            }
        ]
    },
    reading: {
        name: "Reading (O'qish & Tushunish)",
        icon: "📖",
        description: "Qisqa hikoyalarni o'qish va savollarga javob berish",
        difficulty: "easy",
        color: "#f59e0b",
        questions: [
            {
                question: "\"My name is Ali. I am 12 years old. I go to school every day.\" - Savol: Ali necha yoshda?",
                options: ["10", "11", "12", "13"],
                correct: 2,
                explanation: "Matnda aniq keltirilgan: 'I am 12 years old'."
            },
            {
                question: "\"Sara likes animals. She has two white cats and one brown dog at home.\" - Savol: Sarada nechta mushuk bor?",
                options: ["1 ta", "2 ta", "3 ta", "Mushugi yo'q"],
                correct: 1,
                explanation: "Matnda: 'She has two white cats' (Unda ikkita oq mushuk bor)."
            },
            {
                question: "\"Today is Monday. We have an English lesson at 9 o'clock.\" - Savol: Bugun hafta qaysi kuni?",
                options: ["Seshanba", "Chorshanba", "Dushanba", "Juma"],
                correct: 2,
                explanation: "'Monday' - bu Dushanba kuni."
            },
            {
                question: "\"Mr. Karim is a doctor. He works at the central hospital and helps sick people.\" - Savol: Janob Karim qayerda ishlaydi?",
                options: ["Maktabda", "Kasalxonada", "Bankda", "Dorixonada"],
                correct: 1,
                explanation: "Matnda: 'He works at the central hospital' (U markaziy shifoxonada ishlaydi)."
            },
            {
                question: "\"I wake up at 7 o'clock in the morning. Then I wash my face and eat breakfast.\" - Savol: U soat nechida uyg'onadi?",
                options: ["6:00 da", "7:00 da", "8:00 da", "9:00 da"],
                correct: 1,
                explanation: "'I wake up at 7 o'clock' - 7:00 da uyg'onadi."
            },
            {
                question: "\"The weather is sunny and warm today. The sky is very blue.\" - Savol: Bugun havo qanday?",
                options: ["Yomg'irli va sovuq", "Quyoshli va iliq", "Qor yog'moqda", "Bulutli"],
                correct: 1,
                explanation: "'Sunny' - quyoshli, 'warm' - iliq degani."
            },
            {
                question: "\"There are 15 boys and 10 girls in our classroom.\" - Savol: Sinfda nechta qiz bor?",
                options: ["10 ta", "15 ta", "25 ta", "5 ta"],
                correct: 0,
                explanation: "Matnda: '10 girls' (10 ta qiz) deyilgan."
            },
            {
                question: "\"Bobur likes fruits. His favorite fruit is banana because it is sweet.\" - Savol: Boburning sevimli mevasi nima?",
                options: ["Olma", "Banan", "Apelsin", "Uzum"],
                correct: 1,
                explanation: "'His favorite fruit is banana' (Uning sevimli mevasi banan)."
            },
            {
                question: "\"After school, Farrux plays football in the green park with his friends.\" - Savol: Farrux do'stlari bilan qayerda futbol o'ynaydi?",
                options: ["Uyda", "Bog'da (parkda)", "Maktab zalida", "Ko'chada"],
                correct: 1,
                explanation: "Matnda: 'in the green park' (yashil parkda/bog'da)."
            },
            {
                question: "\"Madina can speak two languages: Uzbek and English.\" - Savol: Madina nechta tilda gaplasha oladi?",
                options: ["Bitta", "Ikkita", "Uchta", "To'rtta"],
                correct: 1,
                explanation: "Matnda: 'two languages' (ikkita til) deyilgan."
            }
        ]
    },
    numbers: {
        name: "Numbers & Time (Sonlar & Vaqt)",
        icon: "🔢",
        description: "Raqamlar, soat, sanalar va hisoblash",
        difficulty: "easy",
        color: "#06b6d4",
        questions: [
            {
                question: "'Fifteen' bu qaysi son?",
                options: ["5", "50", "15", "55"],
                correct: 2,
                explanation: "'Fifteen' - 15 soni (5 - five, 50 - fifty)."
            },
            {
                question: "Ingliz tilida 100 soni qanday aytiladi?",
                options: ["One thousand", "One hundred", "Ten", "One million"],
                correct: 1,
                explanation: "100 - 'One hundred'."
            },
            {
                question: "'Twenty-three' bu qaysi raqam?",
                options: ["13", "32", "23", "33"],
                correct: 2,
                explanation: "Twenty (20) + three (3) = 23."
            },
            {
                question: "'It is half past four.' - Soat necha bo'lgan?",
                options: ["4:00", "4:15", "4:30", "4:45"],
                correct: 2,
                explanation: "'Half past' - yarim o'tgan degani. 'Half past four' = 4:30."
            },
            {
                question: "Ingliz tilida 'birinchi' tartib soni qanday yoziladi?",
                options: ["One", "First", "Once", "Single"],
                correct: 1,
                explanation: "'First' (1st) - birinchi degani."
            },
            {
                question: "'Forty' bu qaysi son?",
                options: ["4", "14", "44", "40"],
                correct: 3,
                explanation: "'Forty' - 40 soni."
            },
            {
                question: "10 + 6 = ? Ingliz tilida javob qanday bo'ladi?",
                options: ["Fourteen", "Fifteen", "Sixteen", "Seventeen"],
                correct: 2,
                explanation: "10 + 6 = 16, ya'ni 'Sixteen'."
            },
            {
                question: "'Quarter past two' - Soat necha?",
                options: ["2:15", "2:30", "2:45", "1:45"],
                correct: 0,
                explanation: "'Quarter past' - 15 daqiqa o'tgan. 'Quarter past two' = 2:15."
            },
            {
                question: "Haftada nechta kun bor? (Inglizcha javob bering)",
                options: ["Five days", "Six days", "Seven days", "Eight days"],
                correct: 2,
                explanation: "Haftada 7 kun bor: 'Seven days'."
            },
            {
                question: "'Twelve' qaysi son?",
                options: ["2", "12", "20", "22"],
                correct: 1,
                explanation: "'Twelve' - 12 soni."
            },
            {
                question: "Bir yilda nechta oy bor? (Inglizcha javob bering)",
                options: ["Ten months", "Eleven months", "Twelve months", "Twenty months"],
                correct: 2,
                explanation: "Bir yilda 12 oy bor: 'Twelve months'."
            },
            {
                question: "'Seventy' bu qaysi son?",
                options: ["17", "70", "77", "7"],
                correct: 1,
                explanation: "'Seventy' - 70 (17 - seventeen, 7 - seven)."
            }
        ]
    },
    daily: {
        name: "Daily Life (Kundalik Muloqot)",
        icon: "💬",
        description: "Salomlashish, tanishuv va iboralar",
        difficulty: "easy",
        color: "#f43f5e",
        questions: [
            {
                question: "Ertalab kimdir bilan uchrashganda nima deyiladi?",
                options: ["Good night!", "Good evening!", "Good morning!", "Goodbye!"],
                correct: 2,
                explanation: "'Good morning!' - Xayrli tong degani."
            },
            {
                question: "'How are you?' savoliga qanday javob berish to'g'ri?",
                options: ["I am 12.", "I am fine, thank you.", "My name is John.", "Yes, I do."],
                correct: 1,
                explanation: "'How are you?' (Qandaysiz / Ahvollaringiz qanday?) ga 'I am fine, thank you' (Yaxshiman, rahmat) deb javob beriladi."
            },
            {
                question: "'Nice to meet you!' iborasi qachon ishlatiladi?",
                options: ["Yotishdan oldin", "Yangi odam bilan tanishganda", "Kechirim so'raganda", "Xayrlashganda"],
                correct: 1,
                explanation: "'Nice to meet you!' - Siz bilan tanishganimdan xursandman degani."
            },
            {
                question: "Ingliz tilida 'Rahmat' qanday aytiladi?",
                options: ["Sorry", "Please", "Thank you", "Excuse me"],
                correct: 2,
                explanation: "'Thank you' - Rahmat degani."
            },
            {
                question: "Xato qilib qo'yganingizda nima deysiz?",
                options: ["I am sorry", "You are welcome", "Hello", "See you"],
                correct: 0,
                explanation: "'I am sorry' - Kechirasiz / Uzr so'rayman degani."
            },
            {
                question: "'Where are you from?' savolining tarjimasi qaysi?",
                options: ["Qayerda yashaysiz?", "Qayerdansiz?", "Qayerga boryapsiz?", "Necha yoshdasiz?"],
                correct: 1,
                explanation: "'Where are you from?' - Siz qayerdansiz? degan savol."
            },
            {
                question: "'See you tomorrow!' nimani bildiradi?",
                options: ["Ertaga ko'rishguncha!", "Xayrli tun!", "Salom!", "Bugun ko'rishamiz!"],
                correct: 0,
                explanation: "'See you tomorrow!' - Ertaga ko'rishguncha!"
            },
            {
                question: "'Excuse me, can you help me?' nimani anglatadi?",
                options: ["Salom, qandaysiz?", "Kechirasiz, menga yordam bera olasizmi?", "Rahmat, kerak emas.", "Xayr, sog' bo'ling."],
                correct: 1,
                explanation: "'Excuse me, can you help me?' - Kechirasiz, menga yordam bera olasizmi?"
            },
            {
                question: "'I am hungry.' gapining ma'nosi nima?",
                options: ["Men chanqadim", "Men ochman / Qornim ochdi", "Men charchadim", "Men sovuq qotyapman"],
                correct: 1,
                explanation: "'I am hungry' - Men ochman degani. (Thirsty - chanqagan)."
            },
            {
                question: "Yotishdan oldin oila a'zolaringizga nima deysiz?",
                options: ["Good morning!", "Good afternoon!", "Good night!", "Hello!"],
                correct: 2,
                explanation: "'Good night!' - Xayrli tun / Tinch osuda tun tilayman."
            }
        ]
    },
    prepositions: {
        name: "Prepositions (Predloglar)",
        icon: "📍",
        description: "In, on, at, under va joy predloglari",
        difficulty: "medium",
        color: "#8b5cf6",
        questions: [
            {
                question: "The cat is sleeping _____ the table. (Mushuk stol tagida)",
                options: ["on", "under", "in", "above"],
                correct: 1,
                explanation: "'Under' - tagida / ostida degani."
            },
            {
                question: "I live _____ Tashkent.",
                options: ["at", "on", "in", "to"],
                correct: 2,
                explanation: "Shahar va mamlakat nomlari oldidan 'in' predlogi ishlatiladi: 'in Tashkent'."
            },
            {
                question: "The book is _____ the desk. (Kitob parta ustida)",
                options: ["on", "in", "at", "under"],
                correct: 0,
                explanation: "Yuzasida turgan narsalar uchun 'on' (ustida) ishlatiladi."
            },
            {
                question: "School starts _____ 8:00 AM.",
                options: ["in", "on", "at", "from"],
                correct: 2,
                explanation: "Aniq vaqtlar (soatlar) oldidan 'at' predlogi ishlatiladi: 'at 8:00 AM'."
            },
            {
                question: "We don't go to school _____ Sundays.",
                options: ["in", "on", "at", "to"],
                correct: 1,
                explanation: "Hafta kunlari oldidan 'on' predlogi ishlatiladi: 'on Sundays'."
            },
            {
                question: "The pens are _____ the pencil case. (Qalamdon ichida)",
                options: ["on", "under", "in", "next to"],
                correct: 2,
                explanation: "Biror narsaning ichida bo'lsa 'in' ishlatiladi."
            },
            {
                question: "My birthday is _____ May.",
                options: ["on", "in", "at", "for"],
                correct: 1,
                explanation: "Oylar va fasllar oldidan 'in' ishlatiladi: 'in May'."
            },
            {
                question: "The bank is _____ the supermarket. (Supermarket yonida)",
                options: ["under", "next to", "in", "between"],
                correct: 1,
                explanation: "'Next to' - yonida degan ma'noni bildiradi."
            },
            {
                question: "The ball is _____ the two boxes. (Ikki quti o'rtasida)",
                options: ["between", "under", "on", "in"],
                correct: 0,
                explanation: "Ikki narsa orasida/o'rtasida bo'lsa 'between' ishlatiladi."
            },
            {
                question: "We usually go to the beach _____ summer.",
                options: ["at", "on", "in", "to"],
                correct: 2,
                explanation: "Fasllar (summer, winter, spring, autumn) oldidan 'in' ishlatiladi: 'in summer'."
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS_DB };
}
