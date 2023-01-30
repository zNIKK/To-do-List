import React from 'react'
import "./footer.css"
export default function Footer({items, isActive, active, all, clear, completed}) {

    return (
        <footer className='footer'>
            
            <div>
                <div>{items} Items left</div>
            </div>
            <ul className='selected'>
                <li><button className='clicked' onClick={all}>All</button></li>
                {/* <li onClick={active}>Active</li> */}
                <li><button onClick={(e) => completed(e)}>Completed</button></li>
            </ul>
            <div className='buttonClear' onClick={clear}>Clear Completed</div>
        </footer>
    );
}