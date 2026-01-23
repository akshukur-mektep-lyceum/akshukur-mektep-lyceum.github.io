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
            name: 'Айдарова Асем',
            class: '11 «А»',
            teacher: 'Жаңабергенова Мейрамгүл',
            subjects: 'Биология – Химия',
            photo: 'templates/aidarova_asem.jpg',
            chart: 'templates/chart_asem.png',
            results: [{
                testName: 'ҰБТ №1 (Мектепшілік)',
                readingLit: 19,
                mathLit: 16,
                kazakh: 21,
                subject1: 'Биология',
                score1: 23,
                subject2: 'Химия',
                score2: 20,
                total: 99
            }]
        }
    ],
    '11 «Ә»': [{
        name: 'Нұрланов Ержан',
        class: '11 «Ә»',
        teacher: 'Сейітова Гүлнар',
        subjects: 'История – География',
        photo: 'templates/nurlan_erzhan.jpg',
        chart: 'templates/chart_nurlan.png',
        results: [{
            testName: 'ҰБТ №1 (Мектепшілік)',
            readingLit: 20,
            mathLit: 15,
            kazakh: 22,
            subject1: 'История',
            score1: 21,
            subject2: 'География',
            score2: 19,
            total: 97
        }]
    }],
    '11 «Б»': [{
        name: 'Қасымова Динара',
        class: '11 «Б»',
        teacher: 'Абдуллаев Марат',
        subjects: 'Английский язык – История',
        photo: 'templates/kasymova_dinara.jpg',
        chart: 'templates/chart_kasymova.png',
        results: [{
            testName: 'ҰБТ №1 (Мектепшілік)',
            readingLit: 22,
            mathLit: 17,
            kazakh: 24,
            subject1: 'Английский язык',
            score1: 25,
            subject2: 'История',
            score2: 22,
            total: 110
        }]
    }],
    '11 «В»': [{
        name: 'Сабитов Нурсултан',
        class: '11 «В»',
        teacher: 'Ізбасарова Айгүл',
        subjects: 'Информатика – Математика',
        photo: 'templates/sabitov_nursultan.jpg',
        chart: 'templates/chart_sabitov.png',
        results: [{
            testName: 'ҰБТ №1 (Мектепшілік)',
            readingLit: 17,
            mathLit: 19,
            kazakh: 20,
            subject1: 'Информатика',
            score1: 24,
            subject2: 'Математика',
            score2: 23,
            total: 103
        }]
    }],
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