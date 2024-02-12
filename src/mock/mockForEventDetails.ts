import {IEvent} from "../interfaces/IEventDetails";


export const mockEvents: IEvent[] = [
    {
        id:'1',
        clubTitle: 'Borussia Dortmund',
        soccerTitle: 'SC Freiburg',
        date: '10/02',
        time: '01:30',
        scores: [
            {score: 2.46},
            {score: 1.58},
            {
                score: 1.93, odd: '+3.5'
            },
            {
                score: 1.85, odd: '-3.5'
            },
            {
                score: 1.93, odd: 'o243.5'
            },
            {
                score: 1.85, odd: 'u243.5'
            },
        ],
    },
    {
        id:'2',
        clubTitle: 'Union Berlin',
        soccerTitle: 'VfL Wolfsburg',
        date: '10/02',
        time: '20:30',
        scores: [
            {score: 1.06},
            {score: 10.50},
            {
                score: 1.85, odd: '(-16.5)'
            },
            {
                score: 1.93, odd: '(+16.5)'
            },
            {
                score: 1.89, odd: 'o236.5'
            },
            {
                score: 1.80, odd: 'u236.5'
            },

        ]
    },
    {
        id:'3',
        clubTitle: 'Borussia Monchengladbach',
        soccerTitle: 'SV Darmstadt 98',
        date: '10/02',
        time: '20:30',
        scores: [
            {score: 1.06},
            {score: 10.50},
            {
                score: 1.85, odd: '(-16.5)'
            },
            {
                score: 1.93, odd: '(+16.5)'
            },
            {
                score: 1.89, odd: 'o236.5'
            },
            {
                score: 1.80, odd: 'u236.5'
            },

        ]
    },
    {
        id:'4',
        clubTitle: 'Eintracht Frankfurt',
        soccerTitle: 'VfL Bochum',
        date: '10/02',
        time: '20:30',
        scores: [
            {score: 1.06},
            {score: 10.50},
            {
                score: 1.85, odd: '(-16.5)'
            },
            {
                score: 1.93, odd: '(+16.5)'
            },
            {
                score: 1.89, odd: 'o236.5'
            },
            {
                score: 1.80, odd: 'u236.5'
            },

        ]
    },
    {
        id:'5',
        clubTitle: 'FC Augsburg',
        soccerTitle: 'RB Leipzig ',
        date: '10/02',
        time: '20:30',
        scores: [
            {score: 1.06},
            {score: 10.50},
            {
                score: 1.85, odd: '(-16.5)'
            },
            {
                score: 1.93, odd: '(+16.5)'
            },
            {
                score: 1.89, odd: 'o236.5'
            },
            {
                score: 1.80, odd: 'u236.5'
            },

        ]
    },
    {
        id:'6',
        clubTitle: 'Werder Bremen',
        soccerTitle: 'FC Heidenheim 1846',
        date: '10/02',
        time: '20:30',
        scores: [
            {score: 1.06},
            {score: 10.50},
            {
                score: 1.85, odd: '(-16.5)'
            },
            {
                score: 1.93, odd: '(+16.5)'
            },
            {
                score: 1.89, odd: 'o236.5'
            },
            {
                score: 1.80, odd: 'u236.5'
            },

        ]
    }
]
export const mockOddType=[
    {
        value:'на победу хозяев'
    },
    {
        value:'на ничью'
    },
    {
        value:'на победу гостей'
    },
]