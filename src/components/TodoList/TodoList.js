import React from 'react';

import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

class TodoList extends React.Component {

  state = {
    todos: [],
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_TODO_API_URL)
      .then(response => response.json())
      .then(todos => this.setState({ todos }))
      .catch(console.error);
  }

  render() {

    const todos = this.state.todos.map(todo => (
      <TodoItem key={todo._id} name={todo.name} completed={todo.completed} />
    ));
    
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          {todos}
        </ul>
      </div>
    );

  } 

}

export default TodoList;
