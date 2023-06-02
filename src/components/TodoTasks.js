import './TodoTasks.css'
import OneTodos from './OneTodos'


const TodoTasks = ({todos, completeTodo, deleteTodo}) => {



  return (
    <div className='todoTasks'>
        <div className='todoTasksLine'></div>
        <div className='tasks'>

        {todos.map((oneTodo) => {
          return(
            <OneTodos
            key={oneTodo.id}
            oneTodo={oneTodo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
           />
          )
        })}

        </div>
    </div>
  )
}

export default TodoTasks