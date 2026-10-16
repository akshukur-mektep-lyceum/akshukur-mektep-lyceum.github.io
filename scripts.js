// ==================== ДАННЫЕ ==================== 

// Массив классов
const classes = ['11 «А»', '11 «Ә»', '11 «Б»', '11 «В»', '11 «Г»'];

// База данных учеников
const studentsData = {
    "11 «А»": [{
            "name": "АМАНЖАН МАДИНА",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Шығармашылық",
            "photo": "templates/11A/profile/amanzhan_madina.jpeg",
            "chart": "templates/11A/graph/amanzhan_madina.jpg",
            "results": [{
                    "testName": "ҰБТ №1 (Мектепшілік)",
                    "readingLit": 8,
                    "mathLit": " ",
                    "kazakh": 8,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 16
                },
                {
                    "testName": "ҰБТ №2 (Мектепшілік)",
                    "readingLit": 9,
                    "mathLit": " ",
                    "kazakh": 10,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 19
                }
            ]
        },
        {
            "name": "АРТЫҚБАЙ АЙДОС",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Физика-Математика",
            "photo": "templates/11A/profile/artyqbay_aydos.jpeg",
            "chart": "templates/11A/graph/artyqbay_aydos.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 9,
                    "kazakh": 11,
                    "subject1": "Математика",
                    "score1": 26,
                    "subject2": "Физика",
                    "score2": 23,
                    "total": 76
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 7,
                    "kazakh": 11,
                    "subject1": "Математика",
                    "score1": 21,
                    "subject2": "Физика",
                    "score2": 19,
                    "total": 68
                }
            ]
        },
        {
            "name": "БАУЫРЖАН АБЫЛАЙ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Физика-Математика",
            "photo": "templates/11A/profile/bauyrzhan_abylay.jpeg",
            "chart": "templates/11A/graph/bauyrzhan_abylay.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 10,
                    "mathLit": 8,
                    "kazakh": 10,
                    "subject1": "Математика",
                    "score1": 34,
                    "subject2": "Физика",
                    "score2": 29,
                    "total": 91
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 10,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 32,
                    "subject2": "Физика",
                    "score2": 30,
                    "total": 89
                }
            ]
        },
        {
            "name": "БАҒДАТҰЛЫ ПАРАСАТ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Физика-Математика",
            "photo": "templates/11A/profile/baghdatuly_parasat.jpeg",
            "chart": "templates/11A/graph/baghdatuly_parasat.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 8,
                    "kazakh": 8,
                    "subject1": "Математика",
                    "score1": 23,
                    "subject2": "Физика",
                    "score2": 21,
                    "total": 69
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 4,
                    "kazakh": 10,
                    "subject1": "Математика",
                    "score1": 19,
                    "subject2": "Физика",
                    "score2": 28,
                    "total": 70
                }
            ]
        },
        {
            "name": "БИСЕН НАЗЕРКЕ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Физика-Математика",
            "photo": "templates/11A/profile/bisen_nazerke.jpeg",
            "chart": "templates/11A/graph/bisen_nazerke.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 10,
                    "mathLit": 10,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 31,
                    "subject2": "Физика",
                    "score2": 25,
                    "total": 85
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": "",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "ЕРІКҰЛЫ ӘДІЛЕТ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Информатика-Математика",
            "photo": "templates/11A/profile/erikuly_aedilet.jpeg",
            "chart": "templates/11A/graph/erikuly_aedilet.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 9,
                    "kazakh": 10,
                    "subject1": "Математика",
                    "score1": 44,
                    "subject2": "Информатика",
                    "score2": 36,
                    "total": 108
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 9,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 33,
                    "subject2": "Информатика",
                    "score2": 40,
                    "total": 98
                }
            ]
        },
        {
            "name": "ЖАҚСЫЛЫҚОВА ЭЛЬВИРА",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Физика-Математика",
            "photo": "templates/11A/profile/zhaqsylyqova_elvira.jpeg",
            "chart": "templates/11A/graph/zhaqsylyqova_elvira.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 8,
                    "kazakh": 11,
                    "subject1": "Математика",
                    "score1": 24,
                    "subject2": "Физика",
                    "score2": 12,
                    "total": 64
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 7,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 24,
                    "subject2": "Физика",
                    "score2": 14,
                    "total": 59
                }
            ]
        },
        {
            "name": "ЖЕМЕНЕЙ АЙХАН",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Ағылшын-ДЖТ",
            "photo": "templates/11A/profile/zhemeney_aykhan.jpeg",
            "chart": "templates/11A/graph/zhemeney_aykhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 8,
                    "kazakh": 13,
                    "subject1": "Ағылшын тілі",
                    "score1": 39,
                    "subject2": "ДЖТ",
                    "score2": 44,
                    "total": 113
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 7,
                    "kazakh": 15,
                    "subject1": "Джт",
                    "score1": 36,
                    "subject2": "Ағылшын тілі",
                    "score2": 33,
                    "total": 100
                }
            ]
        },
        {
            "name": "ЖЕМЕНЕЙ МАҚСАТ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11A/profile/zhemeney_maqsat.jpeg",
            "chart": "templates/11A/graph/zhemeney_maqsat.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 10,
                    "kazakh": 3,
                    "subject1": "Математика",
                    "score1": 26,
                    "subject2": "Физика",
                    "score2": 20,
                    "total": 68
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 8,
                    "kazakh": 10,
                    "subject1": "Математика",
                    "score1": 21,
                    "subject2": "Физика",
                    "score2": 25,
                    "total": 72
                }
            ]
        },
        {
            "name": "ЗАХАР АЙНАГҮЛ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Ағылшын-ДЖТ",
            "photo": "templates/11A/profile/zakhar_aynaguel.jpeg",
            "chart": "templates/11A/graph/zakhar_aynaguel.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 9,
                    "kazakh": 7,
                    "subject1": "Ағылшын тілі",
                    "score1": 26,
                    "subject2": "ДЖТ",
                    "score2": 14,
                    "total": 65
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 8,
                    "kazakh": 12,
                    "subject1": "Ағылшын тілі",
                    "score1": 25,
                    "subject2": "ДЖТ",
                    "score2": 15,
                    "total": 69
                }
            ]
        },
        {
            "name": "ЗИНҰР МҰХАММЕД",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11A/profile/zinur_mukhammed.jpeg",
            "chart": "templates/11A/graph/zinur_mukhammed.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": " ",
                    "mathLit": 8,
                    "kazakh": " ",
                    "subject1": "Математика",
                    "score1": " ",
                    "subject2": "Физика",
                    "score2": " ",
                    "total": 56
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 6,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 21,
                    "subject2": "Физика",
                    "score2": 19,
                    "total": 65
                }
            ]
        },
        {
            "name": "КАТАПОВ АЛИХАН",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11A/profile/katapov_alikhan.jpeg",
            "chart": "templates/11A/graph/katapov_alikhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 9,
                    "kazakh": 14,
                    "subject1": "Математика",
                    "score1": 43,
                    "subject2": "Физика",
                    "score2": 26,
                    "total": 100
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 9,
                    "kazakh": 16,
                    "subject1": "Математика",
                    "score1": 42,
                    "subject2": "Физика",
                    "score2": 22,
                    "total": 99
                }
            ]
        },
        {
            "name": "КӨБЕГЕН НҰРДӘУЛЕТ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "География-Математика",
            "photo": "templates/11A/profile/koebegen_nurdaeulet.jpeg",
            "chart": "templates/11A/graph/koebegen_nurdaeulet.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 10,
                    "mathLit": 9,
                    "kazakh": 11,
                    "subject1": "Математика",
                    "score1": 22,
                    "subject2": "География",
                    "score2": 35,
                    "total": 87
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 10,
                    "kazakh": 10,
                    "subject1": "Математика",
                    "score1": 22,
                    "subject2": "География",
                    "score2": 33,
                    "total": 85
                }
            ]
        },
        {
            "name": "МҰРАТҚЫЗЫ НҰРАЙНА",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11A/profile/muratqyzy_nurayna.jpeg",
            "chart": "templates/11A/graph/muratqyzy_nurayna.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 5,
                    "mathLit": 3,
                    "kazakh": 6,
                    "subject1": "Математика",
                    "score1": 20,
                    "subject2": "Физика:",
                    "score2": 16,
                    "total": 50
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 7,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 22,
                    "subject2": "Физика",
                    "score2": 11,
                    "total": 56
                }
            ]
        },
        {
            "name": "НУРБАЙ АРУЖАН",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Биология-Химия",
            "photo": "templates/11A/profile/nurbay_aruzhan.jpeg",
            "chart": "templates/11A/graph/nurbay_aruzhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 7,
                    "kazakh": 10,
                    "subject1": "Биология",
                    "score1": 20,
                    "subject2": "Химия",
                    "score2": 19,
                    "total": 64
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 4,
                    "kazakh": 5,
                    "subject1": "Биология",
                    "score1": " ",
                    "subject2": "Химия",
                    "score2": " ",
                    "total": 60
                }
            ]
        },
        {
            "name": "НҰРНИЯЗ НҰРАЛЫХАН",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Математика-География",
            "photo": "templates/11A/profile/nurniyaz_nuralykhan.jpeg",
            "chart": "templates/11A/graph/nurniyaz_nuralykhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 8,
                    "kazakh": 7,
                    "subject1": "Математика",
                    "score1": 15,
                    "subject2": "География",
                    "score2": 19,
                    "total": 55
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 7,
                    "kazakh": 12,
                    "subject1": "Математика",
                    "score1": 12,
                    "subject2": "География",
                    "score2": 29,
                    "total": 67
                }
            ]
        },
        {
            "name": "НҰРТАЙҚЫЗЫ АНЕЛЯ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Шығармашылық",
            "photo": "templates/11A/profile/nurtayqyzy_anelya.jpeg",
            "chart": "templates/11A/graph/nurtayqyzy_anelya.jpg",
            "results": [{
                    "testName": "ҰБТ №1 (Мектепшілік)",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                },
                {
                    "testName": "ҰБТ №2 (Мектепшілік)",
                    "readingLit": 8,
                    "mathLit": " ",
                    "kazakh": 7,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 15
                }
            ]
        },
        {
            "name": "ХАСАН НҰРАЙ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Биология-Химия",
            "photo": "templates/11A/profile/khasan_nuray.jpeg",
            "chart": "templates/11A/graph/khasan_nuray.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 3,
                    "kazakh": 12,
                    "subject1": "Биология",
                    "score1": 30,
                    "subject2": "Химия",
                    "score2": 14,
                    "total": 69
                }
            ]
        },
        {
            "name": "ҚУАНЫШҚАЛИ МЕРУЕРТ",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11A/profile/quanyshqali_meruert.jpeg",
            "chart": "templates/11A/graph/quanyshqali_meruert.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 10,
                    "mathLit": 8,
                    "kazakh": 12,
                    "subject1": "Математика",
                    "score1": 35,
                    "subject2": "Физика",
                    "score2": 12,
                    "total": 77
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 5,
                    "kazakh": 12,
                    "subject1": "Математика",
                    "score1": 30,
                    "subject2": "Физика",
                    "score2": 8,
                    "total": 62
                }
            ]
        },
        {
            "name": "ӨТЕШ АЛИХАН",
            "class": "11 «А»",
            "teacher": "Жаңабергенова Мейрамгүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11A/profile/oetesh_alikhan.jpeg",
            "chart": "templates/11A/graph/oetesh_alikhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 2,
                    "kazakh": 8,
                    "subject1": "Математика",
                    "score1": 18,
                    "subject2": "Физика",
                    "score2": 16,
                    "total": 50
                }
            ]
        }
    ],
    "11 «Ә»": [{
            "name": "АСАР ЕСТАЙ",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/asar_estay.jpeg",
            "chart": "templates/11AE/graph/asar_estay.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 3,
                    "mathLit": 4,
                    "kazakh": 5,
                    "subject1": "Математика",
                    "score1": 12,
                    "subject2": "Физика",
                    "score2": 12,
                    "total": 36
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 4,
                    "mathLit": 6,
                    "kazakh": 8,
                    "subject1": "Математика",
                    "score1": 10,
                    "subject2": "Физика",
                    "score2": 13,
                    "total": 41
                }
            ]
        },
        {
            "name": "БЕРІК НҰРСҰЛТАН",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/berik_nursultan.jpeg",
            "chart": "templates/11AE/graph/berik_nursultan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 4,
                    "kazakh": 13,
                    "subject1": "Математика",
                    "score1": 19,
                    "subject2": "Физика",
                    "score2": 12,
                    "total": 54
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 6,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 17,
                    "subject2": "Физика",
                    "score2": 14,
                    "total": 53
                }
            ]
        },
        {
            "name": "ЕРҒАЗЫҚЫЗЫ ЕҢЛІК",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/erghazyqyzy_englik.jpeg",
            "chart": "templates/11AE/graph/erghazyqyzy_englik.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 5,
                    "kazakh": 5,
                    "subject1": "Математика",
                    "score1": 22,
                    "subject2": "Физика",
                    "score2": 26,
                    "total": 66
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 3,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 12,
                    "subject2": "Физика",
                    "score2": 6,
                    "total": 38
                }
            ]
        },
        {
            "name": "ЖАРЫ СӘНІМ",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/zhary_saenim.jpeg",
            "chart": "templates/11AE/graph/zhary_saenim.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 8,
                    "kazakh": 12,
                    "subject1": "Математика",
                    "score1": 28,
                    "subject2": "Физика",
                    "score2": 22,
                    "total": 78
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 5,
                    "kazakh": 8,
                    "subject1": "Математика",
                    "score1": 21,
                    "subject2": "Физика",
                    "score2": 16,
                    "total": 59
                }
            ]
        },
        {
            "name": "ЖОЛАМАН АЙБЕРГЕН",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/zholaman_aybergen.jpeg",
            "chart": "templates/11AE/graph/zholaman_aybergen.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 3,
                    "kazakh": 11,
                    "subject1": "Математика",
                    "score1": 13,
                    "subject2": "Физика",
                    "score2": 14,
                    "total": 48
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 3,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 16,
                    "subject2": "Физика",
                    "score2": 13,
                    "total": 48
                }
            ]
        },
        {
            "name": "КӨШЕРБАЙ ӘДІЛХАН",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/koesherbay_aedilkhan.jpeg",
            "chart": "templates/11AE/graph/koesherbay_aedilkhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": "Математика",
                    "score1": " ",
                    "subject2": "Физика",
                    "score2": " ",
                    "total": " "
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 5,
                    "kazakh": 6,
                    "subject1": "Математика",
                    "score1": 11,
                    "subject2": "Физика",
                    "score2": 13,
                    "total": 40
                }
            ]
        },
        {
            "name": "МАҚСАТҰЛЫ ДИАС",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Ағылшын-ДЖТ",
            "photo": "templates/11AE/profile/maqsatuly_dias.jpeg",
            "chart": "templates/11AE/graph/maqsatuly_dias.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 4,
                    "kazakh": 12,
                    "subject1": "Ағылшын",
                    "score1": 12,
                    "subject2": "Джт",
                    "score2": 23,
                    "total": 62
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 6,
                    "kazakh": 8,
                    "subject1": "Джт",
                    "score1": 17,
                    "subject2": "Ағылшын",
                    "score2": 12,
                    "total": 51
                }
            ]
        },
        {
            "name": "МЕҢДІҚҰЛ КЕҢШІЛІК",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/mengdiqul_kengshilik.jpeg",
            "chart": "templates/11AE/graph/mengdiqul_kengshilik.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 6,
                    "kazakh": 11,
                    "subject1": "Математика",
                    "score1": 26,
                    "subject2": "Физика",
                    "score2": 19,
                    "total": 72
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 5,
                    "kazakh": 7,
                    "subject1": "Математика",
                    "score1": 12,
                    "subject2": "Физика",
                    "score2": 10,
                    "total": 43
                }
            ]
        },
        {
            "name": "МУРОДУЛЛАЕВ НҰРБОЛ",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/murodullaev_nurbol.jpeg",
            "chart": "templates/11AE/graph/murodullaev_nurbol.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 4,
                    "kazakh": 10,
                    "subject1": "Математика",
                    "score1": 12,
                    "subject2": "Информатика",
                    "score2": 14,
                    "total": 48
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 3,
                    "kazakh": 8,
                    "subject1": "Математика",
                    "score1": 10,
                    "subject2": "Информатика",
                    "score2": 17,
                    "total": 44
                }
            ]
        },
        {
            "name": "НҰРЛЫ АЙДАНА",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/nurly_aydana.jpeg",
            "chart": "templates/11AE/graph/nurly_aydana.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 6,
                    "kazakh": 8,
                    "subject1": "Математика",
                    "score1": 16,
                    "subject2": "Физика",
                    "score2": 13,
                    "total": 50
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 6,
                    "kazakh": 10,
                    "subject1": "Математика",
                    "score1": 14,
                    "subject2": "Физика",
                    "score2": 10,
                    "total": 46
                }
            ]
        },
        {
            "name": "САБЫРБАЙ КӘУСАР",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": " ",
            "photo": "templates/11AE/profile/sabirbai_kausar.jpeg",
            "chart": "templates/11AE/graph/sabirbai_kausar.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 5,
                    "kazakh": 13,
                    "subject1": "Математика",
                    "score1": 13,
                    "subject2": "География",
                    "score2": 17,
                    "total": 56
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 7,
                    "kazakh": 9,
                    "subject1": "Математика",
                    "score1": 7,
                    "subject2": "География",
                    "score2": 21,
                    "total": 52
                }
            ]
        },
        {
            "name": "СҰЛТАН ҚАЙРАТ",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/sultan_qayrat.jpeg",
            "chart": "templates/11AE/graph/sultan_qayrat.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 5,
                    "kazakh": 6,
                    "subject1": "Математика",
                    "score1": 12,
                    "subject2": "Физика",
                    "score2": 15,
                    "total": 45
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 7,
                    "kazakh": 10,
                    "subject1": "Математика",
                    "score1": 15,
                    "subject2": "Физика",
                    "score2": 15,
                    "total": 52
                }
            ]
        },
        {
            "name": "СҰЛТАНҒАЛИ ТІЛЕУБЕК",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/sultanghali_tileubek.jpeg",
            "chart": "templates/11AE/graph/sultanghali_tileubek.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 6,
                    "kazakh": 12,
                    "subject1": "матем: 27",
                    "score1": " ",
                    "subject2": "физика: 17",
                    "score2": " ",
                    "total": 68
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 7,
                    "kazakh": 10,
                    "subject1": "Матем: 27",
                    "score1": " ",
                    "subject2": "Физика: 21",
                    "score2": " ",
                    "total": 75
                }
            ]
        },
        {
            "name": "ТӨЛЕП ҚУАНЫШ",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/toelep_quanysh.jpeg",
            "chart": "templates/11AE/graph/toelep_quanysh.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 6,
                    "kazakh": 4,
                    "subject1": "Матем: 13",
                    "score1": " ",
                    "subject2": "Физика: 12",
                    "score2": " ",
                    "total": 42
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 5,
                    "kazakh": 10,
                    "subject1": "Матем: 12",
                    "score1": " ",
                    "subject2": "Физика: 7",
                    "score2": " ",
                    "total": 41
                }
            ]
        },
        {
            "name": "ШАДКАМ РАУФ",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/shadkam_rauf.jpeg",
            "chart": "templates/11AE/graph/shadkam_rauf.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 8,
                    "kazakh": 9,
                    "subject1": "матем: 8",
                    "score1": " ",
                    "subject2": "физика: 16",
                    "score2": " ",
                    "total": 66
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 5,
                    "kazakh": 9,
                    "subject1": "Матем: 26",
                    "score1": " ",
                    "subject2": "Физика: 21",
                    "score2": " ",
                    "total": 71
                }
            ]
        },
        {
            "name": "ІЗБАСАР НҰРХАН",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/izbasar_nurkhan.jpeg",
            "chart": "templates/11AE/graph/izbasar_nurkhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 10,
                    "kazakh": 11,
                    "subject1": "матем: 25",
                    "score1": " ",
                    "subject2": "физика: 23",
                    "score2": " ",
                    "total": 79
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 9,
                    "kazakh": 13,
                    "subject1": "Матем: 15",
                    "score1": " ",
                    "subject2": "Физика: 20",
                    "score2": " ",
                    "total": 62
                }
            ]
        },
        {
            "name": "ҚУАНЫШҚЫЗЫ ДИАНА",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Шығармашылық",
            "photo": "templates/11AE/profile/quanyshqyzy_diana.jpeg",
            "chart": "templates/11AE/graph/quanyshqyzy_diana.jpg",
            "results": [{
                    "testName": "ҰБТ №1 (Мектепшілік)",
                    "readingLit": 8,
                    "mathLit": " ",
                    "kazakh": 10,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 57
                },
                {
                    "testName": "ҰБТ №2 (Мектепшілік)",
                    "readingLit": 9,
                    "mathLit": " ",
                    "kazakh": 6,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 15
                }
            ]
        },
        {
            "name": "ӘЛИЕВА ЖАЗИРА",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/aelieva_zhazira.jpeg",
            "chart": "templates/11AE/graph/aelieva_zhazira.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 4,
                    "kazakh": 9,
                    "subject1": "матем: 9",
                    "score1": " ",
                    "subject2": "физика: 9",
                    "score2": " ",
                    "total": 40
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 4,
                    "mathLit": 2,
                    "kazakh": 9,
                    "subject1": "Матем: 9",
                    "score1": " ",
                    "subject2": "Физика: 10",
                    "score2": " ",
                    "total": 34
                }
            ]
        },
        {
            "name": "ӘМИН ӘМИНА",
            "class": "11 «Ә»",
            "teacher": "Есбергенова Нұргүл",
            "subjects": "Математика-Физика",
            "photo": "templates/11AE/profile/aemin_aemina.jpeg",
            "chart": "templates/11AE/graph/aemin_aemina.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 4,
                    "kazakh": 8,
                    "subject1": "матем: 19",
                    "score1": " ",
                    "subject2": "физика: 10",
                    "score2": " ",
                    "total": 47
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 4,
                    "kazakh": 11,
                    "subject1": "Матем: 13",
                    "score1": " ",
                    "subject2": "Физика: 21",
                    "score2": " ",
                    "total": 56
                }
            ]
        }
    ],
    "11 «Б»": [{
            "name": "АЗИЗХАН НАЗГҮЛ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Қазақ тілі- Қазақ әдебиеті",
            "photo": "templates/11B/profile/azizkhan_nazguel.jpeg",
            "chart": "templates/11B/graph/azizkhan_nazguel.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 9,
                    "kazakh": 8,
                    "subject1": "Қазақ тілі: 21",
                    "score1": " ",
                    "subject2": "Қазақ әдеб: 21",
                    "score2": " ",
                    "total": 66
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 7,
                    "kazakh": 10,
                    "subject1": "Қазақ тілі: 29",
                    "score1": " ",
                    "subject2": "Қ әдеб: 28",
                    "score2": " ",
                    "total": 83
                }
            ]
        },
        {
            "name": "АЙМҰРАТ АЙДА",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-Химия",
            "photo": "templates/11B/profile/aymurat_ayda.jpeg",
            "chart": "templates/11B/graph/aymurat_ayda.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 2,
                    "kazakh": 5,
                    "subject1": "Биол: 14",
                    "score1": " ",
                    "subject2": "Химия: 18",
                    "score2": " ",
                    "total": 45
                }
            ]
        },
        {
            "name": "АЙМҰХАН АЙСҰЛУ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-Химия",
            "photo": "templates/11B/profile/aymukhan_aysulu.jpeg",
            "chart": "templates/11B/graph/aymukhan_aysulu.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 1,
                    "kazakh": 8,
                    "subject1": "Биалогия: 12",
                    "score1": " ",
                    "subject2": "География: 11",
                    "score2": " ",
                    "total": 40
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "АМАНГЕЛДІ ИНАБАТ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-Химия",
            "photo": "templates/11B/profile/amangeldi_inabat.jpeg",
            "chart": "templates/11B/graph/amangeldi_inabat.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 2,
                    "mathLit": 3,
                    "kazakh": 8,
                    "subject1": "Биология: 17",
                    "score1": " ",
                    "subject2": "География: 15",
                    "score2": " ",
                    "total": 45
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 1,
                    "kazakh": 7,
                    "subject1": "Биол: 13",
                    "score1": " ",
                    "subject2": "Геог: 22",
                    "score2": " ",
                    "total": 50
                }
            ]
        },
        {
            "name": "АТАҚОЗЫ МАҒЗАМ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-химия",
            "photo": "templates/11B/profile/ataqozy_maghzam.jpeg",
            "chart": "templates/11B/graph/ataqozy_maghzam.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 5,
                    "kazakh": 6,
                    "subject1": "биология: 13",
                    "score1": " ",
                    "subject2": "хим: 9",
                    "score2": " ",
                    "total": 42
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": "физика: —",
                    "score1": " ",
                    "subject2": "матем: —",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "БАУЫРЖАН ҰЛБОЛСЫН",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-География",
            "photo": "templates/11B/profile/bauyrzhan_ulbolsyn.jpeg",
            "chart": "templates/11B/graph/bauyrzhan_ulbolsyn.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 3,
                    "kazakh": 10,
                    "subject1": "Биология: 16",
                    "score1": " ",
                    "subject2": "География: 17",
                    "score2": " ",
                    "total": 52
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 1,
                    "kazakh": 8,
                    "subject1": "Биол: 17",
                    "score1": " ",
                    "subject2": "Геог: 15",
                    "score2": " ",
                    "total": 49
                }
            ]
        },
        {
            "name": "ИТЕМГЕН АҚХАНЫМ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-География",
            "photo": "templates/11B/profile/itemgen_aqkhanym.jpeg",
            "chart": "templates/11B/graph/itemgen_aqkhanym.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 5,
                    "kazakh": 5,
                    "subject1": "Биология: 18",
                    "score1": " ",
                    "subject2": "Химия: 8",
                    "score2": " ",
                    "total": 45
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 4,
                    "kazakh": 11,
                    "subject1": "Биол: 20",
                    "score1": " ",
                    "subject2": "Геог: 20",
                    "score2": " ",
                    "total": 62
                }
            ]
        },
        {
            "name": "КЛЫШБЕК АҚНИЕТ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-География",
            "photo": "templates/11B/profile/klyshbek_aqniet.jpeg",
            "chart": "templates/11B/graph/klyshbek_aqniet.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 6,
                    "kazakh": 8,
                    "subject1": "Биология: 17",
                    "score1": " ",
                    "subject2": "География: 14",
                    "score2": " ",
                    "total": 54
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 6,
                    "kazakh": 10,
                    "subject1": "Биол: 20",
                    "score1": " ",
                    "subject2": "Геог: 23",
                    "score2": " ",
                    "total": 70
                }
            ]
        },
        {
            "name": "КӨПБАЙ ЕРСҰЛТАН",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11B/profile/koepbay_ersultan.jpeg",
            "chart": "templates/11B/graph/koepbay_ersultan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 4,
                    "kazakh": 10,
                    "subject1": "Математика",
                    "score1": 15,
                    "subject2": "Физика",
                    "score2": 12,
                    "total": 48
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 4,
                    "kazakh": 4,
                    "subject1": "Математика",
                    "score1": 11,
                    "subject2": "Физика",
                    "score2": 11,
                    "total": 37
                }
            ]
        },
        {
            "name": "МЫРЗАҒАЛИ МАДИНА",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-Химия",
            "photo": "templates/11B/profile/myrzaghali_madina.jpeg",
            "chart": "templates/11B/graph/myrzaghali_madina.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 6,
                    "kazakh": 11,
                    "subject1": "Биология: 18",
                    "score1": " ",
                    "subject2": "Химия: 14",
                    "score2": " ",
                    "total": 57
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "МҰХАМЕДДИН ЕРДАУЛЕТ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Шығармашылық",
            "photo": "templates/11B/profile/mukhameddin_erdaulet.jpeg",
            "chart": "templates/11B/graph/mukhameddin_erdaulet.jpg",
            "results": [{
                    "testName": "ҰБТ №1 (Мектепшілік)",
                    "readingLit": 3,
                    "mathLit": " ",
                    "kazakh": 7,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 10
                },
                {
                    "testName": "ҰБТ №2 (Мектепшілік)",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "НАЖМАДДИН НАЗЫМ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Ағылшын -ДЖТ",
            "photo": "templates/11B/profile/nazhmaddin_nazym.jpeg",
            "chart": "templates/11B/graph/nazhmaddin_nazym.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 3,
                    "kazakh": 5,
                    "subject1": "ағылшын: 16",
                    "score1": " ",
                    "subject2": "Д тарих: 13",
                    "score2": " ",
                    "total": 44
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 6,
                    "kazakh": 7,
                    "subject1": "джт: 20",
                    "score1": " ",
                    "subject2": "Агылшын: 12",
                    "score2": " ",
                    "total": 51
                }
            ]
        },
        {
            "name": "НУРЛЫХАН ҚУАНДЫҚ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11B/profile/nurlykhan_quandyq.jpeg",
            "chart": "templates/11B/graph/nurlykhan_quandyq.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 5,
                    "mathLit": 4,
                    "kazakh": 5,
                    "subject1": "Матем: 18",
                    "score1": " ",
                    "subject2": "Физика: 12",
                    "score2": " ",
                    "total": 44
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "СЕРІКБАЙ АСЕМАЙ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-Химия",
            "photo": "templates/11B/profile/serikbay_asemay.jpeg",
            "chart": "templates/11B/graph/serikbay_asemay.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 3,
                    "kazakh": 6,
                    "subject1": "Биология: 14",
                    "score1": " ",
                    "subject2": "Химия: 13",
                    "score2": " ",
                    "total": 44
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 6,
                    "kazakh": 3,
                    "subject1": "Биол: 19",
                    "score1": " ",
                    "subject2": "Химия: 15",
                    "score2": " ",
                    "total": 49
                }
            ]
        },
        {
            "name": "ТҰРҒАНБАЙ АРДАҚ",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-Химия",
            "photo": "templates/11B/profile/turghanbay_ardaq.jpeg",
            "chart": "templates/11B/graph/turghanbay_ardaq.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 5,
                    "kazakh": 5,
                    "subject1": "Биология: 16",
                    "score1": " ",
                    "subject2": "Химия: 16",
                    "score2": " ",
                    "total": 50
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 5,
                    "kazakh": 10,
                    "subject1": "Биол: 21",
                    "score1": " ",
                    "subject2": "Химия: 14",
                    "score2": " ",
                    "total": 57
                }
            ]
        },
        {
            "name": "ХОДЖАНАЗАР ЛИЗА",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-География",
            "photo": "templates/11B/profile/khodzhanazar_liza.jpeg",
            "chart": "templates/11B/graph/khodzhanazar_liza.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 5,
                    "kazakh": 9,
                    "subject1": "Биология: 18",
                    "score1": " ",
                    "subject2": "География: 14",
                    "score2": " ",
                    "total": 54
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 6,
                    "kazakh": 8,
                    "subject1": "Биол: 17",
                    "score1": " ",
                    "subject2": "Геог: 20",
                    "score2": " ",
                    "total": 57
                }
            ]
        },
        {
            "name": "ШАКИРОВА МӨЛДІР",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Биология-Химия",
            "photo": "templates/11B/profile/shakirova_moeldir.jpeg",
            "chart": "templates/11B/graph/shakirova_moeldir.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 10,
                    "mathLit": 4,
                    "kazakh": 7,
                    "subject1": "Биология: 21",
                    "score1": " ",
                    "subject2": "Химия: 10",
                    "score2": " ",
                    "total": 52
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 4,
                    "kazakh": 10,
                    "subject1": "Биол: 22",
                    "score1": " ",
                    "subject2": "Химия: 20",
                    "score2": " ",
                    "total": 65
                }
            ]
        },
        {
            "name": "ҚАЛДАН ҒАЛЫМЖАН",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "Математика-Информатика",
            "photo": "templates/11B/profile/qaldan_ghalymzhan.jpeg",
            "chart": "templates/11B/graph/qaldan_ghalymzhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 2,
                    "mathLit": 2,
                    "kazakh": 4,
                    "subject1": "Матем: 16",
                    "score1": " ",
                    "subject2": "Информ: 13",
                    "score2": " ",
                    "total": 37
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 2,
                    "kazakh": 8,
                    "subject1": "матем: 6",
                    "score1": " ",
                    "subject2": "инф: 14",
                    "score2": " ",
                    "total": 35
                }
            ]
        },
        {
            "name": "ҚАНАТҚЫЗЫ БАЛАУСА",
            "class": "11 «Б»",
            "teacher": " ",
            "subjects": "География-Ағылшын",
            "photo": "templates/11B/profile/qanatqyzy_balausa.jpeg",
            "chart": "templates/11B/graph/qanatqyzy_balausa.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 6,
                    "kazakh": 12,
                    "subject1": "География: 21",
                    "score1": " ",
                    "subject2": "Ағылшын: 28",
                    "score2": " ",
                    "total": 75
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 6,
                    "kazakh": 12,
                    "subject1": "геог: 23",
                    "score1": " ",
                    "subject2": "агылшын: 25",
                    "score2": " ",
                    "total": 76
                }
            ]
        }
    ],
    "11 «В»": [{
            "name": "АБДІЖӘЛІ АЯУЛЫМ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Информатика",
            "photo": "templates/11V/profile/abdizhaeli_ayaulym.jpeg",
            "chart": "templates/11V/graph/abdizhaeli_ayaulym.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 5,
                    "kazakh": 11,
                    "subject1": "Матем: 11",
                    "score1": " ",
                    "subject2": "Информ: 18",
                    "score2": " ",
                    "total": 53
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 4,
                    "kazakh": 9,
                    "subject1": "Матем: 16",
                    "score1": " ",
                    "subject2": "Инф: 23",
                    "score2": " ",
                    "total": 61
                }
            ]
        },
        {
            "name": "АБЗАЛҰЛЫ ЕРБОЛ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/abzaluly_erbol.jpeg",
            "chart": "templates/11V/graph/abzaluly_erbol.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 5,
                    "mathLit": 6,
                    "kazakh": 4,
                    "subject1": "Матем: 12",
                    "score1": " ",
                    "subject2": "Физика: 13",
                    "score2": " ",
                    "total": 40
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 6,
                    "kazakh": 6,
                    "subject1": "Матем: 14",
                    "score1": " ",
                    "subject2": "Физика: 10",
                    "score2": " ",
                    "total": 45
                }
            ]
        },
        {
            "name": "АЙМҰРАТ СҰҢҒАТ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Информатика",
            "photo": "templates/11V/profile/aymurat_sungghat.jpeg",
            "chart": "templates/11V/graph/aymurat_sungghat.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 6,
                    "kazakh": 6,
                    "subject1": "Матем: 14",
                    "score1": " ",
                    "subject2": "Информ: 14",
                    "score2": " ",
                    "total": 49
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 2,
                    "kazakh": 7,
                    "subject1": "Матем: 6",
                    "score1": " ",
                    "subject2": "Инф: 14",
                    "score2": " ",
                    "total": 34
                }
            ]
        },
        {
            "name": "АМАНОВ ИСАБЕК",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/amanov_isabek.jpeg",
            "chart": "templates/11V/graph/amanov_isabek.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 8,
                    "kazakh": 13,
                    "subject1": "Матем: 18",
                    "score1": " ",
                    "subject2": "Физика: 20",
                    "score2": " ",
                    "total": 67
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 7,
                    "kazakh": 17,
                    "subject1": "Матем: 19",
                    "score1": " ",
                    "subject2": "Физика: 24",
                    "score2": " ",
                    "total": 77
                }
            ]
        },
        {
            "name": "АНЕСОВА ЖАНСЕЛЬ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Шығармашылық",
            "photo": "templates/11V/profile/anesova_zhansel.jpeg",
            "chart": "templates/11V/graph/anesova_zhansel.jpg",
            "results": [{
                    "testName": "ҰБТ №1 (Мектепшілік)",
                    "readingLit": 9,
                    "mathLit": " ",
                    "kazakh": 11,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 20
                },
                {
                    "testName": "ҰБТ №2 (Мектепшілік)",
                    "readingLit": 9,
                    "mathLit": " ",
                    "kazakh": 11,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 20
                }
            ]
        },
        {
            "name": "АҚҚОЖА АЗАТ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/aqqozha_azat.jpeg",
            "chart": "templates/11V/graph/aqqozha_azat.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 8,
                    "kazakh": 16,
                    "subject1": "Матем: 33",
                    "score1": " ",
                    "subject2": "Физика: 21",
                    "score2": " ",
                    "total": 86
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 2,
                    "mathLit": 3,
                    "kazakh": 5,
                    "subject1": "Матем: 18",
                    "score1": " ",
                    "subject2": "Физика: 12",
                    "score2": " ",
                    "total": 40
                }
            ]
        },
        {
            "name": "БАЯНОВА НАЗЕРКЕ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "ДЖТ-АҒЫЛШЫН",
            "photo": "templates/11V/profile/bayanova_nazerke.jpeg",
            "chart": "templates/11V/graph/bayanova_nazerke.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 3,
                    "kazakh": 8,
                    "subject1": "ДЖТ: 20",
                    "score1": " ",
                    "subject2": "Ағылшын: 29",
                    "score2": " ",
                    "total": 69
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 4,
                    "kazakh": 13,
                    "subject1": "Джт: 20",
                    "score1": " ",
                    "subject2": "Агылшын: 28",
                    "score2": " ",
                    "total": 75
                }
            ]
        },
        {
            "name": "ЖАЛАУ СЕРІКҚАЛИ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/zhalau_serikqali.jpeg",
            "chart": "templates/11V/graph/zhalau_serikqali.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 4,
                    "kazakh": 5,
                    "subject1": "Матем: 7",
                    "score1": " ",
                    "subject2": "Физика: 11",
                    "score2": " ",
                    "total": 36
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 7,
                    "kazakh": 12,
                    "subject1": "Матем: 10",
                    "score1": " ",
                    "subject2": "Физика: 11",
                    "score2": " ",
                    "total": 48
                }
            ]
        },
        {
            "name": "ЖАЛКАСОВ АҚЫЛБЕК",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/zhalkasov_aqylbek.jpeg",
            "chart": "templates/11V/graph/zhalkasov_aqylbek.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 5,
                    "mathLit": 4,
                    "kazakh": 5,
                    "subject1": "Матем: 13",
                    "score1": " ",
                    "subject2": "Физика: 17",
                    "score2": " ",
                    "total": 44
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "НАУРЫЗ НАЗЕРКЕ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Биология-География",
            "photo": "templates/11V/profile/nauryz_nazerke.jpeg",
            "chart": "templates/11V/graph/nauryz_nazerke.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 5,
                    "mathLit": 5,
                    "kazakh": 8,
                    "subject1": "ДЖТ: 14",
                    "score1": " ",
                    "subject2": "География: 12",
                    "score2": " ",
                    "total": 44
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 3,
                    "kazakh": 8,
                    "subject1": "Джт: 17",
                    "score1": " ",
                    "subject2": "Геогр: 22",
                    "score2": " ",
                    "total": 59
                }
            ]
        },
        {
            "name": "НҰРЛАНОВ ШЕРХАН",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Информатика",
            "photo": "templates/11V/profile/nurlanov_sherkhan.jpeg",
            "chart": "templates/11V/graph/nurlanov_sherkhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 9,
                    "kazakh": 11,
                    "subject1": "Матем: 9",
                    "score1": " ",
                    "subject2": "Информ: 11",
                    "score2": " ",
                    "total": 51
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 2,
                    "kazakh": 9,
                    "subject1": "Матем: 14",
                    "score1": " ",
                    "subject2": "Инф: 20",
                    "score2": " ",
                    "total": 51
                }
            ]
        },
        {
            "name": "РАХМЕТ АЙДОС",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/rakhmet_aydos.jpeg",
            "chart": "templates/11V/graph/rakhmet_aydos.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 7,
                    "kazakh": 8,
                    "subject1": "Матем: 21",
                    "score1": " ",
                    "subject2": "Физика: 14",
                    "score2": " ",
                    "total": 56
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "САУНБАЕВА СӘНИЯ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Биология-Химия",
            "photo": "templates/11V/profile/saunbaeva_saeniya.jpeg",
            "chart": "templates/11V/graph/saunbaeva_saeniya.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 4,
                    "mathLit": 5,
                    "kazakh": 4,
                    "subject1": "Биалогия: 14",
                    "score1": " ",
                    "subject2": "География: 12",
                    "score2": " ",
                    "total": 39
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 1,
                    "kazakh": 5,
                    "subject1": "Биол: 10",
                    "score1": " ",
                    "subject2": "Геог: 22",
                    "score2": " ",
                    "total": 47
                }
            ]
        },
        {
            "name": "САҒЫНҒАЛИҚЫЗЫ БАНУ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Биология-Химия",
            "photo": "templates/11V/profile/saghynghaliqyzy_banu.jpeg",
            "chart": "templates/11V/graph/saghynghaliqyzy_banu.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 7,
                    "kazakh": 8,
                    "subject1": "Биология: 8",
                    "score1": " ",
                    "subject2": "Химия: 11",
                    "score2": " ",
                    "total": 41
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 2,
                    "kazakh": 4,
                    "subject1": "Биол: 15",
                    "score1": " ",
                    "subject2": "Химия: 16",
                    "score2": " ",
                    "total": 42
                }
            ]
        },
        {
            "name": "САҚТАҒАН АҚМАРАЛ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Биология-География",
            "photo": "templates/11V/profile/saqtaghan_aqmaral.jpeg",
            "chart": "templates/11V/graph/saqtaghan_aqmaral.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 4,
                    "mathLit": 3,
                    "kazakh": 9,
                    "subject1": "Биология: 26",
                    "score1": " ",
                    "subject2": "География: 15",
                    "score2": " ",
                    "total": 57
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 4,
                    "mathLit": 1,
                    "kazakh": 9,
                    "subject1": "Биол: 29",
                    "score1": " ",
                    "subject2": "Геогр: 15",
                    "score2": " ",
                    "total": 58
                }
            ]
        },
        {
            "name": "СЕГІЗБАЕВ ЕРНАР",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Информатика",
            "photo": "templates/11V/profile/segizbaev_ernar.jpeg",
            "chart": "templates/11V/graph/segizbaev_ernar.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": "Матем: 17",
                    "score1": " ",
                    "subject2": "Инф: 14",
                    "score2": " ",
                    "total": " "
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 4,
                    "kazakh": 5,
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 46
                }
            ]
        },
        {
            "name": "ТӘТІБАЙ НҰРМҰХАНБЕТ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/taetibay_nurmukhanbet.jpeg",
            "chart": "templates/11V/graph/taetibay_nurmukhanbet.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 2,
                    "mathLit": 1,
                    "kazakh": 5,
                    "subject1": "Матем: 14",
                    "score1": " ",
                    "subject2": "Физика: 12",
                    "score2": " ",
                    "total": 34
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 2,
                    "mathLit": 4,
                    "kazakh": 6,
                    "subject1": "Матем: 14",
                    "score1": " ",
                    "subject2": "Инф: 6",
                    "score2": " ",
                    "total": 32
                }
            ]
        },
        {
            "name": "ТӨЛЕПБЕРГЕН ЕРНАР",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/toelepbergen_ernar.jpeg",
            "chart": "templates/11V/graph/toelepbergen_ernar.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 5,
                    "mathLit": 2,
                    "kazakh": 11,
                    "subject1": "Матем: 34",
                    "score1": " ",
                    "subject2": "Физика: 18",
                    "score2": " ",
                    "total": 70
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 2,
                    "kazakh": 7,
                    "subject1": "Матем: 10",
                    "score1": " ",
                    "subject2": "Физика: 11",
                    "score2": " ",
                    "total": 36
                }
            ]
        },
        {
            "name": "ЧОПАНОВ МУСА",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/chopanov_musa.jpeg",
            "chart": "templates/11V/graph/chopanov_musa.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 6,
                    "kazakh": 7,
                    "subject1": "Матем: 16",
                    "score1": " ",
                    "subject2": "Информ: 6",
                    "score2": " ",
                    "total": 44
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 4,
                    "kazakh": 5,
                    "subject1": "Матем: 15",
                    "score1": " ",
                    "subject2": "Инф: 24",
                    "score2": " ",
                    "total": 57
                }
            ]
        },
        {
            "name": "ШАКИРОВ МЕЙІРЖАН",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/shakirov_meyirzhan.jpeg",
            "chart": "templates/11V/graph/shakirov_meyirzhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 5,
                    "kazakh": 8,
                    "subject1": "Матем: 19",
                    "score1": " ",
                    "subject2": "Физика: 15",
                    "score2": " ",
                    "total": 53
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 3,
                    "kazakh": 7,
                    "subject1": "Матем: 11",
                    "score1": " ",
                    "subject2": "Физика: 15",
                    "score2": " ",
                    "total": 43
                }
            ]
        },
        {
            "name": "ҚАЗЫҒҰЛ ӘСИЯ",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Информатика",
            "photo": "templates/11V/profile/qazyghul_aesiya.jpeg",
            "chart": "templates/11V/graph/qazyghul_aesiya.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 8,
                    "kazakh": 8,
                    "subject1": "Матем: 21",
                    "score1": " ",
                    "subject2": "Информ: 18",
                    "score2": " ",
                    "total": 63
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 6,
                    "kazakh": 14,
                    "subject1": "Матем: 14",
                    "score1": " ",
                    "subject2": "Инф: 27",
                    "score2": " ",
                    "total": 69
                }
            ]
        },
        {
            "name": "ҚАЙРАТҰЛЫ МАДИЯР",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/qayratuly_madiyar.jpeg",
            "chart": "templates/11V/graph/qayratuly_madiyar.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 5,
                    "mathLit": 8,
                    "kazakh": 15,
                    "subject1": "Матем: 21",
                    "score1": " ",
                    "subject2": "Физика: 32",
                    "score2": " ",
                    "total": 81
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 4,
                    "kazakh": 10,
                    "subject1": "Матем: 10",
                    "score1": " ",
                    "subject2": "Физика: 13",
                    "score2": " ",
                    "total": 45
                }
            ]
        },
        {
            "name": "ӘБІЛҒАЗЫ АЛДИЯР",
            "class": "11 «В»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11V/profile/aebilghazy_aldiyar.jpeg",
            "chart": "templates/11V/graph/aebilghazy_aldiyar.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 7,
                    "kazakh": 11,
                    "subject1": "Матем: 26",
                    "score1": " ",
                    "subject2": "Физика: 33",
                    "score2": " ",
                    "total": 84
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 3,
                    "kazakh": 8,
                    "subject1": "Матем: 7",
                    "score1": " ",
                    "subject2": "Физика: 8",
                    "score2": " ",
                    "total": 34
                }
            ]
        }
    ],
    "11 «Г»": [{
            "name": "АБДРАКИМ ДИАС",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/abdrakim_dias.jpeg",
            "chart": "templates/11G/graph/abdrakim_dias.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 3,
                    "mathLit": 3,
                    "kazakh": 5,
                    "subject1": "ДЖТ: 14",
                    "score1": " ",
                    "subject2": "Құқық: 14",
                    "score2": " ",
                    "total": 42
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 4,
                    "kazakh": 8,
                    "subject1": "Джт: 13",
                    "score1": " ",
                    "subject2": "Құқық: 15",
                    "score2": " ",
                    "total": 45
                }
            ]
        },
        {
            "name": "АЗАНҒАЛИ МАРЖАН",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/azanghali_marzhan.jpeg",
            "chart": "templates/11G/graph/azanghali_marzhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 5,
                    "kazakh": 7,
                    "subject1": "ДЖТ: 17",
                    "score1": " ",
                    "subject2": "Құқық: 24",
                    "score2": " ",
                    "total": 61
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 2,
                    "kazakh": 6,
                    "subject1": "Джт: 15",
                    "score1": " ",
                    "subject2": "Құқық: 24",
                    "score2": " ",
                    "total": 54
                }
            ]
        },
        {
            "name": "БҮРКІТӘЛІҚЫЗЫ ЖАН",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Ағылшын",
            "photo": "templates/11G/profile/buerkitaeliqyzy_zhan.jpeg",
            "chart": "templates/11G/graph/buerkitaeliqyzy_zhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 5,
                    "mathLit": 5,
                    "kazakh": 4,
                    "subject1": "Ағылшын: 23",
                    "score1": " ",
                    "subject2": "ДЖТ: 18",
                    "score2": " ",
                    "total": 55
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 2,
                    "kazakh": 9,
                    "subject1": "Джт: 15",
                    "score1": " ",
                    "subject2": "Агылшын: 14",
                    "score2": " ",
                    "total": 48
                }
            ]
        },
        {
            "name": "ЖУМАГАЗЫ АЗАМАТ",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/zhumagazy_azamat.jpeg",
            "chart": "templates/11G/graph/zhumagazy_azamat.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 4,
                    "mathLit": 3,
                    "kazakh": 7,
                    "subject1": "ДЖТ: 12",
                    "score1": " ",
                    "subject2": "Құқық: 24",
                    "score2": " ",
                    "total": 50
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "КЕҢШІЛІК ІҢКӘР",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "Шығармашылық",
            "photo": "templates/11G/profile/kengshilik_ingkaer.jpeg",
            "chart": "templates/11G/graph/kengshilik_ingkaer.jpg",
            "results": [{
                    "testName": "ҰБТ №1 (Мектепшілік)",
                    "readingLit": 10,
                    "mathLit": " ",
                    "kazakh": 12,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 22
                },
                {
                    "testName": "ҰБТ №2 (Мектепшілік)",
                    "readingLit": 7,
                    "mathLit": " ",
                    "kazakh": 11,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 18
                }
            ]
        },
        {
            "name": "КИІКБАЙ АҚТОРҒЫН",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "Шығармашылық",
            "photo": "templates/11G/profile/kiikbay_aqtorghyn.jpeg",
            "chart": "templates/11G/graph/kiikbay_aqtorghyn.jpg",
            "results": [{
                    "testName": "ҰБТ №1 (Мектепшілік)",
                    "readingLit": 7,
                    "mathLit": " ",
                    "kazakh": 9,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 16
                },
                {
                    "testName": "ҰБТ №2 (Мектепшілік)",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "МАҢҒАЗБЕК ДИАС",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/mangghazbek_dias.jpeg",
            "chart": "templates/11G/graph/mangghazbek_dias.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 5,
                    "kazakh": 4,
                    "subject1": "ДЖТ: 17",
                    "score1": " ",
                    "subject2": "Құқық: 24",
                    "score2": " ",
                    "total": 57
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": " ",
                    "kazakh": 8,
                    "subject1": "Джт: 15",
                    "score1": " ",
                    "subject2": "Құқық: 27",
                    "score2": " ",
                    "total": 61
                }
            ]
        },
        {
            "name": "НҮРКЕН ИМАНАЛИ",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Ағылшын",
            "photo": "templates/11G/profile/nuerken_imanali.jpeg",
            "chart": "templates/11G/graph/nuerken_imanali.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 8,
                    "kazakh": 6,
                    "subject1": "Ағылшын: 28",
                    "score1": " ",
                    "subject2": "ДЖТ: 15",
                    "score2": " ",
                    "total": 64
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 4,
                    "kazakh": 13,
                    "subject1": "Джт: 19",
                    "score1": " ",
                    "subject2": "Агылшын: 25",
                    "score2": " ",
                    "total": 68
                }
            ]
        },
        {
            "name": "НҰРГЕЛДІҰЛЫ РАМАЗАН",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/nurgeldiuly_ramazan.jpeg",
            "chart": "templates/11G/graph/nurgeldiuly_ramazan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 3,
                    "mathLit": 3,
                    "kazakh": 8,
                    "subject1": "ДЖТ: 12",
                    "score1": " ",
                    "subject2": "Құқық: 20",
                    "score2": " ",
                    "total": 46
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 2,
                    "kazakh": 4,
                    "subject1": "Джт: 12",
                    "score1": " ",
                    "subject2": "Құқық: 19",
                    "score2": " ",
                    "total": 42
                }
            ]
        },
        {
            "name": "НҰРНИЯЗОВА ИНАБАТ",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "Қазақ тілі-Қазақ әдебиет",
            "photo": "templates/11G/profile/nurniyazova_inabat.jpeg",
            "chart": "templates/11G/graph/nurniyazova_inabat.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 10,
                    "mathLit": 6,
                    "kazakh": 8,
                    "subject1": "Қазақ тілі: 28",
                    "score1": " ",
                    "subject2": "Әдебиет: 24",
                    "score2": " ",
                    "total": 76
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 2,
                    "kazakh": 12,
                    "subject1": "Қазақ тілі: 30",
                    "score1": " ",
                    "subject2": "Қ әдеб: 31",
                    "score2": " ",
                    "total": 82
                }
            ]
        },
        {
            "name": "САБУРОВ НҰРСҰЛТАН",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/saburov_nursultan.jpeg",
            "chart": "templates/11G/graph/saburov_nursultan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 4,
                    "mathLit": 2,
                    "kazakh": 4,
                    "subject1": "ДЖТ: 12",
                    "score1": " ",
                    "subject2": "Құқық: 13",
                    "score2": " ",
                    "total": 35
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "САБУРОВА МАДИНА",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "Математика-Физика",
            "photo": "templates/11G/profile/saburova_madina.jpeg",
            "chart": "templates/11G/graph/saburova_madina.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 8,
                    "mathLit": 5,
                    "kazakh": 9,
                    "subject1": "Матем: 14",
                    "score1": " ",
                    "subject2": "Физика: 19",
                    "score2": " ",
                    "total": 55
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 5,
                    "kazakh": 9,
                    "subject1": "Матем: 14",
                    "score1": " ",
                    "subject2": "Физика: 14",
                    "score2": " ",
                    "total": 51
                }
            ]
        },
        {
            "name": "САНСЫЗБАЙ ЕРЖАН",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ -Ағылшын",
            "photo": "templates/11G/profile/sansyzbay_erzhan.jpeg",
            "chart": "templates/11G/graph/sansyzbay_erzhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 5,
                    "mathLit": 4,
                    "kazakh": 11,
                    "subject1": "Ағылшын: 29",
                    "score1": " ",
                    "subject2": "ДЖТ: 17",
                    "score2": " ",
                    "total": 66
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 5,
                    "kazakh": 9,
                    "subject1": "Джт: 15",
                    "score1": " ",
                    "subject2": "Агылшын: 29",
                    "score2": " ",
                    "total": 59
                }
            ]
        },
        {
            "name": "ТАЗАБАЙ ЕРКЕБҰЛАН",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/tazabay_erkebulan.jpeg",
            "chart": "templates/11G/graph/tazabay_erkebulan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 7,
                    "kazakh": 11,
                    "subject1": "ДЖТ: 15",
                    "score1": " ",
                    "subject2": "Құқық: 22",
                    "score2": " ",
                    "total": 64
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 8,
                    "mathLit": 6,
                    "kazakh": 10,
                    "subject1": "Джт: 15",
                    "score1": " ",
                    "subject2": "Құқық: 20",
                    "score2": " ",
                    "total": 59
                }
            ]
        },
        {
            "name": "ТАТАН АЙЫМ",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/tatan_ayym.jpeg",
            "chart": "templates/11G/graph/tatan_ayym.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 4,
                    "kazakh": 11,
                    "subject1": "ДЖТ: 25",
                    "score1": " ",
                    "subject2": "Құқық: 29",
                    "score2": " ",
                    "total": 76
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 6,
                    "kazakh": 14,
                    "subject1": "Джт: 23",
                    "score1": " ",
                    "subject2": "Құқық: 24",
                    "score2": " ",
                    "total": 74
                }
            ]
        },
        {
            "name": "ТЕКЕБАЕВА ҰЛДАНАЙ",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "География-Ағылшын",
            "photo": "templates/11G/profile/tekebaeva_uldanay.jpeg",
            "chart": "templates/11G/graph/tekebaeva_uldanay.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 7,
                    "mathLit": 5,
                    "kazakh": 9,
                    "subject1": "География: 12",
                    "score1": " ",
                    "subject2": "Ағылшын: 36",
                    "score2": " ",
                    "total": 69
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 4,
                    "kazakh": 8,
                    "subject1": "Анг: 35",
                    "score1": " ",
                    "subject2": "Геогр: 16",
                    "score2": " ",
                    "total": 72
                }
            ]
        },
        {
            "name": "ТЕМІРБАЙ ӘМИНА",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/temirbay_aemina.jpeg",
            "chart": "templates/11G/graph/temirbay_aemina.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 10,
                    "mathLit": 4,
                    "kazakh": 9,
                    "subject1": "Ағылшын: 24",
                    "score1": " ",
                    "subject2": "ДЖТ: 27",
                    "score2": " ",
                    "total": 74
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 5,
                    "mathLit": 4,
                    "kazakh": 11,
                    "subject1": "Джт: 14",
                    "score1": " ",
                    "subject2": "Агылшын: 18",
                    "score2": " ",
                    "total": 52
                }
            ]
        },
        {
            "name": "ТОКБАЕВ АСЫЛХАН",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/tokbaev_asylkhan.jpeg",
            "chart": "templates/11G/graph/tokbaev_asylkhan.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": "Джт: 11",
                    "score1": " ",
                    "subject2": "Агылшын: 15",
                    "score2": " ",
                    "total": " "
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 9,
                    "mathLit": 2,
                    "kazakh": 9,
                    "subject1": "Джт: 11",
                    "score1": " ",
                    "subject2": "Агылшын: 15",
                    "score2": " ",
                    "total": 46
                }
            ]
        },
        {
            "name": "ТЫНЫШТЫҚ ДАРИЯ",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/tynyshtyq_dariya.jpeg",
            "chart": "templates/11G/graph/tynyshtyq_dariya.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 9,
                    "mathLit": 3,
                    "kazakh": 9,
                    "subject1": "ДЖТ: 16",
                    "score1": " ",
                    "subject2": "Құқық: 21",
                    "score2": " ",
                    "total": 58
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 10,
                    "mathLit": 8,
                    "kazakh": 7,
                    "subject1": "Джт: 15",
                    "score1": " ",
                    "subject2": "Құқық: 25",
                    "score2": " ",
                    "total": 65
                }
            ]
        },
        {
            "name": "ШАМУРАТ ХАМЗА",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/shamurat_khamza.jpeg",
            "chart": "templates/11G/graph/shamurat_khamza.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 4,
                    "mathLit": 3,
                    "kazakh": 9,
                    "subject1": "ДЖТ: 14",
                    "score1": " ",
                    "subject2": "Құқық: 24",
                    "score2": " ",
                    "total": 54
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 6,
                    "mathLit": 3,
                    "kazakh": 8,
                    "subject1": "Джт: 19",
                    "score1": " ",
                    "subject2": "Құқық: 18",
                    "score2": " ",
                    "total": 54
                }
            ]
        },
        {
            "name": "ҚАЛМҰРЗА ЕРБОЛАТ",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "ДЖТ-Құқық",
            "photo": "templates/11G/profile/qalmurza_erbolat.jpeg",
            "chart": "templates/11G/graph/qalmurza_erbolat.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 2,
                    "kazakh": 5,
                    "subject1": "ДЖТ: 14",
                    "score1": " ",
                    "subject2": "Құқық: 19",
                    "score2": " ",
                    "total": 46
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 4,
                    "mathLit": 4,
                    "kazakh": 10,
                    "subject1": "Джт: 16",
                    "score1": " ",
                    "subject2": "Құқық: 20",
                    "score2": " ",
                    "total": 54
                }
            ]
        },
        {
            "name": "ҰЗАҚБАЙ НҰРИСЛАМ",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "Шығармашылық",
            "photo": "templates/11G/profile/uzaqbay_nurislam.jpeg",
            "chart": "templates/11G/graph/uzaqbay_nurislam.jpg",
            "results": [{
                    "testName": "ҰБТ №1 (Мектепшілік)",
                    "readingLit": 9,
                    "mathLit": " ",
                    "kazakh": 5,
                    "subject1": "Шығармашылық",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": 14
                },
                {
                    "testName": "ҰБТ №2 (Мектепшілік)",
                    "readingLit": " ",
                    "mathLit": " ",
                    "kazakh": " ",
                    "subject1": " ",
                    "score1": " ",
                    "subject2": " ",
                    "score2": " ",
                    "total": " "
                }
            ]
        },
        {
            "name": "ӘБДІРАСЕЙІТОВА АСЫЛТАС",
            "class": "11 «Г»",
            "teacher": " ",
            "subjects": "Қазақ тілі-Қазақ әдебиет",
            "photo": "templates/11G/profile/aebdiraseyitova_asyltas.jpeg",
            "chart": "templates/11G/graph/aebdiraseyitova_asyltas.jpg",
            "results": [{
                    "testName": "ҰБТ №1",
                    "readingLit": 6,
                    "mathLit": 6,
                    "kazakh": 8,
                    "subject1": "Қазақ тілі: 26",
                    "score1": " ",
                    "subject2": "Қазақ әдеб: 22",
                    "score2": " ",
                    "total": 68
                },
                {
                    "testName": "ҰБТ №2",
                    "readingLit": 7,
                    "mathLit": 6,
                    "kazakh": 12,
                    "subject1": "Қазақ тілі: 46",
                    "score1": " ",
                    "subject2": "Қ әдеб: 25",
                    "score2": " ",
                    "total": 96
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
                            <th>Қазақстан тарихы</th>
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




//    Добавление фото профиля ученика
//<div class="profile-photo">
//               <img src="${student.photo}" alt="${student.name}">
//</div>

//  Добавление учителя в профиль ученика
////<div class="info-item">
//                   <span class="info-label">Сынып жетекшісі:</span>
//                   <span class="info-value">${student.teacher}</span>
//</div>