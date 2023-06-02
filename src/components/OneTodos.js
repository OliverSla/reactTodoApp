import './OneTodo.css'
import Checkbox from './Checkbox'
import Options from './Options'



const OneTodos = ({oneTodo, completeTodo, deleteTodo}) => {


    const handleComplete = () => {
        completeTodo(oneTodo.id);
      };

    const handleDelete = () => {
        deleteTodo(oneTodo.id);
      };

    return (
        <div className="oneTask">
        <Checkbox completed={oneTodo.completed} handleComplete={handleComplete}/>
        <div className="taskText"><h3> {oneTodo.text} </h3></div>
        <Options handleDelete={handleDelete}/>
    </div>
    )
}


export default OneTodos
