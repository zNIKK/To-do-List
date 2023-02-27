/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Context } from '../Context/ContextStates';
import MainStyled from './styled';

export default function Main() {
  // const [dragElement, setDragElement] = useState();
  const { tasks, setTasks, isCompleted } = useContext(Context);
  console.log(tasks);
  const results = tasks.filter((e) => (
    e.checked === true
  ));

  const handleDelete = (task) => {
    tasks.splice(tasks.indexOf(task), 1);
    setTasks([...tasks]);
  };

  const handleCheck = (task, e) => {
    const newTask = task;
    newTask.checked = e.target.checked;
    setTasks([...tasks]);
  };

  // const dragStart = (e) => {
  //   console.log(e.target.innerHTML);
  //   setDragElement(e.target);
  //   e.dataTransfer.setData('text/html', e.target.innerHTML);
  // };

  // const allowDrop = (e) => {
  //   e.preventDefault();
  // };

  // const drop = (e) => {
  //   if (dragElement !== e.target) {
  //     dragElement.innerHTML = e.target.innerHTML;
  //     e.target.innerHTML = e.dataTransfer.getData('text/html');
  //     setTasks(tasks);
  //   }
  //   return false;
  // };

  if (results.length === 0 && isCompleted) {
    return (
      <MainStyled>
        <div className="empty">Neither completed tasks yet...</div>
      </MainStyled>
    );
  }

  if (tasks.length === 0) {
    return (
      <MainStyled>
        <div className="empty">Neither tasks yet...</div>
      </MainStyled>
    );
  }

  if (isCompleted) {
    return (
      <MainStyled>
        <ul>
          {results.map((task) => (
            <div
              className="listContent"
              key={task.taskText}
            >
              <li>
                {/* onDragStart={(e) => dragStart(e)}
                draggable="true"
                onDrop={(e) => drop(e)}
                onDragOver={(e) => allowDrop(e)}
                id="dragtarget" */}
                <input
                  className="checkbox"
                  onChange={(e) => handleCheck(task, e)}
                  type="checkbox"
                  id={task.taskText}
                  defaultChecked={task.checked}
                />
                <div className={task.checked ? 'strikeWord' : ''}>{task.taskText}</div>
              </li>
              <button onClick={() => handleDelete(task)} type="button">
                <img src="./assets/images/icon-cross.svg" alt="icon-cross" />
              </button>
            </div>
          ))}
        </ul>
      </MainStyled>
    );
  }

  return (
    <MainStyled>
      <ul>
        {tasks.map((task) => (
          <div
            className="listContent"
            key={task.taskText}
          >
            <li>
              {/* onDragStart={(e) => dragStart(e)}
              draggable="true"
              onDrop={(e) => drop(e)}
              onDragOver={(e) => allowDrop(e)}
              id="dragtarget" */}

              <input
                className="checkbox"
                onChange={(e) => handleCheck(task, e)}
                type="checkbox"
                id={task.taskText}
                defaultChecked={task.checked}
              />
              <div className={task.checked ? 'strikeWord' : ''}>{task.taskText}</div>
            </li>
            <button onClick={() => handleDelete(task)} type="button">
              <img src="./assets/images/icon-cross.svg" alt="icon-cross" />
            </button>
          </div>
        ))}
      </ul>
    </MainStyled>
  );
}
