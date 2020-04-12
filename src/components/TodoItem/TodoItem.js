import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

function TodoItem(props) {

  const completed = props.completed ? 'completed ' : '';

  return (
    <li className={completed + 'todo-item'}>
      {props.name}
      <span onClick={props.onClick} className='todo-item__remove-icon'>&times;</span>
    </li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TodoItem;
