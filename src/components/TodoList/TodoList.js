import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {

  state = {
    todos: [],
  };

  componentDidMount() {
    fetch('http://localhost:8080/api/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }))
      .catch(console.error);
  }

  render() {

    const todos = this.state.todos.map(todo => (
      <li key={todo._id}>{todo.name}</li>
    ));
    
    return (
      <div>
        TodoList
        <ul>
          {todos}
        </ul>
      </div>
    );

  } 

}

export default TodoList;
