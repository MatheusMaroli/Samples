import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {Todos} from '../store/ducks/todos/types'
import * as TodosActions from '../store/ducks/todos/actions';
import {ApplicationStore} from '../store';

interface StateProps {
  todos: Todos[]
}

interface DispatchProps {
  removeTodo(id: number) :void
}

type Props = StateProps & DispatchProps;

class TodosList extends Component<Props> {
  componentDidMount() {
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
          {
            todos.map(item => (
            <li key={item.id}>{item.name} <button onClick={()=> this.props.removeTodo(item.id)} >Remover</button></li>
          ))
        }
      </ul>
    );
  }
}
const mapStateProps = (state : ApplicationStore) => ({
  todos : state.todos.data
});

const mapDispatchProps = (dispatch :Dispatch) => ({
    removeTodo: (id :number) => dispatch(TodosActions.removeTodo(id))
});

export default connect(mapStateProps, mapDispatchProps)(TodosList);