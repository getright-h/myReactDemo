import React from 'react'
import { Link } from 'react-router-dom'

function Menu () {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/profile'>profile</Link>
                </li>
                <li>
                    <Link to='/authform'>authform</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu