const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},
    modules: [
        { id :1, title:"Introdução react", lessons: [
            { id :1, title:"Primeira Aula"},
            { id :2, title:"Segunda Aula"},
        ]},
        { id :2, title:"Intermediario react", lessons: [
            { id :1, title:"Primeira Aula"},
            { id :2, title:"Segunda Aula"},
        ]},
    ],
    text: 'texyt',
    testNull: null,
    array:[
        {id:1, title: 'test'}
    ]
};

export default function course(state = INITIAL_STATE,  action) {
    if (action.type === 'TOGGLE_LESSON') {
        return { ...state, activeLesson: action.lesson, activeModule: action.module};
      
    }
    return state;
}