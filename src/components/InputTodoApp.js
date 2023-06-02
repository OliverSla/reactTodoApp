import React from 'react'
import './InputTodoApp.css';
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';




const InputTodoApp = ({addTodo}) => {

  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: uuidv4(),
        text: inputValue,
        checked: false,
      }

      addTodo(newTodo);
      setInputValue('');
    }else{
      console.log("Musíte niečo zadať do inputu!")
    }
  }


  return (
    <div className='inputTodoApp'>
         <input className='todoInputField' onChange={handleInputChange} value={inputValue} type="text" placeholder="Zadajte novú úlohu" />
      <button className='todoAddBtn' onClick={handleAddTodo}>Pridať úlohu</button>
    </div>
  )
}

export default InputTodoApp