import React, { useState } from 'react';
import "./darkMode.css";

export default function DarkMode(props) {
    const [darkMode, setDarkMode] = useState(props.darkMode) // props.darkMode

    function change() {
        document.body.classList.toggle('lightMode')
        if(darkMode) {
            setDarkMode(false)
        } else {
            setDarkMode(true)

        }
        console.log(darkMode)
    }
    
    if (darkMode){
        return (
            <button className='darkModeButton'><img onClick={change} src="./images/icon-sun.svg" alt="icon-sun" /></button>

        );
    } else {
        return (
            <button className='darkModeButton'><img onClick={change} src="./images/icon-moon.svg" alt="icon-moon" /></button>

        );
    }

}