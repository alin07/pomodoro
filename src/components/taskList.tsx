import { Dispatch, SetStateAction } from 'react';
import { Task } from '../interfaces/tasks'
import './taskList.css'
type TaskListProps = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const TaskList = (props: TaskListProps) => {
  const {
    tasks,
    setTasks
  } = props

  const onTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTasks = tasks.map(t =>
      e.target.id === t.id.toString()
        ? { ...t, isComplete: !t.isComplete }
        : t
    );
    setTasks(newTasks)
  }
  return (
    <div className='task-list'>
      {
        tasks?.map((t) =>
          <div key={t.id}>
            <input
              className='task-check'
              id={t.id.toString()}
              type='checkbox'
              name={t.name}
              checked={t.isComplete}
              onChange={onTaskChange}
            />
            <label htmlFor={t.name}>{t.name}</label>
          </div>
        )
      }
    </div>
  )
}

export default TaskList