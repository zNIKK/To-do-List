import React, { useContext } from 'react';
import { Context } from '../Context/ContextStates';

export default function Theme() {
  const { switchTheme, setSwitchTheme } = useContext(Context);

  const changeTheme = () => {
    setSwitchTheme(!switchTheme);
  };

  if (switchTheme) {
    return (
      <button type="button" onClick={changeTheme}>
        <img src="./assets/images/icon-sun.svg" alt="icon-sun" />
      </button>
    );
  }

  return (
    <button type="button" onClick={changeTheme}>
      <img src="./assets/images/icon-moon.svg" alt="icon-moon" />
    </button>
  );
}
