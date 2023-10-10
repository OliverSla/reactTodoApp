import { useState } from 'react'
import './TodoTasks.css'
import OneTodos from './OneTodos'



const TodoTasks = ({todos, setTodos}) => {

  const [openTodoId, setOpenTodoId] = useState(null);

  const optionHandleClick = (id) => {
    if (openTodoId === id) {
      setOpenTodoId(null); 
    } else {
      setOpenTodoId(id); 
    }
  };


  return (
    <div className='todoTasks'>
        <div className='todoTasksLine'></div>
        <div className='tasks'>
        {todos.map((oneTodo, index) => {
          return(
            <OneTodos 
              key={oneTodo.id} 
              oneTodo={oneTodo} 
              index={index} 
              todos={todos} 
              setTodos={setTodos} 
              isOpen={openTodoId === oneTodo.id} 
              toggleOptions={optionHandleClick}
            />
          )
        })}
        </div>
    </div>
  )
}

export default TodoTasks