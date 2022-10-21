import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Menu () {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>home</Link>
                </li>
                <li>
                    <Link to='/about'>about</Link>
                </li>
                <li>
                    <NavLink
                        style={
                            ({ isActive }) => {
                                return isActive ? { color: 'skyblue' } : null
                            }
                        }
                        to='/student/2'>student</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu