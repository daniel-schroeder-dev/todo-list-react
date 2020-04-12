import React from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';

function TodoItem(props) {
  return (
    <li>{props.name}</li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TodoItem;