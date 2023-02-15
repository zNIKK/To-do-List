import React, { useContext } from 'react';
import { Context } from '../Context/ContextStates';

export default function Header() {
  const {
    tasks, setTasks, newTasks, setNewTasks,
  } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasks.map((el) => el.taskText).indexOf(newTasks) !== -1) return;

    setTasks([...tasks, { taskText: newTasks, checked: e.target[0].checked }]);
  };

  const handleChange = (e) => {
    setNewTasks(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} action=".">
        <input type="checkbox" name="checkbox" />
        <input type="text" name="text" onChange={(e) => handleChange(e)} />
      </form>
    </div>
  );
}
