import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';

// 设置移动端的适配
// 除以几视口的宽度就是多少rem，现在我们设置视口的总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw';
/* 
let base = document.documentElement.clientWidth
let fontbase = 10
let devwidth = 750
document.documentElement.style.fontSize = (fontbase * base) / devwidth + 'px'
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


