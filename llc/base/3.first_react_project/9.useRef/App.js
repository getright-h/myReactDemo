import './App.css';
import { useRef, useState } from "react";

const App = () => {

    // 使用钩子函数创建一个dom对象的容器
    // const box = useRef()
    const box = { current: null }

    const change = () => {
        console.log(box);
    }


    return <div className={'app'} ref={box}>
        <button onClick={change}>change</button>
    </div>;
};

// 导出App
export default App;
