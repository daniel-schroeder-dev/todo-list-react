import React from 'react';
import PropTypes from 'prop-types';

import './TodoForm.css';

function TodoForm(props) {
  return (
    <form onSubmit={e => props.onSubmit(e)}>
      <input type="text" placeholder="Add a Todo" value={props.todo} onChange={props.onChange} />
    </form>
  );
}

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired,
};

export default TodoForm;
