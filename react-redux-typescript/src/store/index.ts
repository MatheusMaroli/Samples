import {createStore, Store} from 'redux'
import {TodosState} from './ducks/todos/types'
import rootReducers from './ducks/rootRedeucers';


export interface ApplicationStore {
    todos : TodosState 
}
const store : Store<ApplicationStore> = createStore(rootReducers) 
export default store;