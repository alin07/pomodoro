import { Dispatch, SetStateAction } from 'react';
import { Task } from '../interfaces/tasks'

type TaskListProps = {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const TaskList = (props: TaskListProps) => {
  const {
    tasks,
    setTasks
  } = props

  return (
    <div>
      {
        tasks?.map((t) =>
          <div key={t.id}>
            <input
              type='checkbox'
              name={t.name}
              checked={t.isComplete}
              onChange={() => setTasks(tasks.map((task) =>
                t.id === task.id
                  ? { ...t, isComplete: !t.isComplete }
                  : t))}
            />
            <label htmlFor={t.name}>{t.name}</label>
          </div>
        )
      }

    </div>
  )
}

export default TaskList