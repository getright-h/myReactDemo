import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import clasess from './Menu.module.css'

function Menu (props) {
    return (
        <div>
            <ul>
                <li>
                    {/* <Link to='/about' >about</Link> */}
                    {/* <a href="./About">about</a> */}
                    <NavLink exact activeClassName={clasess.active} to='/about'>about</NavLink>
                </li>
                <li>
                    {/* <Link to='/'>home</Link> */}
                    <NavLink exact to='/home' activeClassName={clasess.active}>home</NavLink>
                    {/* <a href="./">home</a> */}
                </li>
            </ul>
        </div>
    )
}
export default Menu