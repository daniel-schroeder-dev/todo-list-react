const createTodo = todo => {
  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_TODO_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: todo }),
    })
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

const deleteTodo = _id => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_TODO_API_URL}/${_id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
}

const toggleTodo = (_id, todo) => {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.REACT_APP_TODO_API_URL}/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !todo.completed })
    })
      .then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
  
};

export { createTodo, deleteTodo, toggleTodo };
