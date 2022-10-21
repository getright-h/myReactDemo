import React from 'react'
import { Outlet } from 'react-router-dom'

function About () {
    return (
        <div>About
            {/* 二级路由 */}
            <Outlet />
        </div>
    )
}

export default About