import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

function TodoItem(props) {

  const completed = props.completed ? 'completed ' : '';

  return (
    <li className={completed + "todo-item"}>
      <span onClick={props.onClickToggle} className={completed + "todo-item__name"}>{props.name}</span>
      <span onClick={props.onClickRemove} className="todo-item__remove-icon">&times;</span>
    </li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  onClickToggle: PropTypes.func.isRequired,
};

export default TodoItem;
