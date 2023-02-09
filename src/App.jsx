import { useSelector } from 'react-redux'
import TaskList from './components/TaskList'
import CreateTaskModal from './components/CreateTaskModal'
import { useState } from 'react'
import RemoveConfirm from './components/RemoveConfirm'

function App() {
  const { tasks } = useSelector((state) => state.task)
  const [showModal, setShowModal] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [currentTask, setCurrentTask] = useState(null)

  return (
    <div className='w-full p-10 min-h-screen bg-indigo-200'>
      <div className='max-w-2xl mx-auto'>
        <div className='flex justify-between items-center mb-10'>
          <button
            className='px-6 py-3 bg-indigo-400 text-white rounded-lg transition-all transform hover:scale-105 active:scale-95'
            onClick={() => setShowModal(true)}
          >
            Добавить
          </button>
          <button className='px-6 py-3 bg-indigo-400 text-white rounded-lg transition-all transform hover:scale-105 active:scale-95'>
            Тест GraphQL
          </button>
        </div>

        <TaskList
          tasks={tasks}
          setCurrentTask={setCurrentTask}
          setShowConfirm={setShowConfirm}
        />
        {showModal && <CreateTaskModal setShowModal={setShowModal} />}
        {showConfirm && (
          <RemoveConfirm
            setShowConfirm={setShowConfirm}
            task={currentTask}
          />
        )}
      </div>
    </div>
  )
}

export default App
