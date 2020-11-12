import React from 'react';
import TodosList from './components/TodosList';
import TodosAdd from './components/TodosAdd';
import {Provider} from 'react-redux';
import store from './store';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux com duck pattern e Typescript</h1>
        <p>Exemplo de uma lista de itens com redux, duck pattern e typescript </p>
        <TodosAdd />
        <TodosList />
      </div>
    </Provider>
  );
}

export default App;
