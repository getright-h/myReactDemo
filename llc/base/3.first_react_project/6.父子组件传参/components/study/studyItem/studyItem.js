import React from 'react'
import MyDate from './myDate'
import Todo from './todo'
import './studyItem.css'

function studyItem (props) {
    console.log(props, '!');
    return (
        <div className='item'>
            <MyDate time={props.time} />
            <Todo time={props.time} desc={props.desc} />
        </div>
    )
}

export default studyItem