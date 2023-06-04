import './OneTodo.css'
import Checkbox from './Checkbox'
import Options from './Options'
import { useState, useRef, useEffect } from 'react'



const OneTodos = ({oneTodo, index, todos, setTodos}) => {


    const [editTodoIsClicked, setEditTodoIsClicked] = useState(false)
    const [inputValue, setInputValue] = useState(oneTodo.text)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
      }


    const textShow = () => {

        if(editTodoIsClicked) {
            return <div className="editInput">
                <input className='editInputField' onChange={handleInputChange} value={inputValue} type="text" />

                <button className='todoAddBtn'>Potvrdiť zmenu</button>
            </div> 
            
        }else{
            return <h3> {oneTodo.text} </h3>
        }
    }


    return (
        <div className="oneTask" key={oneTodo.id}>
        <Checkbox oneTodo={oneTodo} id={oneTodo.id} index={index} />
        <div className="taskText">{textShow()}</div>
        <Options oneTodo={oneTodo} todos={todos} setTodos={setTodos} setEditTodoIsClicked={setEditTodoIsClicked} />
    </div>
    )
}


export default OneTodos
