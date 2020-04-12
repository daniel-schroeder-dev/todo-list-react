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
      .then(newTodo => resolve(newTodo))
      .catch(reject);
  });
};

export { createTodo };
