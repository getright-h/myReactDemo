import React from 'react'
import { useGetTestQuery } from './store/stuAPI/stuAPI'

function App () {

    // 使用生成的钩子函数调用RTKQ_API
    // 返回查询结果对象，包含了数据，状态等一堆对象
    // const { data, isSuccess, isLoading } = useGetTestQuery()
    const data = useGetTestQuery()
    console.log(data);

    return (
        <div>
            {/* 根据请求的状态来渲染页面 */}

            {/* {isLoading && <p>数据加载中...</p>}
            {isSuccess && data.data.map(item => <p key={item.id}>
                {item.attributes.name} ---
                {item.attributes.age} ---
                {item.attributes.gender} ---
                {item.attributes.address}
            </p>)} */}
        </div>
    )
}

export default App