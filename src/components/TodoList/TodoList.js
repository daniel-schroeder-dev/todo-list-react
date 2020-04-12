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
   
    e.preventDefault();
    const todo = this.state.todo;
   
    fetch(process.env.REACT_APP_TODO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: todo }),
    })
      .then(response => response.json())
      .then(newTodo => {
        this.setState(prevState => {
          const todos = prevState.todos.map(todo => ({...todo}));
          todos.push(newTodo);
          return { todos };
        });
      })
      .catch(console.error);

    this.setState({ todo: '' });

  };

  handleCreateTodoInput = e => {
    this.setState({ todo: e.target.value });
  };

  handleDeleteTodo = _id => {
    fetch(`${process.env.REACT_APP_TODO_API_URL}/${_id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(deletedTodo => {
        this.setState(prevState => {
          const todos = prevState.todos
            .map(todo => ({ ...todo }))
            .filter(todo => todo._id !== deletedTodo._id);
          return { todos };
        });
      })
      .catch(console.error);
  };

  render() {

    const todos = this.state.todos.map(todo => (
      <TodoItem 
        key={todo._id} 
        name={todo.name} 
        completed={todo.completed}
        onClick={this.handleDeleteTodo.bind(this, todo._id)}
      />
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
