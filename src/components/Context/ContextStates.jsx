import PropTypes from 'prop-types';
import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const Context = createContext();

function initialState() {
  const tasksData = localStorage.getItem('tasks');

  return {
    tasks: tasksData ? JSON.parse(tasksData) : [],
  };
}

export default function ContextStates({ children }) {
  const [switchTheme, setSwitchTheme] = useState(false);
  const [tasks, setTasks] = useState(initialState().tasks);
  const [newTasks, setNewTasks] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const value = useMemo(() => ({
    tasks,
    newTasks,
    isCompleted,
    switchTheme,
    setTasks,
    setNewTasks,
    setIsCompleted,
    setSwitchTheme,
  }), [tasks, newTasks, isCompleted, switchTheme]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

ContextStates.propTypes = {
  children: PropTypes.node.isRequired,
};
