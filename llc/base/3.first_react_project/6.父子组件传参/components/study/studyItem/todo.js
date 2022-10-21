import React from 'react'
import './todo.css'


function todo (props) {
    console.log(props.time);
    return (
        <div className="todo">
            <div className="do-what">{props.desc}</div>
            <div className="time">{props.time.getDate()}</div>
        </div>
    )

}

export default todo