import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';

export const Context = createContext();

export default function ContextStates({ children }) {
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);
  const [newTasks, setNewTasks] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const value = useMemo(() => ({
    tasks,
    newTasks,
    checkedTasks,
    isCompleted,
    setTasks,
    setNewTasks,
    setCheckedTasks,
    setIsCompleted,
  }), [tasks, newTasks, checkedTasks, isCompleted]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

ContextStates.propTypes = {
  children: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};
