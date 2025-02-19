import { Dispatch, SetStateAction } from 'react';
import { Task } from '../../interfaces/tasks'
import closeButton from '../../assets/close.svg'
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

  const onTaskToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTasks = tasks.map(t =>
      e.target.id === t.id.toString()
        ? { ...t, isComplete: !t.isComplete }
        : t
    );
    setTasks(newTasks)
  }
  const onTaskRemove = (e: React.MouseEvent<HTMLImageElement>) => {
    const el = e.target as HTMLElement
    const newTasks = tasks.filter(t =>
      el.getAttribute('id') !== t.id.toString()
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
              onChange={onTaskToggle}
            />
            <label
              className={t.isComplete ? 'strike-through' : ''}
              htmlFor={t.name}
            >
              {t.name}
            </label>
            <img
              className='close-btn'
              id={t.id.toString()}
              onClick={onTaskRemove}
              src={closeButton}
              alt='remove task'
            />
          </div>
        )
      }
    </div>
  )
}

export default TaskList