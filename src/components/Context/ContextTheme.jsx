import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { Context } from './ContextStates';

export const ContextLightMode = createContext();

export default function ContextTheme({ children }) {
  const { switchTheme } = useContext(Context);

  useEffect(() => {
    if (switchTheme) {
      document.body.classList.add('themeLight');
    } else {
      document.body.classList.remove('themeLight');
    }
    console.log(switchTheme);
  }, [switchTheme]);

  const value = useMemo(() => ({
    switchTheme,
  }), [switchTheme]);

  return <ContextLightMode.Provider value={value}>{children}</ContextLightMode.Provider>;
}

ContextTheme.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
