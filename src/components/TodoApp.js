import './TodoApp.css'
import InputTodoApp from './InputTodoApp.js'
import TodoTasks from './TodoTasks.js'

const TodoApp = () => {
    return(
        <div className="todoApp">

            <div className="todoHeader">
            <h1> Todo App</h1>
            <h2> REACT - Localstorage</h2>
            <InputTodoApp />
            <TodoTasks />
            </div>
        </div>
    )
}

export default TodoApp