import React from 'react'
import { Navigate } from 'react-router-dom'

function Home () {
    return (
        <div>
            {/* 重定向 默认push，replace需要手动添加 */}
            <Navigate to='/asuka' replace />
            Home</div>
    )
}

export default Home