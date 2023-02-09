const TaskList = ({ tasks, setCurrentTask, setShowConfirm }) => {
  const removeTaskHandler = (task) => {
    setCurrentTask(task)
    setShowConfirm(true)
  }

  return (
    <div className=' bg-white bg-opacity-80 rounded-2xl'>
      {tasks.map((task) => (
        <div
          key={task.id}
          className='p-5 border-b border-b-indigo-200 flex items-center justify-between'
        >
          <h5 className='text-lg font-normal'>{task.text}</h5>
          <button
            className='px-2 py-1 bg-red-400 text-white rounded-md transition-all transform hover:scale-105 active:scale-95'
            onClick={() => removeTaskHandler(task)}
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  )
}

export default TaskList
