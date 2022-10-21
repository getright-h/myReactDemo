import React, { useReducer } from 'react'

// 把reducer函数定义在函数体外，避免重新渲染的时候每次都新创建一次
const countReducer = (state, action) => {
    switch (action.type) {
        case 'PULS':
            return state + 1
        case 'SUB':
            return state - 1
        default:
            return state
    }
}

function App () {

    /**
     * useReducer 
     *  接收两个参数
     *  1.reducer 整合函数，所有有关该数据的操作，都应该写在这里面。接收两个参数
     *      1.state 当前最新的state
     *      2.action 接收一个对象，该对象由countDispatch({})提供
     *  2. initialArg state的初始值，和useState()的初始值一样
     * 
     * 返回值会成为最新的state值
     * 
     * 
     *  有两个返回值:
     *  1.state 最新的返回值
     *  2.修改state的派发器，发送操作state的命令，具体执行由reducer 整合函数执行
    
    */
    const [count, countDispatch] = useReducer(countReducer, 1)

    const pulsHandler = () => {
        countDispatch({ type: 'PULS' })
    }
    const subHandler = () => {
        countDispatch({ type: 'SUB' })
    }

    return (
        <div>
            <button onClick={pulsHandler}>+</button>
            {count}
            <button onClick={subHandler}>-</button>
        </div>
    )
}

export default App