import React from 'react'
import MyDate from './myDate'
import Todo from './todo'
import './studyItem.css'

function studyItem () {
    return (
        <div className='item'>
            <MyDate />
            <Todo />
        </div>
    )
}

export default studyItem