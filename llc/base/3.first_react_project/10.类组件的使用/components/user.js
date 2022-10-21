import React, { Component } from 'react'

export default class user extends Component {
    // 1. 类组件的props被定义在类的实例对象上，即，this
    // 2. 类组件中state统一存储到了实例对象的state属性中
    state = {
        count: 1,
        name: 'alex',
        obj: {
            desc: 'wuhu',
            info: 'info'
        }
    }
    // 3. 通过setState修改state状态
    // 和函数组件不同的是，类组件只会修改变化的值，没有变化的不会动
    // 但这只限于普通数据类型，当state中保存的是对象，数组等就不行了
    countAdd = () => {
        // 若修改的是对象等，就还是需要像函数组件一样解构赋值
        this.setState({ obj: { ...this.state.obj, desc: 'qifei' } })

        // 不同于函数组件，这里setState返回的整个state对象
        this.setState(pre => {
            return {
                count: pre.count + 1
            }
        })
        // this.setState({ count: 2 })
    }
    // 4. 获取ref和函数组件一样，也可以自定义
    divRef = React.createRef()
    logRef = () => {
        console.log(this.divRef);
    }
    render () {
        return (
            <div ref={this.divRef}>
                <h2>{this.state.count} -- {this.state.name}</h2>
                <h3>{this.state.obj.desc} -- {this.state.obj.info}</h3>
                <button onClick={this.countAdd}>btn</button>
                <button onClick={this.logRef}>ref</button>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.age}</li>
                </ul>
            </div>
        )
    }
}



