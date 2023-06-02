


const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  
  const loadTodos = () => {
    const todosString = localStorage.getItem('todos');
    return todosString ? JSON.parse(todosString) : [];
  };
  
  export { saveTodos, loadTodos };