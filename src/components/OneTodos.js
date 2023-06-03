import './OneTodo.css'
import Checkbox from './Checkbox'
import Options from './Options'



const OneTodos = ({oneTodo, index}) => {




    return (
        <div className="oneTask" key={oneTodo.id}>
        <Checkbox oneTodo={oneTodo} id={oneTodo.id} index={index} />
        <div className="taskText"><h3> {oneTodo.text} </h3></div>
        <Options />
    </div>
    )
}


export default OneTodos
