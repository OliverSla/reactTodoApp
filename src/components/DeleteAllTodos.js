import './DeleteAllTodos.css'

import React from 'react'

const DeleteAllTodos = ({deleteTodos, todos}) => {

    if(todos.length > 0) {
        return (
            <div className="deleteAllTodos">
            <button onClick={deleteTodos}> <p> Vymazať všetky todos </p> </button>

            <div className="todosCounter"> <p> Počet todos: {todos.length} </p>  </div>
            </div>
          )
    }

}

export default DeleteAllTodos