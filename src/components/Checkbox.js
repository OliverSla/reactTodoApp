import Square from '../svgs/Square'
import Check from '../svgs/Check'
import './Checkbox.css'
import { useState } from 'react'
import { saveTodos, loadTodos } from '../data/data'

const Checkbox = ({oneTodo, setLine}) => {
  
  const [isClicked, setIsClicked] = useState(oneTodo.completed)


  const clickHandler = () => {
    setIsClicked(!isClicked)
    setLine(!isClicked)
    oneTodo.completed = !isClicked
    const todos = loadTodos()
    
    const updateTodos = todos.map((todo) => {
      if(todo.id === oneTodo.id){
         return oneTodo
      }else{
        return todo
      }
    })
    saveTodos(updateTodos)
  };
  

  return (
    <div className="taskCheck" onClick={ () => {clickHandler(); isClicked ? setIsClicked(false) : setIsClicked(true)}}>
    <Square />
    {isClicked && <Check />}
  </div>
  )
}

export default Checkbox
