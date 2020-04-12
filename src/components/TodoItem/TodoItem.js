import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className={props.completed ? 'completed' : ''}>
      {props.name}
      <span onClick={() => props.onClick(props._id)} className='todo-item__remove-icon'>&times;</span>
    </li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};

export default TodoItem;
