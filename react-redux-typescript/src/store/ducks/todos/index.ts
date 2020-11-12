import {TodosTypes, TodosState} from './types';
import {Reducer} from 'redux';

const INITIAL_STATE : TodosState = {
    data: []
} 

const todosReducer : Reducer<TodosState> = (state = INITIAL_STATE, action ) =>
{
    switch(action.type)
    {
        case TodosTypes.ADD : return { ...state,  data: [...state.data , {id:  Math.random(), name: action.payload}] };
        case TodosTypes.REMOVE : return { ...state,  data: state.data.filter( f=> f.id !== action.payload) };
        default : return state;
    };
    
}


export default todosReducer;