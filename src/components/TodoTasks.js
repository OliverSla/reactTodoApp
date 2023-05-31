import './TodoTasks.css'

const TodoTasks = () => {
  return (
    <div className='todoTasks'>
        <div className='todoTasksLine'></div>
        <div className='tasks'>
            <div className="oneTask">
                <div className="taskCheck"></div>
                <h3>Vyniesť smetie</h3>
                <div className="options"><>
            </div>

            <div className="oneTask">
                <h3>Upratať izbu</h3>
            </div>
        </div>
    </div>
  )
}

export default TodoTasks