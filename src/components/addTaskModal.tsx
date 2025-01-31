import { Dispatch, SetStateAction, useState } from 'react'
import Modal from '../components/modal'
import { Task } from '../interfaces/tasks'

type AddTaskModalProps = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const AddTaskModal = (props: AddTaskModalProps) => {
  const {
    isModalOpen,
    setModalOpen,
    tasks,
    setTasks,
  } = props

  const [task, setTask] = useState<Task>()
  const closeModal = () => setModalOpen(false)

  const addTask = () => {
    if (!task || !task.name) {
      return
    }
    setTasks([...tasks, task])
    setTask(undefined)
    closeModal()
  }

  return (
    <Modal isOpen={isModalOpen} closeModal={closeModal}>
      <label htmlFor='task-name'>Task Name</label>
      <input
        name='task-name'
        type='text'
        onChange={(e) => setTask(
          {
            id: Date.now(),
            isComplete: false,
            name: e.target.value,
            order: tasks.length
          }
        )}
        value={task?.name}
      />
      <button onClick={addTask}>
        Submit
      </button>
    </Modal>
  )
}

export default AddTaskModal