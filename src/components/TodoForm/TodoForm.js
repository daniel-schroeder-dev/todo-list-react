import React from 'react';
import PropTypes from 'prop-types';

import './TodoForm.css';

function TodoForm(props) {
  return (
    <form className="todo-form" onSubmit={props.onSubmit}>
      <input className="todo-form__input" type="text" placeholder="Add a todo" value={props.todo} onChange={props.onChange} />
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired,
};

export default TodoForm;
