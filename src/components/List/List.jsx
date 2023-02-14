import PropTypes from 'prop-types';
import React from 'react';
import ListStyled from './styled';

export default function List({
  tarefas, handleDelete, active, isActive, checked,
}) {
  // e.target.classList.toggle('strikeWord')
  if (tarefas.length === 0 && isActive === false) {
    console.log(tarefas.length);
    return (
      <div className="tarefas">Não Há nenhuma tarefa feita ainda</div>
    );
  } if (tarefas.length === 0) {
    return (
      <div className="tarefas">Não Há nenhuma tarefa ainda</div>

    );
  }
  return (

    <ListStyled>
      <ul className="tarefasLista">
        {tarefas.map((tarefa, index) => (
          <li className="formText tarefaLi" key={tarefa}>
            <input checked={checked[index]} onChange={(e) => active(e, tarefa, index)} className="checkbox" type="checkbox" id="checkbox" />
            <div draggable="false" className={`divTarefa ${checked[index] ? 'strikeWord' : ''}`}>{tarefa}</div>
            <button type="button" draggable="false" className="deleteButton" onClick={(e) => handleDelete(e, index)}>
              <img draggable="false" src="./images/" alt="icon-cross" />
            </button>
          </li>
        ))}
      </ul>
    </ListStyled>
  );
}

List.propTypes = {
  tarefas: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
  active: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  checked: PropTypes.arrayOf(PropTypes.bool).isRequired,

};
