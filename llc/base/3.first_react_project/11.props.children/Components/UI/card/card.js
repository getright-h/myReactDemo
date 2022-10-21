import React from 'react'
import './card.css'

function card (props) {
    // 返回标签属性
    console.log(props.children);
    return (
        // 表示接收外部使用card组件传递的className
        // {props.children} 表示外部组件的标签内容
        <div className={`card ${props.className}`}>{props.children}</div>
    )
}

export default card