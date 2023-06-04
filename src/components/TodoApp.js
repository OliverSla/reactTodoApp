import './TodoApp.css'
import InputTodoApp from './InputTodoApp.js'
import TodoTasks from './TodoTasks.js'
import { useState } from 'react'
import { saveTodos, loadTodos } from '../data/data'

const TodoApp = () => {

    const [todos, setTodos] = useState(loadTodos);

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, newTodo];
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
            <TodoTasks todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoApp