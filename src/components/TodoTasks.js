import './TodoTasks.css'
import Checkbox from './Checkbox'
import Options from './Options'


const TodoTasks = () => {
  return (
    <div className='todoTasks'>
        <div className='todoTasksLine'></div>
        <div className='tasks'>
            <div className="oneTask">
                <Checkbox />
                <div className="taskText"><h3>Vyniesť smetie </h3></div>
                <Options />
            </div>

            <div className="oneTask">
                <Checkbox />
                <div className="taskText"><h3>Vyniesť smetie </h3></div>
                <Options />
            </div>

        </div>
    </div>
  )
}

export default TodoTasks