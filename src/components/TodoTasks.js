import './TodoTasks.css'
import OneTodos from './OneTodos'


const TodoTasks = ({todos}) => {



  return (
    <div className='todoTasks'>
        <div className='todoTasksLine'></div>
        <div className='tasks'>

        {todos.map((oneTodo, index) => {
          return(
            <OneTodos key={oneTodo.id} oneTodo={oneTodo} index={index} />
          )
        })}

        </div>
    </div>
  )
}

export default TodoTasks