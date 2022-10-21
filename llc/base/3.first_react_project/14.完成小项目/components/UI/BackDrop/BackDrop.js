import React from 'react';
import ReactDOM from 'react-dom';
import './BackDrop.css';

const BackDrop = (props) => {

    // 获取传送门目的地 根元素
    const backdropDOM = document.getElementById('backdrop')
    return (
        ReactDOM.createPortal(<div className="backDrop">
            {props.children}
        </div>, backdropDOM)

    );
};

export default BackDrop;
