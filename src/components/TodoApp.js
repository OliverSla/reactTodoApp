import './TodoApp.css'
import InputTodoApp from './InputTodoApp.js'
import TodoTasks from './TodoTasks.js'
import { useState } from 'react'
import { saveTodos, loadTodos } from '../data/data'

const TodoApp = () => {

    const [isClicked, setIsClicked] = useState(false)
    const [todos, setTodos] = useState(loadTodos);

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
      };

      const deleteTodo = (id) => {
        const updatedTodos = todos.filter((oneTodo) => oneTodo.id !== id);
        setTodos(updatedTodos);
        saveTodos(updatedTodos);
      };

      const completeTodo = (id) => {
    const updatedTodos = todos.map((oneTodo) => {
      if (oneTodo.id === id) {
        return { ...oneTodo, checked: !oneTodo.checked };
      }
      return oneTodo;
    });
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

    return(
        <div className="todoApp">
            <div className="todoHeader">
            <h1> Todo App</h1>
            <h2> REACT - Localstorage</h2>
            </div>
            <InputTodoApp addTodo={addTodo}/>
            <TodoTasks todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default TodoApp