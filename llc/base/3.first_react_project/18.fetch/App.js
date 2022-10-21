import React, { useCallback, useState } from 'react'
import A from './a'

function App () {
    console.log('app 执行了');

    const [count, setCount] = useState(1)

    const countHD = () => {
        setCount(prevState => prevState + 1)
    }
    const test = count % 4 === 0

    // 使用了callback的函数 对响应函数缓存
    // 接收两个参数，需要执行的函数，该函数依赖的数据数组(useState除外)
    // 空数组表示只在首次渲染时执行，之后不变化
    const countHDCB = useCallback(
        () => {
            setCount(prevState => prevState + 1)
        }, []

    )

    return (
        <div>
            <button onClick={countHDCB}>+</button>
            {count}
            {/* <A /> */}


            {/* 使用了memo之后子组件是否重绘，取决于props中的数据是否变化 */}
            {/* 传递简单数据类型，只有在这个数据改变时，才会触发a组件的重绘 */}
            {/* <A test={test} /> */}


            {/* 传递的是复杂数据类型，比如函数，这个函数由于是定义在app父组件中的，
            每次app重绘，函数都会被重新定义，所以传递给props中的数据就会一直改变，导致了a组件的重绘 */}
            {/* <A addCount={countHD} /> */}

            {/* 使用callback */}
            <A addCount={countHDCB} />
        </div>
    )
}

export default App