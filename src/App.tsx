import { useState } from 'react'
import { Task } from './interfaces/tasks'

import Pomodoro from './components/pomodoro'

import './App.css'

function App() {

  const [tasks, setTasks] = useState<Task>();
  return (
    <div>
      <Pomodoro />
    </div>
  )
}

export default App
