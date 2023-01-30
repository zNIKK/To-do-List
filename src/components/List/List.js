import React from 'react';
import "./list.css";

export default function List ({tarefas, handleDelete, active, tarefasFeitas, isActive, checked}){

        // e.target.classList.toggle('strikeWord')
    if (tarefas.length === 0 && isActive === true) {
        return (
            <div className="tarefas">Não Há nenhuma tarefa ainda</div>
            
        );
    } else if (tarefasFeitas.length === 0 && isActive === false) {
        return (
            <div className="tarefas">Não Há nenhuma tarefa feita ainda</div>
        );
    } else {
            return (
                
                <div>
                    <ul className="tarefasLista">
                        {tarefas.map((tarefa, index) => (
                        <li className={`formText tarefaLi`} key={index}>
                            <input checked={checked[index]} onChange={(e) => active(e, tarefa, index)} className='checkbox' type="checkbox" id="checkbox"/>
                            <div draggable='false' className={`divTarefa ${checked[index] ? 'strikeWord' : ''}`}>{tarefa}</div>
                            <button draggable='false' className='deleteButton' onClick={(e) => handleDelete(e, index)}>
                                <img draggable='false' src="./images/icon-cross.svg" alt='icon-cross'/>
                            </button>
                        </li>
                        ))}
                    </ul>
                </div>
        );
    }
}