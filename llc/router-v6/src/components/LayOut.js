import React from 'react'
import Menu from './Menu'

function LayOut (props) {
    return (
        <div>
            <Menu />
            <hr />
            {props.children}
        </div>
    )
}

export default LayOut