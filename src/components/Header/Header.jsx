import React, { useContext, useState } from 'react';
import { Context } from '../Context/ContextStates';
import Theme from '../Theme/Theme';
import HeaderStyled from './styled';

export default function Header() {
  const {
    tasks, setTasks, newTasks, setNewTasks,
  } = useContext(Context);
  const [isStrikeWord, setIsStrikeWord] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasks.map((el) => el.taskText).indexOf(newTasks) !== -1) return;

    setTasks([...tasks, { taskText: newTasks, checked: e.target[0].checked }]);
    e.target[1].value = '';
  };

  const handleChange = (e) => {
    setNewTasks(e.target.value);
  };

  const checked = (e) => {
    if (e.target.checked) {
      setIsStrikeWord(true);
    } else {
      setIsStrikeWord(false);
    }
  };

  return (
    <HeaderStyled>
      <div>
        <h1>TODO</h1>
        <Theme />

      </div>
      <form className="formText" onSubmit={(e) => handleSubmit(e)} action=".">
        <input onChange={(e) => checked(e)} className="checkbox" type="checkbox" name="checkbox" />
        <input className={`${isStrikeWord ? 'strikeWord' : ''} inputText`} placeholder="Create a new To do..." type="text" name="text" onChange={(e) => handleChange(e)} />
      </form>
    </HeaderStyled>
  );
}
