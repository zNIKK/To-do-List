import React from "react";
import './form.css';

export default function Form ({handleSubmit, handleChange, novaTarefa, singleActive}) {

    return (
    <form onSubmit={handleSubmit} action='#'>
        <input onClick={singleActive} className="checkbox" type="checkbox" />
        <input placeholder="Create a new to do..." id="mainInput" className="formText" onChange={handleChange} type="text" value={novaTarefa}/>
    </form>
    )
}