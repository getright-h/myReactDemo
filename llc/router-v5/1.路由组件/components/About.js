import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom';

// function About ({ info, routePros }) {
function About (routePros) {
    const STU_DATA = [
        {
            id: 1,
            name: '孙悟空'
        },
        {
            id: 2,
            name: '猪八戒'
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

    //路由嵌套 获取上级路由的地址

    // const person = STU_DATA.find(i => i.id === +props.match.params.id)
    const person = STU_DATA.find(i => i.id === +routePros.match.params.id)
    return (
        <div>
            {person.id} -- {person.name}

        </div>
    )
}

export default About