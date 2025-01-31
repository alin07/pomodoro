import { useState } from 'react'
import { Task } from './interfaces/tasks'

import Pomodoro from './components/pomodoro'
import TaskList from './components/taskList'
// import Draggable from './components/draggable'
import './App.css'
import AddTaskModal from './components/addTaskModal'

function App() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div>
      <Pomodoro />
      <button onClick={() => setModalOpen(true)}>
        Add a Task
      </button>
      <AddTaskModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        tasks={tasks}
        setTasks={setTasks}
      />

      <TaskList tasks={tasks} setTasks={setTasks} />

    </div >
  )
}

export default App
