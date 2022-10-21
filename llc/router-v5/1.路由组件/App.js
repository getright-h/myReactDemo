import React from 'react'
import { Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Menu from './components/Menu'

function App () {
  return (
    <div>
      {/*
        将路由和组件进行映射
            使用Route来映射地址和组件
                属性：
                    path 映射的url地址
                    component 要挂载的组件
                    exact 路径是否完整匹配，默认值false

            当Route的路径被访问，其对应组件就会自动挂载
              注意 默认情况下Route并不是严格匹配
                只要url地址的头部和path一致，组件就会挂载，不会检查子路径
        */}
      <h1>app</h1>
      <Menu />
      {/* 
      component 用于指定页面跳转后挂载的组件
      接收的是组件的类名，这里没有使用jsx来创建，而是用component创建
      通过component会自动创建组件，并且传递参数
      */}
      <Route exact path='/about:id' component={About} />

      {/* render
      传递的是组件 通过jsx创建 传递参数就和组件传参一样
      路由信息可以通过 render的routePros参数传递
       */}
      {/* <Route exact path='/about/:id' render={(routePros) => {
        return <About info={123} routePros={routePros} />
      }} /> */}

      {/* children的简写常用写法 */}
      {/* <Route path="/home/:id" children={<Home />} /> */}

      <Route path="/home/:id">
        <Home />
      </Route>


      {/* <Route exact path='/' component={Home} /> */}
    </div>
  )
}

export default App