import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className={props.completed ? 'completed' : ''}>{props.name}</li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TodoItem;
