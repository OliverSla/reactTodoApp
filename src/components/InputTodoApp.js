import React from 'react'
import './InputTodoApp.css';

const InputTodoApp = () => {
  return (
    <div className='inputTodoApp'>
         <input className='todoInputField' type="text" placeholder="Zadajte novú úlohu" />
      <button className='todoAddBtn'>Pridať úlohu</button>
    </div>
  )
}

export default InputTodoApp