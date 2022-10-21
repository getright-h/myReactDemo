import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Asuka from './components/Asuka'
import Home from './components/Home'
import Menu from './components/Menu'
import Student from './components/Student'

function App () {
  return (
    <div>
      <Menu />

      {/* v6 路由写在routes中，只会显示当前激活的路由组件 */}
      <Routes>
        {/* 路由写法都用 element 其他移除 ，传入的是jsx组件 */}
        <Route path='/' element={<Home />}></Route>
        {/* 路由嵌套 */}
        <Route path='/about' element={<About />}>
          <Route path='asuka' element={<Asuka />} ></Route>
        </Route>
        <Route path='/student/:id' element={<Student info={123} />} />
      </Routes>

    </div>
  )
}

export default App