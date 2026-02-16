// ==================== ДАННЫЕ ==================== 

// Массив классов
const classes = ['11 «А»', '11 «Ә»', '11 «Б»', '11 «В»', '11 «Г»'];

// База данных учеников
const studentsData = {
    '11 «А»': [{
            name: 'Бали Екта',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Математика – Физика',
            photo: 'templates/11A/profile/bali_ekta.jpeg',
            chart: 'templates/11A/graph/bali_ekta.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 5,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 17,
                    subject2: 'Физика',
                    score2: 11,
                    total: 46
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 8,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 23,
                    subject2: 'Физика',
                    score2: 8,
                    total: 54
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 5,
                    subject1: 'Математика',
                    score1: 29,
                    subject2: 'Физика',
                    score2: 21,
                    total: 69
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 7,
                    mathLit: 6,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 27,
                    subject2: 'Физика',
                    score2: 27,
                    total: 78
                }
            ]
        },
        {
            name: 'Сырлыбай Сымбат',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Дж.тарих-Ағылшын',
            photo: 'templates/11A/profile/syrlybai_symbat.jpeg',
            chart: 'templates/11A/graph/syrlybai_symbat.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 26,
                    subject2: 'Ағылшын',
                    score2: 36,
                    total: 89
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 7,
                    kazakh: 11,
                    subject1: 'Дж.тарих',
                    score1: 28,
                    subject2: 'Ағылшын',
                    score2: 33,
                    total: 88
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 9,
                    kazakh: 16,
                    subject1: 'Дж.тарих',
                    score1: 28,
                    subject2: 'Ағылшын',
                    score2: 50,
                    total: 112
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 31,
                    subject2: 'Ағылшын',
                    score2: 50,
                    total: 107
                }
            ]
        },
        {
            name: 'Бердімұрат Гаухар',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Математика-Информатика',
            photo: 'templates/11A/profile/berdimurat_gaukhar.jpeg',
            chart: 'templates/11A/graph/berdimurat_gaukhar.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 5,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 19,
                    subject2: 'Информатика',
                    score2: 22,
                    total: 68
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 5,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 23,
                    subject2: 'Информатика',
                    score2: 26,
                    total: 70
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 8,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 21,
                    subject2: 'Информатика',
                    score2: 26,
                    total: 77
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 6,
                    kazakh: 14,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Информатика',
                    score2: 33,
                    total: 77
                }
            ]
        },
        {
            name: 'Бисенғазиев Мадияр',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11A/profile/bisengaziev_madiyar.jpeg',
            chart: 'templates/11A/graph/bisengaziev_madiyar.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 10,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 32,
                    subject2: 'Физика',
                    score2: 26,
                    total: 82
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 10,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 34,
                    subject2: 'Физика',
                    score2: 38,
                    total: 102
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 10,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 40,
                    subject2: 'Физика',
                    score2: 35,
                    total: 105
                }
            ]
        },
        {
            name: 'Елемесов Жігер',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11A/profile/elemesov_zhiger.jpeg',
            chart: 'templates/11A/graph/elemesov_zhiger.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 16,
                    subject2: 'Физика',
                    score2: 13,
                    total: 46
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 6,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Физика',
                    score2: 16,
                    total: 50
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 6,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Физика',
                    score2: 5,
                    total: 35
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 7,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'Физика',
                    score2: 14,
                    total: 50
                }
            ]
        },
        {
            name: 'Әбді Азима',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Қазақ т.-Әдебиет',
            photo: 'templates/11A/profile/abdi_azima.jpeg',
            chart: 'templates/11A/graph/abdi_azima.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 3,
                    kazakh: 10,
                    subject1: 'Қазақ т.',
                    score1: 40,
                    subject2: 'Әдебиет',
                    score2: 28,
                    total: 91
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 6,
                    kazakh: 12,
                    subject1: 'Қазақ т.',
                    score1: 45,
                    subject2: 'Әдебиет',
                    score2: 42,
                    total: 112
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 7,
                    kazakh: 18,
                    subject1: 'Қазақ т.',
                    score1: 47,
                    subject2: 'Әдебиет',
                    score2: 42,
                    total: 124
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 8,
                    kazakh: 12,
                    subject1: 'Қазақ т.',
                    score1: 44,
                    subject2: 'Әдебиет',
                    score2: 37,
                    total: 109
                }
            ]
        },
        {
            name: 'Әбдіғазықызы Бибінұр',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Математика-География',
            photo: 'templates/11A/profile/abilgazy_bibinur.jpeg',
            chart: 'templates/11A/graph/abilgazy_bibinur.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 25,
                    subject2: 'География',
                    score2: 22,
                    total: 73
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 5,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 25,
                    subject2: 'География',
                    score2: 26,
                    total: 73
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 10,
                    kazakh: 15,
                    subject1: 'Математика',
                    score1: 34,
                    subject2: 'География',
                    score2: 25,
                    total: 92
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 31,
                    subject2: 'География',
                    score2: 28,
                    total: 86
                }
            ]
        },
        {
            name: 'Әділбекқызы Әсем',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Дж.тарих-Ағылшын',
            photo: 'templates/11A/profile/adilbek_asem.jpeg',
            chart: 'templates/11A/graph/adilbek_asem.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 12,
                    subject2: 'Ағылшын',
                    score2: 34,
                    total: 68
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 3,
                    kazakh: 7,
                    subject1: 'Дж.тарих',
                    score1: 10,
                    subject2: 'Ағылшын',
                    score2: 33,
                    total: 62
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 8,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 21,
                    subject2: 'Ағылшын',
                    score2: 50,
                    total: 102
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 12,
                    subject1: 'Дж.тарих',
                    score1: 25,
                    subject2: 'Ағылшын',
                    score2: 50,
                    total: 101
                }
            ]
        },
        {
            name: 'Жалкасова Аида',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Қазақ т.-Әдебиет',
            photo: 'templates/11A/profile/zhalkasova_aida.jpeg',
            chart: 'templates/11A/graph/zhalkasova_aida.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 1,
                    kazakh: 5,
                    subject1: 'Қазақ т.',
                    score1: 23,
                    subject2: 'Әдебиет',
                    score2: 24,
                    total: 62
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 11,
                    subject1: 'Қазақ т.',
                    score1: 35,
                    subject2: 'Әдебиет',
                    score2: 25,
                    total: 83
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 6,
                    kazakh: 8,
                    subject1: 'Қазақ т.',
                    score1: 31,
                    subject2: 'Әдебиет',
                    score2: 39,
                    total: 93
                }
            ]
        },
        {
            name: 'Жұмалы Жалғас',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11A/profile/zhumali_zhalgas.jpeg',
            chart: 'templates/11A/graph/zhumali_zhalgas.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 19,
                    subject2: 'Физика',
                    score2: 14,
                    total: 60
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 20,
                    subject2: 'Физика',
                    score2: 8,
                    total: 46
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 6,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 19,
                    subject2: 'Физика',
                    score2: 16,
                    total: 60
                }
            ]
        },
        {
            name: 'Қайырымқұл Диана',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Биология-Химия',
            photo: 'templates/11A/profile/kairimkul_diana.jpeg',
            chart: 'templates/11A/graph/kairimkul_diana.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 6,
                    kazakh: 7,
                    subject1: 'Биология',
                    score1: 26,
                    subject2: 'Химия',
                    score2: 22,
                    total: 70
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 4,
                    kazakh: 11,
                    subject1: 'Биология',
                    score1: 28,
                    subject2: 'Химия',
                    score2: 15,
                    total: 64
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 9,
                    subject1: 'Биология',
                    score1: 35,
                    subject2: 'Химия',
                    score2: 24,
                    total: 82
                }
            ]
        },
        {
            name: 'Көпбай Ақжол',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11A/profile/kopbai_akzhol.jpeg',
            chart: 'templates/11A/graph/kopbai_akzhol.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 10,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Физика',
                    score2: 17,
                    total: 46
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 4,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Физика',
                    score2: 11,
                    total: 39
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 2,
                    mathLit: 6,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Физика',
                    score2: 13,
                    total: 43
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 10,
                    mathLit: 2,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Физика',
                    score2: 22,
                    total: 58
                }
            ]
        },
        {
            name: 'Нұрбай Жолдас',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11A/profile/nurbai_zholdas.jpeg',
            chart: 'templates/11A/graph/nurbai_zholdas.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 8,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 28,
                    subject2: 'Физика',
                    score2: 17,
                    total: 76
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 8,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 25,
                    subject2: 'Физика',
                    score2: 31,
                    total: 86
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 9,
                    kazakh: 14,
                    subject1: 'Математика',
                    score1: 39,
                    subject2: 'Физика',
                    score2: 30,
                    total: 100
                }
            ]
        },
        {
            name: 'Рашид Айгерім',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Математика-Информатика',
            photo: 'templates/11A/profile/rashid_aigerim.jpeg',
            chart: 'templates/11A/graph/rashid_aigerim.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 3,
                    subject1: 'Математика',
                    score1: 9,
                    subject2: 'Информатика',
                    score2: 19,
                    total: 44
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 8,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 18,
                    subject2: 'Информатика',
                    score2: 26,
                    total: 66
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 7,
                    kazakh: 4,
                    subject1: 'Математика',
                    score1: 27,
                    subject2: 'Информатика',
                    score2: 25,
                    total: 71
                }
            ]
        },
        {
            name: 'Сынабай Жаннұр',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Дж.тарих-География',
            photo: 'templates/11A/profile/synabai_zhannur.jpeg',
            chart: 'templates/11A/graph/synabai_zhannur.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 8,
                    kazakh: 16,
                    subject1: 'Дж.тарих',
                    score1: 24,
                    subject2: 'География',
                    score2: 31,
                    total: 88
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 10,
                    kazakh: 17,
                    subject1: 'Дж.тарих',
                    score1: 32,
                    subject2: 'География',
                    score2: 35,
                    total: 104
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 9,
                    kazakh: 17,
                    subject1: 'Дж.тарих',
                    score1: 30,
                    subject2: 'География',
                    score2: 27,
                    total: 91
                },
            ]
        },
        {
            name: 'Темірхан Альбина',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Шығармашылық',
            photo: 'templates/11A/profile/temirkhan_albina.jpeg',
            chart: 'templates/11A/graph/temirkhan_albina.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: ' ',
                    kazakh: 11,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 19
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: ' ',
                    kazakh: 10,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 19
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: ' ',
                    kazakh: 10,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 18
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 7,
                    mathLit: ' ',
                    kazakh: 14,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 21
                }
            ]
        },
        {
            name: 'Тұрғанбаева Ақниет',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Дж.тарих-Құқық',
            photo: 'templates/11A/profile/turganbayeva_akniet.jpeg',
            chart: 'templates/11A/graph/turganbayeva_akniet.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 20,
                    subject2: 'Құқық',
                    score2: 24,
                    total: 67
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 12,
                    subject1: 'Дж.тарих',
                    score1: 19,
                    subject2: 'Құқық',
                    score2: 26,
                    total: 71
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 7,
                    kazakh: 14,
                    subject1: 'Дж.тарих',
                    score1: 32,
                    subject2: 'Құқық',
                    score2: 32,
                    total: 93
                },
            ]
        }
    ],
    '11 «Ә»': [{
            name: 'Балғабай Досбол',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Шығармашылық',
            photo: 'templates/11AE/profile/balgabai_dosbol.jpg',
            chart: 'templates/11AE/graph/balgabai_dosbol.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: ' ',
                    kazakh: 13,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 18
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: ' ',
                    kazakh: 9,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 16
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: ' ',
                    kazakh: 9,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 17
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: ' ',
                    kazakh: 16,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 26
                }
            ]
        },
        {
            name: 'Бектасұлы Қалаубек',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Шығармашылық',
            photo: 'templates/11AE/profile/bektasuly_kalaubek.jpg',
            chart: 'templates/11AE/graph/',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: ' ',
                    kazakh: 4,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 10
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: ' ',
                    kazakh: 6,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 9
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: ' ',
                    kazakh: 7,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 10
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: ' ',
                    kazakh: 7,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 10
                }
            ]
        },
        {
            name: 'Жұма Ақжан',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Шығармашылық',
            photo: 'templates/11AE/profile/zhuma_akzhan.jpg',
            chart: 'templates/11AE/graph/',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: ' ',
                    kazakh: 7,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 10
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 1,
                    mathLit: ' ',
                    kazakh: 6,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 7
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: ' ',
                    kazakh: 4,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 10
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: ' ',
                    kazakh: 6,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 14
                }
            ]
        },
        {
            name: 'Ильясов Данияр',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/iliasov_daniyar.jpg',
            chart: 'templates/11AE/graph/',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 3,
                    subject1: 'Математика',
                    score1: 8,
                    subject2: 'Физика',
                    score2: 11,
                    total: 35
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 3,
                    subject1: 'Математика',
                    score1: 8,
                    subject2: 'Физика',
                    score2: 11,
                    total: 35
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 2,
                    mathLit: 6,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 17,
                    subject2: 'Физика',
                    score2: 13,
                    total: 48
                }
            ]
        },
        {
            name: 'Қалдыбекұлы Еркінбек',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/kaldybek_erkinbek.jpg',
            chart: 'templates/11AE/graph/kaldybek_erkinbek.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 6,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Информатика',
                    score2: 5,
                    total: 36
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 3,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'Физика',
                    score2: 12,
                    total: 40
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 1,
                    mathLit: 3,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Физика',
                    score2: 15,
                    total: 29
                }
            ]
        },
        {
            name: 'Қаржаубайұлы Ерасыл',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/karjaubai_erasyl.jpg',
            chart: 'templates/11AE/graph/',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 5,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'Информатика',
                    score2: 11,
                    total: 44
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 7,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Физика',
                    score2: 15,
                    total: 56
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 27,
                    subject2: 'Физика',
                    score2: 9,
                    total: 61
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 7,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 24,
                    subject2: 'Физика',
                    score2: 21,
                    total: 72
                }
            ]
        },
        {
            name: 'Қожаберген Айгерім',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-География',
            photo: 'templates/11AE/profile/kozhabergen_aigerim.jpg',
            chart: 'templates/11AE/graph/',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 9,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 35,
                    subject2: 'География',
                    score2: 37,
                    total: 98
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 5,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 39,
                    subject2: 'География',
                    score2: 34,
                    total: 99
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 10,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 38,
                    subject2: 'География',
                    score2: 40,
                    total: 107
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 9,
                    kazakh: 14,
                    subject1: 'Математика',
                    score1: 40,
                    subject2: 'География',
                    score2: 46,
                    total: 119
                }
            ]
        },
        {
            name: 'Қылышбай Қайсар',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/kylyshbai_kaisar.jpg',
            chart: 'templates/11AE/graph/',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 6,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 9,
                    subject2: 'Физика',
                    score2: 13,
                    total: 44
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 2,
                    mathLit: 6,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 10,
                    total: 41
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 15,
                    total: 46
                }
            ]
        },
        {
            name: 'Сағынғалиұлы Бақытжан',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/sagyngali_bakytzhan.jpg',
            chart: 'templates/11AE/graph/',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Физика',
                    score2: 10,
                    total: 49
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 4,
                    kazakh: 14,
                    subject1: 'Математика',
                    score1: 19,
                    subject2: 'Физика',
                    score2: 15,
                    total: 57
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 11,
                    total: 44
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 8,
                    kazakh: 15,
                    subject1: 'Математика',
                    score1: 27,
                    subject2: 'Физика',
                    score2: 27,
                    total: 83
                }
            ]
        },
        {
            name: 'Абдуллаева Алтынай',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/abdullaeva_altynai.jpg',
            chart: 'templates/11AE/graph/abdullaeva_altynai.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 2,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 9,
                    subject2: 'Физика',
                    score2: 15,
                    total: 38
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 2,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Физика',
                    score2: 7,
                    total: 36
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 2,
                    kazakh: 5,
                    subject1: 'Математика',
                    score1: 21,
                    subject2: 'Физика',
                    score2: 13,
                    total: 47
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 24,
                    subject2: 'Физика',
                    score2: 16,
                    total: 63
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 3,
                    mathLit: 3,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 9,
                    subject2: 'Физика',
                    score2: 15,
                    total: 36
                }
            ]
        },
        {
            name: 'Жанғали Нұркен',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-География',
            photo: 'templates/11AE/profile/zhangali_nurken.jpg',
            chart: 'templates/11AE/graph/zhangali_nurken.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'География',
                    score2: 11,
                    total: 45
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 3,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'География',
                    score2: 18,
                    total: 50
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'География',
                    score2: 21,
                    total: 53
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 8,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 22,
                    subject2: 'География',
                    score2: 26,
                    total: 73
                }
            ]
        },
        {
            name: 'Инербай Тұрлыхан',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/inerbai_turlykhan.jpg',
            chart: 'templates/11AE/graph/inerbai_turlykhan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 6,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Физика',
                    score2: 13,
                    total: 46
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 8,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 31,
                    subject2: 'Физика',
                    score2: 10,
                    total: 62
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 7,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 28,
                    subject2: 'Физика',
                    score2: 15,
                    total: 68
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 8,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 26,
                    subject2: 'Физика',
                    score2: 17,
                    total: 71
                }
            ]
        },
        {
            name: 'Иса Расул',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/isa_rasul.jpg',
            chart: 'templates/11AE/graph/isa_rasul.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Физика',
                    score2: 20,
                    total: 49
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 4,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 17,
                    subject2: 'Физика',
                    score2: 14,
                    total: 47
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 16,
                    subject2: 'Физика',
                    score2: 16,
                    total: 51
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 6,
                    mathLit: 3,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'Физика',
                    score2: 19,
                    total: 51
                }
            ]
        },
        {
            name: 'Калимулла Әлімжан',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/kalumulla_alimzhan.jpg',
            chart: 'templates/11AE/graph/kalumulla_alimzhan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'Физика',
                    score2: 12,
                    total: 46
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 4,
                    kazakh: 5,
                    subject1: 'Математика',
                    score1: 18,
                    subject2: 'Физика',
                    score2: 9,
                    total: 41
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 16,
                    subject2: 'Физика',
                    score2: 21,
                    total: 57
                }
            ]
        },
        {
            name: 'Кәрім Аяжан',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/karim_ayazhan.jpg',
            chart: 'templates/11AE/graph/karim_ayazhan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 3,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Физика',
                    score2: 13,
                    total: 41
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Физика',
                    score2: 12,
                    total: 41
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 8,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 29,
                    subject2: 'Физика',
                    score2: 23,
                    total: 80
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 10,
                    mathLit: 4,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'Физика',
                    score2: 7,
                    total: 40
                }
            ]
        },
        {
            name: 'Көкен Аманжол',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/',
            chart: 'templates/11AE/graph/koken_amanzhol.jpg',
            results: [{
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 8,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 9,
                    total: 51
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 23,
                    subject2: 'Физика',
                    score2: 28,
                    total: 77
                }
            ]
        },
        {
            name: 'Қанғали Дәурен',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/kangali_dauren.jpg',
            chart: 'templates/11AE/graph/kangali_dauren.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Физика',
                    score2: 10,
                    total: 43
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 18,
                    subject2: 'Физика',
                    score2: 12,
                    total: 51
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 4,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 20,
                    subject2: 'Физика',
                    score2: 14,
                    total: 53
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 3,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 22,
                    subject2: 'Физика',
                    score2: 14,
                    total: 53
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 8,
                    mathLit: 3,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 19,
                    subject2: 'Физика',
                    score2: 18,
                    total: 60
                }
            ]
        },
        {
            name: 'Үмбет Эльдар',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/umbet_eldar.jpg',
            chart: 'templates/11AE/graph/umbet_eldar.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 3,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Физика',
                    score2: 12,
                    total: 40
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 6,
                    kazakh: 15,
                    subject1: 'Математика',
                    score1: 16,
                    subject2: 'Физика',
                    score2: 17,
                    total: 63
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 7,
                    subject2: 'Физика',
                    score2: 11,
                    total: 43
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 2,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 18,
                    subject2: 'Физика',
                    score2: 17,
                    total: 54
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 19,
                    subject2: 'Физика',
                    score2: 20,
                    total: 61
                }
            ]
        },
        {
            name: 'Шадкам Хесам',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/shadkam_hesam.jpg',
            chart: 'templates/11AE/graph/shadkam_hesam.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 9,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 21,
                    subject2: 'Физика',
                    score2: 16,
                    total: 62
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 7,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 26,
                    subject2: 'Физика',
                    score2: 13,
                    total: 64
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 10,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 25,
                    subject2: 'Физика',
                    score2: 25,
                    total: 79
                }
            ]
        },
        {
            name: 'Шакир Мұхамеджан',
            class: '11 «Ә»',
            teacher: 'Есбергенова Нұргүл',
            subjects: 'Математика-Физика',
            photo: 'templates/11AE/profile/shakir_mukhamed.jpg',
            chart: 'templates/11AE/graph/shakir_mukhamed.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Физика',
                    score2: 7,
                    total: 34
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 8,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Физика',
                    score2: 9,
                    total: 43
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 9,
                    total: 44
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 7,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 17,
                    subject2: 'Физика',
                    score2: 15,
                    total: 57
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 4,
                    mathLit: 4,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Физика',
                    score2: 19,
                    total: 54
                }
            ]
        }
    ],
    '11 «Б»': [{
            name: 'Абдулла Аида',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/abdulla_aida.jpg',
            chart: 'templates/11B/graph/abdulla_aida.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 3,
                    kazakh: 7,
                    subject1: 'Химия',
                    score1: 15,
                    subject2: 'Биология',
                    score2: 18,
                    total: 52
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 7,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 14,
                    subject2: 'Биология',
                    score2: 20,
                    total: 59
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 6,
                    kazakh: 12,
                    subject1: 'Химия',
                    score1: 32,
                    subject2: 'Биология',
                    score2: 32,
                    total: 88
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 10,
                    mathLit: 2,
                    kazakh: 3,
                    subject1: 'Химия',
                    score1: 12,
                    subject2: 'Биология',
                    score2: 25,
                    total: 52
                }
            ]
        },
        {
            name: 'Айтмурат Сая',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'География-Биология',
            photo: 'templates/11B/profile/aitmurat_saya.jpg',
            chart: 'templates/11B/graph/aitmurat_saya.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 3,
                    kazakh: 12,
                    subject1: 'География',
                    score1: 14,
                    subject2: 'Биология',
                    score2: 16,
                    total: 51
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 2,
                    kazakh: 11,
                    subject1: 'География',
                    score1: 16,
                    subject2: 'Биология',
                    score2: 15,
                    total: 48
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 7,
                    kazakh: 6,
                    subject1: 'География',
                    score1: 26,
                    subject2: 'Биология',
                    score2: 22,
                    total: 48
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 17,
                    subject1: 'География',
                    score1: 30,
                    subject2: 'Биология',
                    score2: 17,
                    total: 76
                }
            ]
        },
        {
            name: 'Аманкос Нурберген',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/amankos_nurbergen.jpg',
            chart: 'templates/11B/graph/amankos_nurbergen.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Химия',
                    score1: 11,
                    subject2: 'Биология',
                    score2: 21,
                    total: 49
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 3,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 11,
                    subject2: 'Биология',
                    score2: 19,
                    total: 47
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 4,
                    kazakh: 7,
                    subject1: 'Химия',
                    score1: 12,
                    subject2: 'Биология',
                    score2: 18,
                    total: 47
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 6,
                    kazakh: 15,
                    subject1: 'Химия',
                    score1: 22,
                    subject2: 'Биология',
                    score2: 30,
                    total: 82
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 6,
                    mathLit: 2,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 12,
                    subject2: 'Биология',
                    score2: 12,
                    total: 41
                }
            ]
        },
        {
            name: 'Әлдерменова Дильназ',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/abdelmernova_dilnaz.jpg',
            chart: 'templates/11B/graph/abdelmernova_dilnaz.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 6,
                    kazakh: 12,
                    subject1: 'Химия',
                    score1: 15,
                    subject2: 'Биология',
                    score2: 20,
                    total: 59
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 6,
                    kazakh: 7,
                    subject1: 'Химия',
                    score1: 15,
                    subject2: 'Биология',
                    score2: 21,
                    total: 51
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 7,
                    subject1: 'Химия',
                    score1: 16,
                    subject2: 'Биология',
                    score2: 25,
                    total: 61
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 5,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 19,
                    subject2: 'Биология',
                    score2: 21,
                    total: 63
                }
            ]
        },
        {
            name: 'Жамбулова Акмарал',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/zhambulova_akmakmaral.jpg',
            chart: 'templates/11B/graph/zhambulova_akmakmaral.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 6,
                    kazakh: 11,
                    subject1: 'Химия',
                    score1: 15,
                    subject2: 'Биология',
                    score2: 16,
                    total: 54
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 3,
                    kazakh: 6,
                    subject1: 'Химия',
                    score1: 10,
                    subject2: 'Биология',
                    score2: 21,
                    total: 48
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 1,
                    mathLit: 4,
                    kazakh: 3,
                    subject1: 'Химия',
                    score1: 22,
                    subject2: 'Биология',
                    score2: 26,
                    total: 58
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 10,
                    subject1: 'Химия',
                    score1: 33,
                    subject2: 'Биология',
                    score2: 36,
                    total: 93
                }
            ]
        },
        {
            name: 'Жантілеу Аяулым',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'География-Биология',
            photo: 'templates/11B/profile/zhantileu_ayaulym.jpg',
            chart: 'templates/11B/graph/zhantileu_ayaulym.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 4,
                    kazakh: 11,
                    subject1: 'География',
                    score1: 23,
                    subject2: 'Биология',
                    score2: 14,
                    total: 59
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 2,
                    kazakh: 4,
                    subject1: 'География',
                    score1: 24,
                    subject2: 'Биология',
                    score2: 18,
                    total: 53
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 10,
                    subject1: 'География',
                    score1: 32,
                    subject2: 'Биология',
                    score2: 34,
                    total: 88
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 5,
                    kazakh: 13,
                    subject1: 'География',
                    score1: 26,
                    subject2: 'Биология',
                    score2: 27,
                    total: 76
                }
            ]
        },
        {
            name: 'Изтурова Аяулым',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/izturova_ayaulym.jpg',
            chart: 'templates/11B/graph/izturova_ayaulym.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 8,
                    kazakh: 5,
                    subject1: 'Химия',
                    score1: 14,
                    subject2: 'Биология',
                    score2: 16,
                    total: 52
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 12,
                    subject1: 'Химия',
                    score1: 18,
                    subject2: 'Биология',
                    score2: 30,
                    total: 73
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 7,
                    kazakh: 11,
                    subject1: 'Химия',
                    score1: 14,
                    subject2: 'Биология',
                    score2: 25,
                    total: 66
                }
            ]
        },
        {
            name: 'Киікбай Нұршат',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/kiikbai_nurshat.jpg',
            chart: 'templates/11B/graph/kiikbai_nurshat.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 10,
                    subject1: 'Химия',
                    score1: 14,
                    subject2: 'Биология',
                    score2: 24,
                    total: 62
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 10,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 17,
                    subject2: 'Биология',
                    score2: 32,
                    total: 78
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 6,
                    kazakh: 12,
                    subject1: 'Химия',
                    score1: 43,
                    subject2: 'Биология',
                    score2: 32,
                    total: 100
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 7,
                    kazakh: 16,
                    subject1: 'Химия',
                    score1: 26,
                    subject2: 'Биология',
                    score2: 39,
                    total: 97
                }
            ]
        },
        {
            name: 'Көбен Зере',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/koben_zere.jpg',
            chart: 'templates/11B/graph/koben_zere.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 5,
                    kazakh: 5,
                    subject1: 'Химия',
                    score1: 19,
                    subject2: 'Биология',
                    score2: 17,
                    total: 52
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 4,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 15,
                    subject2: 'Биология',
                    score2: 22,
                    total: 55
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Химия',
                    score1: 15,
                    subject2: 'Биология',
                    score2: 21,
                    total: 57
                }
            ]
        },
        {
            name: 'Қамбар Рамазан',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Шығармашылық',
            photo: 'templates/11B/profile/kambar_ramazan.jpg',
            chart: 'templates/11B/graph/kambar_ramazan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: ' ',
                    kazakh: 5,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 10
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 2,
                    mathLit: ' ',
                    kazakh: 7,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 9
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: ' ',
                    kazakh: 9,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 14
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 9,
                    mathLit: ' ',
                    kazakh: 8,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 17
                },
                {
                    testName: 'ҰБТ №5',
                    readingLit: 4,
                    mathLit: ' ',
                    kazakh: 8,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 12
                }
            ]
        },
        {
            name: 'Құдабаева Аяулым',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'География-Дж.тарих',
            photo: 'templates/11B/profile/kudabaeva_ayaulym.jpg',
            chart: 'templates/11B/graph/kudabaeva_ayaulym.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 8,
                    kazakh: 13,
                    subject1: 'География',
                    score1: 29,
                    subject2: 'Дж.тарих',
                    score2: 14,
                    total: 74
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 7,
                    kazakh: 14,
                    subject1: 'География',
                    score1: 31,
                    subject2: 'Дж.тарих',
                    score2: 19,
                    total: 81
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 5,
                    kazakh: 12,
                    subject1: 'География',
                    score1: 29,
                    subject2: 'Дж.тарих',
                    score2: 31,
                    total: 86
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 10,
                    kazakh: 15,
                    subject1: 'География',
                    score1: 31,
                    subject2: 'Дж.тарих',
                    score2: 27,
                    total: 92
                }
            ]
        },
        {
            name: 'Қылыш Арай',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/kylysh_arai.jpg',
            chart: 'templates/11B/graph/kylysh_arai.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 7,
                    subject1: 'Химия',
                    score1: 9,
                    subject2: 'Биология',
                    score2: 21,
                    total: 50
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Химия',
                    score1: 18,
                    subject2: 'Биология',
                    score2: 17,
                    total: 55
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 5,
                    kazakh: 11,
                    subject1: 'Химия',
                    score1: 13,
                    subject2: 'Биология',
                    score2: 25,
                    total: 63
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 9,
                    mathLit: 7,
                    kazakh: 4,
                    subject1: 'Химия',
                    score1: 11,
                    subject2: 'Биология',
                    score2: 23,
                    total: 54
                }
            ]
        },
        {
            name: 'Мұхамбет Аяжан',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/mukhambet_ayazhan.jpg',
            chart: 'templates/11B/graph/mukhambet_ayazhan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 8,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 15,
                    subject2: 'Биология',
                    score2: 17,
                    total: 58
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 20,
                    subject2: 'Биология',
                    score2: 15,
                    total: 56
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 5,
                    kazakh: 6,
                    subject1: 'Химия',
                    score1: 20,
                    subject2: 'Биология',
                    score2: 23,
                    total: 61
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 6,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 20,
                    subject2: 'Биология',
                    score2: 18,
                    total: 60
                }
            ]
        },
        {
            name: 'Өмірзақ Жолбарыс',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Шығармашылық',
            photo: 'templates/11B/profile/omirzak_zholbarys.jpg',
            chart: 'templates/11B/graph/omirzak_zholbarys.jpg',
            results: [{
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: ' ',
                    kazakh: 10,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 17
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: ' ',
                    kazakh: 6,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 13
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: ' ',
                    kazakh: 6,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 14
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 7,
                    mathLit: ' ',
                    kazakh: 8,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 17
                }
            ]
        },
        {
            name: 'Смагулова Інжу',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Қазақ тілі-Қазақ әдебиет',
            photo: 'templates/11B/profile/smagulova_inzhu.jpeg',
            chart: 'templates/11B/graph/smagulova_inzhu.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: ' ',
                    kazakh: 9,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 17
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 1,
                    kazakh: 11,
                    subject1: 'Қазақ тілі',
                    score1: 20,
                    subject2: 'Қазақ әдебиет',
                    score2: 14,
                    total: 52
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 13,
                    subject1: 'Қазақ тілі',
                    score1: 28,
                    subject2: 'Қазақ әдебиет',
                    score2: 21,
                    total: 75
                }
            ]
        },
        {
            name: 'Төлепберген Замира',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'География-Биология',
            photo: 'templates/11B/profile/tolepbergen_zamira.jpg',
            chart: 'templates/11B/graph/tolepbergen_zamira.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 5,
                    kazakh: 9,
                    subject1: 'География',
                    score1: 14,
                    subject2: 'Биология',
                    score2: 20,
                    total: 57
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 5,
                    kazakh: 10,
                    subject1: 'География',
                    score1: 18,
                    subject2: 'Биология',
                    score2: 14,
                    total: 53
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 11,
                    subject1: 'География',
                    score1: 19,
                    subject2: 'Биология',
                    score2: 22,
                    total: 64
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 6,
                    kazakh: 8,
                    subject1: 'География',
                    score1: 24,
                    subject2: 'Биология',
                    score2: 20,
                    total: 63
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 4,
                    mathLit: 5,
                    kazakh: 6,
                    subject1: 'География',
                    score1: 17,
                    subject2: 'Биология',
                    score2: 20,
                    total: 52
                }
            ]
        },
        {
            name: 'Унгарова Сымбат',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Шығармашылық',
            photo: 'templates/11B/profile/ungarova_symbat.jpg',
            chart: 'templates/11B/graph/ungarova_symbat.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: ' ',
                    kazakh: 7,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 16
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: ' ',
                    kazakh: 4,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 9
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: ' ',
                    kazakh: 12,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 19
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 8,
                    mathLit: ' ',
                    kazakh: 15,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 23
                }
            ]
        },
        {
            name: 'Үсен Самал',
            class: '11 «Б»',
            teacher: 'Жаңғақбаева Дина',
            subjects: 'Химия-Биология',
            photo: 'templates/11B/profile/usen_samal.jpg',
            chart: 'templates/11B/graph/usen_samal.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 3,
                    kazakh: 7,
                    subject1: 'Химия',
                    score1: 12,
                    subject2: 'Биология',
                    score2: 19,
                    total: 50
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 12,
                    subject1: 'Химия',
                    score1: 13,
                    subject2: 'Биология',
                    score2: 30,
                    total: 67
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 9,
                    subject1: 'Химия',
                    score1: 12,
                    subject2: 'Биология',
                    score2: 35,
                    total: 69
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 10,
                    subject1: 'Химия',
                    score1: 18,
                    subject2: 'Биология',
                    score2: 23,
                    total: 63
                }
            ]
        }
    ],
    '11 «В»': [{
            name: 'Асқар Әсем',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/askar_asem.jpg',
            chart: 'templates/11V/graph/askar_asem.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Физика',
                    score2: 8,
                    total: 42
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 7,
                    kazakh: 4,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Физика',
                    score2: 12,
                    total: 43
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 4,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 18,
                    subject2: 'Физика',
                    score2: 15,
                    total: 50
                }
            ]
        },
        {
            name: 'Асқа Абдулрауф',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Информатика',
            photo: 'templates/11V/profile/aska_abdol.jpg',
            chart: 'templates/11V/graph/aska_abdol.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 1,
                    mathLit: 3,
                    kazakh: 4,
                    subject1: 'Математика',
                    score1: 7,
                    subject2: 'Информатика',
                    score2: 12,
                    total: 27
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 1,
                    mathLit: 2,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Информатика',
                    score2: 6,
                    total: 28
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'Информатика',
                    score2: 10,
                    total: 45
                }
            ]
        },
        {
            name: 'Бисенбай Мухаммеджан',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Информатика',
            photo: 'templates/11V/profile/bisenbai_mukhamedzhan.jpg',
            chart: 'templates/11V/graph/bisenbai_mukhamedzhan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 3,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Информатика',
                    score2: 6,
                    total: 35
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 2,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Информатика',
                    score2: 13,
                    total: 40
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 7,
                    kazakh: 17,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Информатика',
                    score2: 15,
                    total: 62
                }
            ]
        },
        {
            name: 'Болатбек Әнімай',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Информатика',
            photo: 'templates/11V/profile/bolatbek_animai.jpg',
            chart: 'templates/11V/graph/bolatbek_animai.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 8,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 17,
                    subject2: 'Информатика',
                    score2: 10,
                    total: 54
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 7,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 22,
                    subject2: 'Информатика',
                    score2: 11,
                    total: 55
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 6,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 16,
                    subject2: 'Информатика',
                    score2: 13,
                    total: 48
                }
            ]
        },
        {
            name: 'Ермекбай Асылай',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Биология-География',
            photo: 'templates/11V/profile/ermekbai_asylai.jpg',
            chart: 'templates/11V/graph/ermekbai_asylai.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 8,
                    kazakh: 4,
                    subject1: 'Биология',
                    score1: 10,
                    subject2: 'География',
                    score2: 16,
                    total: 44
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 2,
                    kazakh: 8,
                    subject1: 'Биология',
                    score1: 26,
                    subject2: 'География',
                    score2: 22,
                    total: 66
                }
            ]
        },
        {
            name: 'Әбдіжали Нұрбек',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/abdizhali_nurbek.jpg',
            chart: 'templates/11V/graph/abdizhali_nurbek.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 6,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 15,
                    total: 26
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 5,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 14,
                    total: 43
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 11,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 18,
                    total: 56
                }
            ]
        },
        {
            name: 'Жалғасбай Акылбай',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/zhalgasbai_akylbai.jpg',
            chart: 'templates/11V/graph/zhalgasbai_akylbai.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 2,
                    mathLit: 4,
                    kazakh: 4,
                    subject1: 'Математика',
                    score1: 17,
                    subject2: 'Физика',
                    score2: 14,
                    total: 48
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 5,
                    kazakh: 5,
                    subject1: 'Математика',
                    score1: 7,
                    subject2: 'Физика',
                    score2: 17,
                    total: 37
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 6,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 8,
                    subject2: 'Физика',
                    score2: 13,
                    total: 41
                }
            ]
        },
        {
            name: 'Мұхтарқызы Інжу',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/mukhtarkyzy_inzhu.jpg',
            chart: 'templates/11V/graph/mukhtarkyzy_inzhu.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 17,
                    subject2: 'Физика',
                    score2: 10,
                    total: 46
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 4,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Физика',
                    score2: 7,
                    total: 41
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 3,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'Физика',
                    score2: 13,
                    total: 43
                }
            ]
        },
        {
            name: 'Қилаш Тынышқали',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Информатика',
            photo: 'templates/11V/profile/kilash_tynyshkali.jpg',
            chart: 'templates/11V/graph/kilash_tynyshkali.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 8,
                    subject2: 'Информатика',
                    score2: 16,
                    total: 49
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 3,
                    kazakh: 9,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Информатика',
                    score2: 15,
                    total: 46
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 13,
                    subject1: 'Математика',
                    score1: 16,
                    subject2: 'Информатика',
                    score2: 21,
                    total: 63
                }
            ]
        },
        {
            name: 'Қуан Әліби',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Информатика',
            photo: 'templates/11V/profile/kuan_alibiы.jpg',
            chart: 'templates/11V/graph/kuan_alibi.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 1,
                    kazakh: 4,
                    subject1: 'Математика',
                    score1: 9,
                    subject2: 'Информатика',
                    score2: 10,
                    total: 33
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 1,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Информатика',
                    score2: 16,
                    total: 41
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Информатика',
                    score2: 18,
                    total: 51
                },
                {
                    testName: 'ҰБТ 4 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Информатика',
                    score2: 9,
                    total: 45
                }
            ]
        },
        {
            name: 'Курал Даурен',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-География',
            photo: 'templates/11V/profile/kural_dauren.jpg',
            chart: 'templates/11V/graph/kural_dauren.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 2,
                    mathLit: 2,
                    kazakh: 3,
                    subject1: 'Математика',
                    score1: 12,
                    subject2: 'География',
                    score2: 11,
                    total: 30
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 1,
                    mathLit: 3,
                    kazakh: 5,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'География',
                    score2: 13,
                    total: 37
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 3,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'География',
                    score2: 16,
                    total: 45
                }
            ]
        },
        {
            name: 'Мұхтарқызы Маржан',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/mukhtarkyzy_marzhan.jpg',
            chart: 'templates/11V/graph/mukhtarkyzy_marzhan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 14,
                    subject2: 'Физика',
                    score2: 8,
                    total: 49
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 4,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Физика',
                    score2: 14,
                    total: 39
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Физика',
                    score2: 14,
                    total: 50
                }
            ]
        },
        {
            name: 'Нұржанқызы Сандуғаш',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Информатика',
            photo: 'templates/11V/profile/nurzhankyzy_sandugash.jpg',
            chart: 'templates/11V/graph/nurzhankyzy_sandugash.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 5,
                    kazakh: 11,
                    subject1: 'Дж. тарих',
                    score1: 13,
                    subject2: 'Ағылшын',
                    score2: 12,
                    total: 51
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 4,
                    kazakh: 3,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Информатика',
                    score2: 14,
                    total: 37
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Информатика',
                    score2: 24,
                    total: 53
                }
            ]
        },
        {
            name: 'Нурланов Әділет',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/nurlanov_adilet.jpg',
            chart: 'templates/11V/graph/nurlanov_adilet.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 2,
                    mathLit: 4,
                    kazakh: 4,
                    subject1: 'Математика',
                    score1: 17,
                    subject2: 'Физика',
                    score2: 14,
                    total: 48
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 5,
                    kazakh: 5,
                    subject1: 'Математика',
                    score1: 7,
                    subject2: 'Физика',
                    score2: 17,
                    total: 37
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 6,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 8,
                    subject2: 'Физика',
                    score2: 13,
                    total: 41
                }
            ]
        },
        {
            name: 'Сарсенғалиұлы Мейрамбек',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/sarsengali_meirambek.jpg',
            chart: 'templates/11V/graph/sarsengali_meirambek.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 3,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Физика',
                    score2: 10,
                    total: 40
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Математика',
                    score1: 9,
                    subject2: 'Физика',
                    score2: 11,
                    total: 39
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 3,
                    kazakh: 3,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Физика',
                    score2: 8,
                    total: 35
                }
            ]
        },
        {
            name: 'Сахи Қуаныш',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/sahi_kuanysh.jpg',
            chart: 'templates/11V/graph/sahi_kuanysh.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 1,
                    mathLit: 2,
                    kazakh: 4,
                    subject1: 'Математика',
                    score1: 11,
                    subject2: 'Физика',
                    score2: 14,
                    total: 32
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 1,
                    mathLit: 2,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Физика',
                    score2: 11,
                    total: 35
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 1,
                    kazakh: 6,
                    subject1: 'Математика',
                    score1: 15,
                    subject2: 'Физика',
                    score2: 6,
                    total: 31
                }
            ]
        },
        {
            name: 'Таджигали Сәтжан',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/tadzhigali_satzhan.jpg',
            chart: 'templates/11V/graph/tadzhigali_satzhan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 7,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Физика',
                    score2: 17,
                    total: 46
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 7,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 7,
                    total: 45
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 7,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 9,
                    subject2: 'Физика',
                    score2: 15,
                    total: 45
                }
            ]
        },
        {
            name: 'Хасен Айгерим',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Қазақ тілі-Қазақ әдебиет',
            photo: 'templates/11V/profile/hasen_aigerim.jpg',
            chart: 'templates/11V/graph/hasen_aigerim.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 7,
                    subject1: 'Қазақ тілі',
                    score1: 20,
                    subject2: 'Қазақ әдебиет',
                    score2: 18,
                    total: 59
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 14,
                    subject1: 'Қазақ тілі',
                    score1: 31,
                    subject2: 'Қазақ әдебиет',
                    score2: 14,
                    total: 72
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 9,
                    subject1: 'Қазақ тілі',
                    score1: 24,
                    subject2: 'Қазақ әдебиет',
                    score2: 13,
                    total: 59
                }
            ]
        },
        {
            name: 'Тасболатұлы Бақберген',
            class: '11 «В»',
            teacher: 'Егізбаев Қуанышбек',
            subjects: 'Математика-Физика',
            photo: 'templates/11V/profile/tasbolat_bakbergen.jpg',
            chart: 'templates/11V/graph/tasbolat_bakbergen.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 12,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 8,
                    total: 46
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Физика',
                    score2: 13,
                    total: 46
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 10,
                    subject1: 'Математика',
                    score1: 13,
                    subject2: 'Физика',
                    score2: 10,
                    total: 49
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 3,
                    kazakh: 18,
                    subject1: 'Математика',
                    score1: 10,
                    subject2: 'Физика',
                    score2: 17,
                    total: 53
                }
            ]
        }
    ],
    '11 «Г»': [{
            name: 'Аманғали Мансур',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Құқық',
            photo: 'templates/11G/profile/amangali_mansur.jpeg',
            chart: 'templates/11G/graph/amangali_mansur.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 7,
                    subject1: 'Дж.тарих',
                    score1: 15,
                    subject2: 'Құқық',
                    score2: 22,
                    total: 56
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 9,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 13,
                    subject2: 'Құқық',
                    score2: 17,
                    total: 55
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 6,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 14,
                    subject2: 'Құқық',
                    score2: 15,
                    total: 54
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 5,
                    mathLit: 3,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 17,
                    subject2: 'Құқық',
                    score2: 24,
                    total: 58
                }
            ]
        },
        {
            name: 'Арманд Насибе',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Ағылшын',
            photo: 'templates/11G/profile/armand_nasibe.jpeg',
            chart: 'templates/11G/graph/armand_nasibe.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 2,
                    kazakh: 6,
                    subject1: 'Дж.тарих',
                    score1: 12,
                    subject2: 'Ағылшын',
                    score2: 36,
                    total: 65
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Дж.тарих',
                    score1: 6,
                    subject2: 'Ағылшын',
                    score2: 29,
                    total: 51
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 15,
                    subject2: 'Ағылшын',
                    score2: 32,
                    total: 69
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 11,
                    subject1: 'Дж.тарих',
                    score1: 16,
                    subject2: 'Ағылшын',
                    score2: 34,
                    total: 73
                }
            ]
        },
        {
            name: 'Бақытжанқызы Ақбота',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Биология-Химия',
            photo: 'templates/11G/profile/bakytzhan_akbota.jpeg',
            chart: 'templates/11G/graph/bakytzhan_akbota.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 2,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 16,
                    subject2: 'Ағылшын',
                    score2: 8,
                    total: 43
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 2,
                    kazakh: 7,
                    subject1: 'Биология',
                    score1: 11,
                    subject2: 'Химия',
                    score2: 17,
                    total: 44
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 3,
                    kazakh: 7,
                    subject1: 'Биология',
                    score1: 15,
                    subject2: 'Химия',
                    score2: 15,
                    total: 43
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 6,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Биология',
                    score1: 20,
                    subject2: 'Химия',
                    score2: 37,
                    total: 76
                }
            ]
        },
        {
            name: 'Бегадилова Диана',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Қазақ т.-Әдебиет',
            photo: 'templates/11G/profile/begadilova_diana.jpeg',
            chart: 'templates/11G/graph/begadilova_diana.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Қазақ т.',
                    score1: 25,
                    subject2: 'Әдебиет',
                    score2: 20,
                    total: 64
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 2,
                    kazakh: 8,
                    subject1: 'Қазақ т.',
                    score1: 31,
                    subject2: 'Әдебиет',
                    score2: 28,
                    total: 78
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 5,
                    kazakh: 6,
                    subject1: 'Қазақ т.',
                    score1: 40,
                    subject2: 'Әдебиет',
                    score2: 34,
                    total: 95
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 11,
                    subject1: 'Қазақ т.',
                    score1: 33,
                    subject2: 'Әдебиет',
                    score2: 28,
                    total: 85
                }
            ]
        },
        {
            name: 'Бөлекбай Шектібай',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Құқық',
            photo: 'templates/11G/profile/bolekbai_shektibai.jpeg',
            chart: 'templates/11G/graph/bolekbai_shektibai.jpg',
            results: [{
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 2,
                    kazakh: 7,
                    subject1: 'Дж.тарих',
                    score1: 13,
                    subject2: 'Құқық',
                    score2: 14,
                    total: 39
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 4,
                    kazakh: 8,
                    subject1: 'Дж.тарих',
                    score1: 12,
                    subject2: 'Құқық',
                    score2: 18,
                    total: 45
                }
            ]
        },
        {
            name: 'Ермұхан Арайлым',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Қазақ т.-Әдебиет',
            photo: 'templates/11G/profile/ermuhan_arailym.jpeg',
            chart: 'templates/11G/graph/ermuhan_arailym.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 2,
                    kazakh: 8,
                    subject1: 'Қазақ т.',
                    score1: 17,
                    subject2: 'Әдебиет',
                    score2: 13,
                    total: 49
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 3,
                    kazakh: 9,
                    subject1: 'Қазақ т.',
                    score1: 31,
                    subject2: 'Әдебиет',
                    score2: 28,
                    total: 78
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 7,
                    kazakh: 9,
                    subject1: 'Қазақ т.',
                    score1: 36,
                    subject2: 'Әдебиет',
                    score2: 35,
                    total: 95
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 9,
                    mathLit: 5,
                    kazakh: 8,
                    subject1: 'Қазақ т.',
                    score1: 22,
                    subject2: 'Әдебиет',
                    score2: 39,
                    total: 83
                }
            ]
        },
        {
            name: 'Әміреқызы Жансая',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Шығармашылық',
            photo: 'templates/11G/profile/amirekyzy_zhansaya.jpeg',
            chart: 'templates/11G/graph/amirekyzy_zhansaya.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: ' ',
                    kazakh: 6,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 12
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: ' ',
                    kazakh: 8,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 11
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: ' ',
                    kazakh: 8,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 15
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 9,
                    mathLit: ' ',
                    kazakh: 9,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 18
                }
            ]
        },
        {
            name: 'Жаңабайұлы Ербол',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Құқық',
            photo: 'templates/11G/profile/zhanabai_erbol.jpeg',
            chart: 'templates/11G/graph/zhanabai_erbol.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 12,
                    subject1: 'Дж.тарих',
                    score1: 12,
                    subject2: 'Құқық',
                    score2: 32,
                    total: 68
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 15,
                    subject2: 'Құқық',
                    score2: 34,
                    total: 73
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 3,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 31,
                    subject2: 'Құқық',
                    score2: 38,
                    total: 90
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 10,
                    mathLit: 7,
                    kazakh: 12,
                    subject1: 'Дж.тарих',
                    score1: 36,
                    subject2: 'Құқық',
                    score2: 33,
                    total: 98
                }
            ]
        },
        {
            name: 'Жарылғап Гүлден',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Ағылшын',
            photo: 'templates/11G/profile/zharulgap_gulden.jpeg',
            chart: 'templates/11G/graph/zharulgap_gulden.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 4,
                    kazakh: 16,
                    subject1: 'Дж.тарих',
                    score1: 24,
                    subject2: 'Ағылшын',
                    score2: 24,
                    total: 75
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 7,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 25,
                    subject2: 'Ағылшын',
                    score2: 28,
                    total: 80
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 2,
                    kazakh: 15,
                    subject1: 'Дж.тарих',
                    score1: 31,
                    subject2: 'Ағылшын',
                    score2: 26,
                    total: 81
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 8,
                    mathLit: 7,
                    kazakh: 12,
                    subject1: 'Дж.тарих',
                    score1: 42,
                    subject2: 'Ағылшын',
                    score2: 30,
                    total: 98
                }
            ]
        },
        {
            name: 'Кәдір Іңкәр',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Шығармашылық',
            photo: 'templates/11G/profile/kadir_inkar.jpeg',
            chart: 'templates/11G/graph/kadir_inkar.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: ' ',
                    kazakh: 7,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 15
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: ' ',
                    kazakh: 8,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 15
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: ' ',
                    kazakh: 8,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 15
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 8,
                    mathLit: ' ',
                    kazakh: 8,
                    subject1: 'Шығармашылық',
                    score1: ' ',
                    subject2: ' ',
                    score2: ' ',
                    total: 16
                }
            ]
        },
        {
            name: 'Қалнияз Ақбота',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Ағылшын',
            photo: 'templates/11G/profile/kalniaz_akbota.jpeg',
            chart: 'templates/11G/graph/kalniaz_akbota.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 0,
                    kazakh: 7,
                    subject1: 'Қазақ тілі',
                    score1: 27,
                    subject2: 'Қаз.әд',
                    score2: 30,
                    total: 72
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 7,
                    subject1: 'Дж.тарих',
                    score1: 12,
                    subject2: 'Ағылшын',
                    score2: 16,
                    total: 49
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 5,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 25,
                    subject2: 'Ағылшын',
                    score2: 29,
                    total: 78
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 6,
                    mathLit: 5,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 27,
                    subject2: 'Ағылшын',
                    score2: 15,
                    total: 62
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 10,
                    mathLit: 3,
                    kazakh: 11,
                    subject1: 'Дж.тарих',
                    score1: 17,
                    subject2: 'Ағылшын',
                    score2: 24,
                    total: 65
                }
            ]
        },
        {
            name: 'Қартбай Жансәуле',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Құқық',
            photo: 'templates/11G/profile/kartbai_zhans.jpeg',
            chart: 'templates/11G/graph/kartbai_zhans.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 3,
                    kazakh: 12,
                    subject1: 'Дж.тарих',
                    score1: 10,
                    subject2: 'Құқық',
                    score2: 29,
                    total: 62
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 3,
                    kazakh: 5,
                    subject1: 'Дж.тарих',
                    score1: 11,
                    subject2: 'Құқық',
                    score2: 28,
                    total: 56
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 3,
                    kazakh: 8,
                    subject1: 'Дж.тарих',
                    score1: 22,
                    subject2: 'Құқық',
                    score2: 30,
                    total: 68
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 6,
                    mathLit: 3,
                    kazakh: 11,
                    subject1: 'Дж.тарих',
                    score1: 26,
                    subject2: 'Құқық',
                    score2: 36,
                    total: 82
                }
            ]
        },
        {
            name: 'Метжан Кәусар',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Ағылшын',
            photo: 'templates/11G/profile/metzhan_kausar.jpeg',
            chart: 'templates/11G/graph/metzhan_kausar.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 4,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 29,
                    subject2: 'Ағылшын',
                    score2: 35,
                    total: 87
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 28,
                    subject2: 'Ағылшын',
                    score2: 23,
                    total: 86
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 4,
                    kazakh: 12,
                    subject1: 'Дж.тарих',
                    score1: 29,
                    subject2: 'Ағылшын',
                    score2: 41,
                    total: 96
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 30,
                    subject2: 'Ағылшын',
                    score2: 44,
                    total: 97
                }
            ]
        },
        {
            name: 'Нұргелді Әсел',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Құқық',
            photo: 'templates/11G/profile/nurgeldi_asel.jpeg',
            chart: 'templates/11G/graph/nurgeldi_asel.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 2,
                    kazakh: 6,
                    subject1: 'Дж.тарих',
                    score1: 19,
                    subject2: 'Құқық',
                    score2: 21,
                    total: 55
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 6,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 19,
                    subject2: 'Құқық',
                    score2: 26,
                    total: 69
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 2,
                    kazakh: 7,
                    subject1: 'Дж.тарих',
                    score1: 20,
                    subject2: 'Құқық',
                    score2: 27,
                    total: 63
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 5,
                    mathLit: 1,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 23,
                    subject2: 'Құқық',
                    score2: 27,
                    total: 65
                }
            ]
        },
        {
            name: 'Оспан Гүлайым',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Ағылшын',
            photo: 'templates/11G/profile/ospan_gulaim.jpeg',
            chart: 'templates/11G/graph/ospan_gulaim.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 4,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 18,
                    subject2: 'Ағылшын',
                    score2: 12,
                    total: 53
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 3,
                    mathLit: 2,
                    kazakh: 6,
                    subject1: 'Дж.тарих',
                    score1: 9,
                    subject2: 'Ағылшын',
                    score2: 23,
                    total: 43
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 5,
                    subject1: 'Дж.тарих',
                    score1: 17,
                    subject2: 'Ағылшын',
                    score2: 24,
                    total: 62
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 5,
                    mathLit: 1,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 32,
                    subject2: 'Ағылшын',
                    score2: 34,
                    total: 82
                }
            ]
        },
        {
            name: 'Сабурова Айдана',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Құқық',
            photo: 'templates/11G/profile/saburova_aidana.jpeg',
            chart: 'templates/11G/graph/saburova_aidana.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 3,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 13,
                    subject2: 'Құқық',
                    score2: 18,
                    total: 56
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 3,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 19,
                    subject2: 'Құқық',
                    score2: 20,
                    total: 56
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 5,
                    subject1: 'Дж.тарих',
                    score1: 13,
                    subject2: 'Құқық',
                    score2: 27,
                    total: 57
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 10,
                    mathLit: 4,
                    kazakh: 17,
                    subject1: 'Дж.тарих',
                    score1: 25,
                    subject2: 'Құқық',
                    score2: 12,
                    total: 68
                }
            ]
        },
        {
            name: 'Сисен Сұлу',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Құқық',
            photo: 'templates/11G/profile/sisen_sulu.jpeg',
            chart: 'templates/11G/graph/sisen_sulu.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 4,
                    kazakh: 5,
                    subject1: 'Дж.тарих',
                    score1: 12,
                    subject2: 'Құқық',
                    score2: 17,
                    total: 44
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 2,
                    kazakh: 3,
                    subject1: 'Дж.тарих',
                    score1: 13,
                    subject2: 'Құқық',
                    score2: 16,
                    total: 41
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 2,
                    kazakh: 7,
                    subject1: 'Дж.тарих',
                    score1: 17,
                    subject2: 'Құқық',
                    score2: 17,
                    total: 57
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 5,
                    mathLit: 3,
                    kazakh: 11,
                    subject1: 'Дж.тарих',
                    score1: 29,
                    subject2: 'Құқық',
                    score2: 19,
                    total: 67
                }
            ]
        },
        {
            name: 'Суйндик Есенжан',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-География',
            photo: 'templates/11G/profile/suindik_esenzhan.jpeg',
            chart: 'templates/11G/graph/suindik_esenzhan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 29,
                    subject2: 'География',
                    score2: 31,
                    total: 82
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 28,
                    subject2: 'География',
                    score2: 34,
                    total: 84
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 6,
                    kazakh: 15,
                    subject1: 'Дж.тарих',
                    score1: 32,
                    subject2: 'География',
                    score2: 37,
                    total: 98
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 8,
                    mathLit: 8,
                    kazakh: 8,
                    subject1: 'Дж.тарих',
                    score1: 37,
                    subject2: 'География',
                    score2: 32,
                    total: 93
                }
            ]
        },
        {
            name: 'Темірхан Айжан',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Ағылшын',
            photo: 'templates/11G/profile/temirkhan_aizhan.jpeg',
            chart: 'templates/11G/graph/temirkhan_aizhan.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 2,
                    kazakh: 11,
                    subject1: 'Дж.тарих',
                    score1: 26,
                    subject2: 'Ағылшын',
                    score2: 33,
                    total: 82
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 7,
                    kazakh: 10,
                    subject1: 'Дж.тарих',
                    score1: 28,
                    subject2: 'Ағылшын',
                    score2: 26,
                    total: 76
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 4,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 33,
                    subject2: 'Ағылшын',
                    score2: 33,
                    total: 92
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 8,
                    mathLit: 5,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 30,
                    subject2: 'Ағылшын',
                    score2: 44,
                    total: 100
                }
            ]
        },
        {
            name: 'Тойлыбекұлы Абылай',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-География',
            photo: 'templates/11G/profile/toilybek_abylai.jpeg',
            chart: 'templates/11G/graph/toilybek_abylai.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 3,
                    kazakh: 11,
                    subject1: 'Дж.тарих',
                    score1: 36,
                    subject2: 'География',
                    score2: 31,
                    total: 86
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 4,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 45,
                    subject2: 'География',
                    score2: 35,
                    total: 104
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 4,
                    kazakh: 15,
                    subject1: 'Дж.тарих',
                    score1: 47,
                    subject2: 'География',
                    score2: 35,
                    total: 108
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 10,
                    mathLit: 7,
                    kazakh: 13,
                    subject1: 'Дж.тарих',
                    score1: 47,
                    subject2: 'География',
                    score2: 42,
                    total: 119
                }
            ]
        },
        {
            name: 'Утеген Аян',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Дж.тарих-Құқық',
            photo: 'templates/11G/profile/utegen_ayan.jpeg',
            chart: 'templates/11G/graph/utegen_ayan.jpg',
            results: [{
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 5,
                    kazakh: 5,
                    subject1: 'Дж.тарих',
                    score1: 17,
                    subject2: 'Құқық',
                    score2: 21,
                    total: 54
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 4,
                    mathLit: 3,
                    kazakh: 9,
                    subject1: 'Дж.тарих',
                    score1: 11,
                    subject2: 'Құқық',
                    score2: 27,
                    total: 54
                },
                {
                    testName: 'ҰБТ №4 (Мектепшілік)',
                    readingLit: 6,
                    mathLit: 0,
                    kazakh: 11,
                    subject1: 'Дж.тарих',
                    score1: 17,
                    subject2: 'Құқық',
                    score2: 29,
                    total: 63
                }
            ]
        },
        {
            name: 'Халнияз Дариға',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'Қазақ т.-Әдебиет',
            photo: 'templates/11G/profile/halnyaz_dariga.jpeg',
            chart: 'templates/11G/graph/halnyaz_dariga.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 8,
                    mathLit: 0,
                    kazakh: 7,
                    subject1: 'Қазақ т.',
                    score1: 27,
                    subject2: 'Әдебиет',
                    score2: 30,
                    total: 72
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 5,
                    kazakh: 9,
                    subject1: 'Қазақ т.',
                    score1: 20,
                    subject2: 'Әдебиет',
                    score2: 28,
                    total: 69
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 9,
                    mathLit: 3,
                    kazakh: 10,
                    subject1: 'Қазақ т.',
                    score1: 31,
                    subject2: 'Әдебиет',
                    score2: 32,
                    total: 85
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 8,
                    mathLit: 3,
                    kazakh: 8,
                    subject1: 'Қазақ т.',
                    score1: 34,
                    subject2: 'Әдебиет',
                    score2: 26,
                    total: 79
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 8,
                    mathLit: 4,
                    kazakh: 12,
                    subject1: 'Қазақ т.',
                    score1: 44,
                    subject2: 'Әдебиет',
                    score2: 34,
                    total: 102
                }
            ]
        },
        {
            name: 'Шадкам Басит',
            class: '11 «Г»',
            teacher: 'Матаева Нургул',
            subjects: 'География-Ағылшын',
            photo: 'templates/11G/profile/shadkam_basit.jpeg',
            chart: 'templates/11G/graph/shadkam_basit.jpg',
            results: [{
                    testName: 'ҰБТ №1 (Мектепшілік)',
                    readingLit: 5,
                    mathLit: 2,
                    kazakh: 5,
                    subject1: 'География',
                    score1: 19,
                    subject2: 'Ағылшын',
                    score2: 14,
                    total: 45
                },
                {
                    testName: 'ҰБТ №2 (Мектепшілік)',
                    readingLit: 7,
                    mathLit: 4,
                    kazakh: 12,
                    subject1: 'География',
                    score1: 16,
                    subject2: 'Ағылшын',
                    score2: 17,
                    total: 56
                },
                {
                    testName: 'ҰБТ №3 (Мектепшілік)',
                    readingLit: 10,
                    mathLit: 2,
                    kazakh: 5,
                    subject1: 'География',
                    score1: 20,
                    subject2: 'Ағылшын',
                    score2: 18,
                    total: 55
                },
                {
                    testName: 'ҰБТ №4',
                    readingLit: 9,
                    mathLit: 2,
                    kazakh: 10,
                    subject1: 'География',
                    score1: 16,
                    subject2: 'Ағылшын',
                    score2: 20,
                    total: 57
                },
                {
                    testName: 'ҰБТ №5 (Қаңтар ҰБТ ақылы)',
                    readingLit: 6,
                    mathLit: 3,
                    kazakh: 9,
                    subject1: 'География',
                    score1: 19,
                    subject2: 'Ағылшын',
                    score2: 17,
                    total: 54
                }
            ]
        }
    ]
};

// ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================
let currentClass = '';

// ==================== ИНИЦИАЛИЗАЦИЯ ====================

// Отображение кнопок классов на главной странице
function initializeHomePage() {
    const classesGrid = document.getElementById('classesGrid');
    classesGrid.innerHTML = '';

    classes.forEach(className => {
        const classCard = document.createElement('button');
        classCard.className = 'class-card';
        classCard.textContent = className;
        classCard.onclick = () => showClassPage(className);
        classesGrid.appendChild(classCard);
    });
}

// ==================== НАВИГАЦИЯ ====================

// Показать определенную страницу
function showPage(pageName) {
    // Скрыть все страницы
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Показать нужную страницу
    if (pageName === 'home') {
        document.getElementById('homePage').classList.add('active');
    } else if (pageName === 'class') {
        document.getElementById('classPage').classList.add('active');
    } else if (pageName === 'student') {
        document.getElementById('studentPage').classList.add('active');
    }
}

// Показать страницу класса
function showClassPage(className) {
    currentClass = className;

    // Установить заголовок
    document.getElementById('classTitle').textContent = ` ${className} сынып оқушылары`;

    // Заполнить список учеников
    const studentsGrid = document.getElementById('studentsGrid');
    studentsGrid.innerHTML = '';

    const students = studentsData[className] || [];

    if (students.length === 0) {
        studentsGrid.innerHTML = '<p style="text-align: center; color: #7f8c8d;">Ученики не найдены</p>';
    } else {
        students.forEach((student, index) => {
            const studentCard = document.createElement('div');
            studentCard.className = 'student-card';
            studentCard.onclick = () => showStudentPage(className, index);

            studentCard.innerHTML = `
                <h3>${student.name}</h3>
                <p style="color: #7f8c8d;">${student.subjects}</p>
            `;

            studentsGrid.appendChild(studentCard);
        });
    }

    showPage('class');
}

// Показать страницу ученика
function showStudentPage(className, studentIndex) {
    const student = studentsData[className][studentIndex];
    const profileDiv = document.getElementById('studentProfile');

    // Создать таблицу результатов
    let resultsTable = `
        <div class="results-section">
            <h3>ҰБТ нәтижелері</h3>
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>ҰБТ атауы</th>
                            <th>Оқу сауат</th>
                            <th>Мат сауат</th>
                            <th>Қазақ тілі</th>
                            <th>Бірінші таңдау пәні</th>
                            <th>Бірінші пән балл</th>
                            <th>Екінші таңдау пәні</th>
                            <th>Екінші пән балл</th>
                            <th>Жалпы ұпай</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    student.results.forEach((result, index) => {
        resultsTable += `
            <tr>
                <td>${index + 1}</td>
                <td>${result.testName}</td>
                <td>${result.readingLit}</td>
                <td>${result.mathLit}</td>
                <td>${result.kazakh}</td>
                <td>${result.subject1}</td>
                <td>${result.score1}</td>
                <td>${result.subject2}</td>
                <td>${result.score2}</td>
                <td><strong>${result.total}</strong></td>
            </tr>
        `;
    });

    resultsTable += `
                    </tbody>
                </table>
            </div>
        </div>
    `;

    // ДОБАВЛЯЕМ ГРАФИК (если он есть)
    let chartSection = '';
    if (student.chart) {
        chartSection = `
            <div class="chart-section">
                <h3>Прогресс диаграммасы</h3>
                <div class="chart-wrapper">
                    <img src="${student.chart}" alt="График результатов ${student.name}">
                </div>
            </div>
        `;
    }

    // Заполнить профиль ученика
    profileDiv.innerHTML = `
        <div class="profile-header">
            <div class="profile-photo">
                <img src="${student.photo}" alt="${student.name}">
            </div>
            <div class="profile-info">
                <div class="info-item">
                    <span class="info-label">Аты-жөні:</span>
                    <span class="info-value">${student.name}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Сынып:</span>
                    <span class="info-value">${student.class}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Сынып жетекшісі:</span>
                    <span class="info-value">${student.teacher}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Таңдау пәні:</span>
                    <span class="info-value">${student.subjects}</span>
                </div>
            </div>
        </div>
        ${resultsTable}
        ${chartSection}
    `;

    showPage('student');
}

// Вернуться к странице класса
function goBackToClass() {
    showClassPage(currentClass);
}

// ==================== ЗАПУСК ПРИЛОЖЕНИЯ ====================

// Инициализация при загрузке страницы
window.onload = function() {
    initializeHomePage();
};