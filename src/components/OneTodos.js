import './OneTodo.css'
import data from '../data/data.js'



const OneTodos = () => {
    return (

        data.map((oneTodo, index) =>{

            const {id, todo} = oneTodo

            return (
                <div className='oneTodo' key={id}>
                    <h1> {index + 1}. {todo} </h1>
                    <div>  </div>
                </div>
            )
        })
    )
}


export default OneTodos
