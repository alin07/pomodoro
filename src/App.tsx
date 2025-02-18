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

      <h2>Tasks</h2>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <button onClick={() => setModalOpen(true)}>
        Add a Task
      </button>
      <AddTaskModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div >
  )
}

export default App
