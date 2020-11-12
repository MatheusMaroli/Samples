
import { TodosTypes} from './types';

export const addTodo = (text : string)  =>  ({type: TodosTypes.ADD, payload: text }); 
export const removeTodo = (id : number) => ({type: TodosTypes.REMOVE, payload: id});