import Square from '../svgs/Square'
import Check from '../svgs/Check'
import './Checkbox.css'
import { useState, useEffect } from 'react'
import { saveTodos, loadTodos } from '../data/data'

const Checkbox = ({oneTodo, id, index}) => {
  
  const [todos, setTodos] = useState(loadTodos);





  return (
    <div className="taskCheck" onClick={ () => {isClicked ? setIsClicked(false) : setIsClicked(true)}}>
    <Square />
    {isClicked && <Check />}
  </div>
  )
}

export default Checkbox
