import React, { useState} from 'react';
import {connect} from 'react-redux';
import { Dispatch} from 'redux';
import * as TodosActions from '../store/ducks/todos/actions';


interface DispatchProps {
    addTodo(name: string):void
}

const TodosAdd =({addTodo} : DispatchProps) =>
{
    const [name, setName] = useState('');
    return (
      <div>        
        <input onChange={(e) => setName(e.target.value)} placeholder="Insira um item"></input><br></br>
        <button onClick={e =>  addTodo(name) }>Salvar</button>
      </div> 
    )
}
const mapDispatchToProps =(dispatch : Dispatch) => ({
    addTodo: (name : string) => dispatch(TodosActions.addTodo(name))
})

export default connect(null, mapDispatchToProps)(TodosAdd);