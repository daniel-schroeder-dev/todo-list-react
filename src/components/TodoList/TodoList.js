import React from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';

import './TodoList.css';

class TodoList extends React.Component {

  state = {
    todos: [],
    todo: '',
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_TODO_API_URL)
      .then(response => response.json())
      .then(todos => this.setState({ todos }))
      .catch(console.error);
  }

  handleCreateTodo = e => {
    console.log('create todo called');
    e.preventDefault();
  };

  handleCreateTodoInput = e => {
    this.setState({ todo: e.target.value });
  };

  render() {

    const todos = this.state.todos.map(todo => (
      <TodoItem key={todo._id} name={todo.name} completed={todo.completed} />
    ));
    
    return (
      <div>
        <h1>TodoList</h1>
        <TodoForm 
          onSubmit={this.handleCreateTodo} 
          onChange={this.handleCreateTodoInput}
          todo={this.state.todo} 
        />
        <ul>
          {todos}
        </ul>
      </div>
    );

  } 

}

export default TodoList;
