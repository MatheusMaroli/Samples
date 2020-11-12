const TYPE = {
    ADD : 'ADD',
    REMOVE: 'REMOVE'
};

const INITIAL_STATE = [];


export default function listItem(state= INITIAL_STATE, action)
{
    switch(action.type)
    {
        case TYPE.ADD: return [...state, {id: Math.random(), text: action.text} ];
        case TYPE.REMOVE: return  state.filter(e => e.id !== action.id);    
        default  :return state;    
    }
}

export function addItemList(text){
    return {type: TYPE.ADD, text };
};

export function removeItemList (id) 
{
    return{type: TYPE.REMOVE, id }
};