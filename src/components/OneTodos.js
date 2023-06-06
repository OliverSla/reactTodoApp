import './OneTodo.css'
import Checkbox from './Checkbox'
import Options from './Options'
import { useState } from 'react'
import { saveTodos, loadTodos } from '../data/data'



const OneTodos = ({oneTodo, index, todos, setTodos}) => {

    const [editTodoIsClicked, setEditTodoIsClicked] = useState(false)
    const [inputValue, setInputValue] = useState(oneTodo.text)
    const [line, setLine] = useState(oneTodo.completed)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
      }


    const editTodoHandler = () => {
        setEditTodoIsClicked(false)

        todos[index] = {
            id: oneTodo.id,
            text: inputValue,
            completed: oneTodo.completed,
          }
            const updatedTodos = [...todos];
            setTodos(updatedTodos);
            saveTodos(updatedTodos);
    }




    const textShow = () => {

        if(editTodoIsClicked) {
            return <div className="editInput">
                <input className='editInputField' onChange={handleInputChange} value={inputValue} type="text" />
                <button className='editBtn' onClick={editTodoHandler}>Potvrdiť zmenu</button>
            </div> 
            
        }else{
            return <h3> {oneTodo.text} </h3>
        }
    }

    return (
        <div className='oneTask oneTaskAnimation' key={oneTodo.id}>
        <Checkbox oneTodo={oneTodo} id={oneTodo.id} index={index} setLine={setLine} />

        <div className={line ? 'taskTextLine' : 'taskText'}>{textShow()}</div>

        <Options oneTodo={oneTodo} todos={todos} setTodos={setTodos} setEditTodoIsClicked={setEditTodoIsClicked} />
    </div>
    )
}


export default OneTodos
