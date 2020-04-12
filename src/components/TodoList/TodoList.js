import React from 'react';

import TodoForm from '../TodoForm/TodoForm';
import TodoItem from '../TodoItem/TodoItem';

import { createTodo, deleteTodo, toggleTodo } from '../../utils/fetch';

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

    createTodo(this.state.todo)
      .then(todo => {
        this.setState(prevState => {
          const todos = prevState.todos.map(todo => ({...todo}));
          todos.push(todo);
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
    deleteTodo(_id)
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

  handleToggleTodo = _id => {
    const todo = this.state.todos.find(todo => todo._id === _id);
    toggleTodo(_id, todo)
      .then(completedTodo => {
        this.setState(prevState => {
          const todos = prevState.todos.map(todo => {
            if (todo._id === completedTodo._id) return completedTodo;
            return { ...todo };
          });
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
        onClickRemove={this.handleDeleteTodo.bind(this, todo._id)}
        onClickToggle={this.handleToggleTodo.bind(this, todo._id)}
      />
    ));
    
    return (
      <div className="todo-list">
        <h1 className="todo-list__site-title"><span className="todo-list__site-title__first-word">todo</span>List</h1>
        <TodoForm 
          onSubmit={this.handleCreateTodo} 
          onChange={this.handleCreateTodoInput}
          todo={this.state.todo} 
        />
        <ul className="todo-list__todos">
          {todos}
        </ul>
      </div>
    );

  } 

}

export default TodoList;
