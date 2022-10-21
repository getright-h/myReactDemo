import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import LayOut from './components/LayOut'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import './App.css'

function App () {
  return (
    <div>
      {/* app中定义路由信息，layout中定义页面结构 */}
      <LayOut>
        <Routes>
          <Route path={'/'} element={<HomePage />}>home</Route>
          <Route path={'/authform'} element={<AuthForm />}>home</Route>
          <Route path={'/profile'} element={<ProfilePage />}>profile</Route>
        </Routes>
      </LayOut>

    </div>
  )
}

export default App