import './App.css';
import React, { Component } from "react";
import User from './components/user';


class App extends Component {
    render () {
        return <div className={'app'}>
            <h2>class components</h2>
            <User name={'zhang3'} age={22} />
        </div>;
    }
}

// 导出App
export default App;

