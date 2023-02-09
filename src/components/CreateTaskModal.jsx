import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/slices/taskSlice'

const CreateTaskModal = ({ setShowModal }) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const addTodoHandler = () => {
    if (text === '') alert('Название не должно быть пустым!')
    else {
      const newTask = {
        id: Math.round(Math.random() * 10000),
        text,
      }

      dispatch(addTask(newTask))
      setShowModal(false)
    }
  }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center'>
      <div className='bg-white rounded-xl max-w-sm w-full p-10'>
        <input
          type='text'
          placeholder='Enter text'
          className='border border-indigo-200 p-3 rounded-lg outline-none w-full mb-10'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTodoHandler()
            }
          }}
        />
        <div className='flex justify-between'>
          <button
            className='p-3 border border-indigo-400 text-indigo-400 rounded-lg transition-all transform hover:scale-105 active:scale-95'
            onClick={() => setShowModal(false)}
          >
            Отмена
          </button>
          <button
            className='p-3 bg-indigo-400 text-white rounded-lg transition-all transform hover:scale-105 active:scale-95'
            onClick={() => addTodoHandler()}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateTaskModal
