/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Context } from '../Context/ContextStates';
import FooterStyled from './styled';

export default function Footer() {
  const {
    tasks, setTasks, isCompleted, setIsCompleted,
  } = useContext(Context);

  const handleClear = () => {
    tasks.splice(0);
    setTasks([...tasks]);
  };

  const handleCompleted = () => {
    setIsCompleted(true);
  };

  const handleAll = () => {
    setIsCompleted(false);
  };

  const results = tasks.filter((task) => (task.checked === true));

  return (
    <FooterStyled>
      <div>
        {tasks.length - results.length}
        {' '}
        Itens left
      </div>
      <div className="radioButtons">
        <input
          className="radio"
          onChange={(e) => handleAll(e)}
          type="radio"
          name="radioFooter"
          id="all"
          defaultChecked={isCompleted || true}
        />
        <label htmlFor="all">
          All
        </label>
        <input
          className="radio"
          onChange={(e) => handleCompleted(e)}
          type="radio"
          name="radioFooter"
          id="completed"
        />
        <label htmlFor="completed">
          Completed
        </label>
        {/* <input type="radio" name="radioFooter" id="" /> */}
      </div>
      <button type="button" onClick={handleClear}>Clear Completed</button>
    </FooterStyled>
  );
}
