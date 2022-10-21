import React from 'react'
import './myDate.css'

function myDate (props) {
    const month = props.time.toLocaleString('zh-CN', { month: 'long' })
    const day = props.time.getDate()
    return (
        <div className="date">
            <div className="month">{month}</div>
            <div className="day">{day}</div>
        </div>
    )
}

export default myDate