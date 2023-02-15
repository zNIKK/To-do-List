import React, { useContext } from 'react';
import { Context } from '../Context/ContextStates';

export default function Main() {
  const { tasks, isCompleted } = useContext(Context);

  console.log(tasks);
  const handleCheck = (task, e) => {
    const newTask = task;
    newTask.checked = e.target.checked;
    // setTasks([...tasks, { taskText: task.taskText, checked: newTask }]);
  };
  if (isCompleted) {
    const results = tasks.filter((e) => (
      e.checked === true
    ));
    return (
      <ul>
        {results.map((task) => (
          <label htmlFor={task.taskText} key={task.taskText}>
            <li>
              <input onChange={(e) => handleCheck(task, e)} type="checkbox" name="" id={task.taskText} defaultChecked={task.checked} />
              {task.taskText}
            </li>
          </label>
        ))}
      </ul>
    );
  }
  return (
    <ul>
      {tasks.map((task) => (
        <div>
          <label htmlFor={task.taskText} key={task.taskText}>
            <li>
              <input onChange={(e) => handleCheck(task, e)} type="checkbox" name="" id={task.taskText} defaultChecked={task.checked} />
              {task.taskText}
            </li>
          </label>
          <button type="button">
            <img src="./assets/images/icon-cross.svg" alt="icon-cross" />
          </button>
        </div>
      ))}
    </ul>
  );
}
