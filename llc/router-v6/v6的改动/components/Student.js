import React from 'react'
import { useMatch, useNavigate, useParams } from 'react-router-dom';

function Student (props) {
    const STU_DATA = [
        {
            id: 1,
            name: '刘备'
        },
        {
            id: 2,
            name: '关羽'
        },
        {
            id: 3,
            name: '沙和尚'
        },
        {
            id: 4,
            name: '唐僧'
        },
    ];
    // 获取路由参数
    const { id } = useParams()
    console.log(props);
    // useMatch钩子改变 接收一个路径匹配的字符串 如果匹配就返回路由信息对象 不符合返回null
    const match = useMatch('/student/:id')

    // 移除history钩子 路由跳转由useNavigate替代
    const nav = useNavigate()
    // 默认push replace模式需要传入对象参数
    const navHandler = () => {
        nav('/about', { replace: true })
        // nav('/about')
    }

    const res = STU_DATA.find(item => item.id === +id)
    return (
        <div>
            {res.id} -- {res.name}
            <button onClick={navHandler}>click</button>
        </div>
    )
}

export default Student