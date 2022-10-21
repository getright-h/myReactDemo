import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAge, setName } from './store/stuSlice/stuSlice'
import { setAddress as setSchoolAddress, setName as setSchoolName } from './store/stuSchool/schSlice'



function App () {
    // 获取state数据 useSelector接收一个函数，此处的state是管理的多组数据的聚合
    // const student = useSelector(state => state.student)
    // 获取多个state 解构
    const { student, school } = useSelector(state => state)

    // 修改state数据 useDispatch获取派发函数，往派发函数传入action对象即可
    // import 获取派发函数的action对象
    const dispatch = useDispatch()

    // 此处传入派发函数的第一个参数，就是payload
    const changeAge = () => {
        dispatch(setAge(100))
    }
    const changeName = () => {
        dispatch(setName('david'))
    }

    return (
        <div>
            {student.name}
            {student.age}
            <button onClick={changeName}>changeName</button>
            <button onClick={changeAge}>changeAge</button>
            <hr />

            {school.name} ---
            {school.address}
            <button onClick={() => dispatch(setSchoolName('高老庄中小'))}>修改学校名字</button>
            <button onClick={() => dispatch(setSchoolAddress('高老庄府前街19号'))}>修改学校地址</button>
        </div>
    )
}

export default App