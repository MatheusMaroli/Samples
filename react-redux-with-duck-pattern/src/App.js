import React, {useState} from 'react';
import {connect } from 'react-redux';
import * as listAction from './store/ducks/list';


const App = ({list, addItemList, removeItemList}) => {
  const [text, setText] = useState('');

  const handlerAddItem = () => {
    debugger;
    addItemList(text);
    setText('');
  }


  return (
    <div className="App">
        <h1>Redux com duck pattern</h1>
        <p>Exemplo de uma lista de itens com redux e duck pattern </p>
        <div>
          
            <input onChange={(e) => setText(e.target.value)} placeholder="Insira um item"></input><br></br>
            <button onClick={handlerAddItem}>Salvar</button>
        </div>
        <ul>
          {
            list.map(item => (
                <li key={item.id}>{item.text} <button onClick={()=> removeItemList(item.id)} >Remover</button></li>
            ))
          }
        </ul>
    </div>
  );
}

const mapStateProps = (state) =>({
  list: state.list
});

const mapDispatchProps =(dispatch) => ({ 
  addItemList: (text) => dispatch(listAction.addItemList(text)), 
  removeItemList: (id) =>  dispatch(listAction.removeItemList(id))
});

export default connect(mapStateProps, mapDispatchProps)(App);
