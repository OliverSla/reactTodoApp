import './TodoTasks.css'
import OneTodos from './OneTodos'


const TodoTasks = ({todos, setTodos}) => {



  return (
    <div className='todoTasks'>
        <div className='todoTasksLine'></div>
        <div className='tasks'>

        {todos.map((oneTodo, index) => {
          return(
            <OneTodos key={oneTodo.id} oneTodo={oneTodo} index={index} todos={todos} setTodos={setTodos}/>
          )
        })}

        </div>
    </div>
  )
}

export default TodoTasks