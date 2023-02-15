import React, { useContext } from 'react';
import { Context } from '../Context/ContextStates';

export default function Footer() {
  const { isCompleted, setIsCompleted } = useContext(Context);
  const handleCompleted = () => {
    setIsCompleted(true);
  };

  const handleAll = () => {
    setIsCompleted(false);
  };

  console.log(isCompleted);
  return (
    <div>
      <label htmlFor="radioAll">
        <input onChange={(e) => handleAll(e)} type="radio" name="radioFooter" id="radioAll" defaultChecked />
        All
      </label>
      <label htmlFor="radioCompleted">
        <input onChange={(e) => handleCompleted(e)} type="radio" name="radioFooter" id="radioCompleted" />
        Completed
      </label>
      {/* <input type="radio" name="radioFooter" id="" /> */}
    </div>
  );
}
