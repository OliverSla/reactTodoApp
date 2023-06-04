import { useState, useEffect } from 'react'
import './Options.css'
import { CloseSquare, MoreSquare, Edit2, Layer, Trash } from 'iconsax-react';
import { saveTodos, loadTodos } from '../data/data'
import { v4 as uuidv4 } from 'uuid';

const Options = ({oneTodo, todos, setTodos}) => {


    const [showOptions, setShowOptions] = useState(false)

    const optionHandleClick = () => {
        setShowOptions(!showOptions)
    }

    const deleteTodo = () => {
        const updatedTodos = todos.filter((todo) => {
           return todo.id !== oneTodo.id
        })
        setTodos(updatedTodos);
        saveTodos(updatedTodos)
    }

    const duplicateTodo = () => {
            const newTodo = {
            id: uuidv4(),
            text: oneTodo.text,
            completed: false,
          }
            const updatedTodos = [...todos, newTodo];
            setTodos(updatedTodos);
            saveTodos(updatedTodos);

    }

    const editTodo = () => {
        
    }
    

    const taskOptions = () => {
        return(
            <div className="taskOptions">
                <div className="oneOption" onClick={() => {editTodo()}}> <Edit2 className='optionTaskIcon' /> <p> Zmeniť text </p> </div>
                <div className="oneOption" onClick={() => {duplicateTodo()}} > <Layer className='optionTaskIcon' /> <p> Duplikovať  </p></div>
                <div className="oneOption" onClick={() => {deleteTodo()}}> <Trash className='optionTaskIcon' /> <p> Zmazať úlohu </p> </div>
            </div>
        )
    }
    
    const openOptions = () => {
        return(
            <div>
            <MoreSquare className='iconMore' />
            </div>
        )
    }
    
    const closeOptions = () => {
        return(
            <div>
            <CloseSquare className='iconMore' />
            {taskOptions()}
            </div>
        )
    }

  return (
    <div className='options' onClick={optionHandleClick}>
        {showOptions ? closeOptions() : openOptions()}
    </div>
  )
}

export default Options