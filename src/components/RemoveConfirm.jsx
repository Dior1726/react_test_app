import { useDispatch } from 'react-redux'
import { removeTask } from '../store/slices/taskSlice'

const RemoveConfirm = ({ setShowConfirm, task }) => {
  const dispatch = useDispatch()

  const removeTaskHandler = () => {
    dispatch(removeTask(task.id))
    setShowConfirm(false)
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center'>
      <div className='bg-white rounded-xl max-w-sm w-full p-10'>
        <div className='flex justify-between'>
          <button
            className='p-3 border border-indigo-400 text-indigo-400 rounded-lg transition-all transform hover:scale-105 active:scale-95'
            onClick={() => setShowConfirm(false)}
          >
            Отмена
          </button>
          <button
            className='p-3 bg-red-400 text-white rounded-lg transition-all transform hover:scale-105 active:scale-95'
            onClick={() => removeTaskHandler(task)}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  )
}

export default RemoveConfirm
