import { createSlice } from '@reduxjs/toolkit';

// 1. 切片对象
const stuSlice = createSlice({
    // 用于生成action中的type名
    name: 'stu',
    // 初始值对象
    initialState: {
        name: 'zhang3',
        age: 12,
        gender: 'male'
    },
    // 指定操作state数据的方法
    reducers: {
        setName (state, action) {
            // 这里可以对state直接修改，因为这里的state是一个代理对象
            state.name = action.payload
        },
        setAge (state, action) {
            state.age = action.payload
        }
    }
})


// 2. createSlice生成的切片对象，会自动生成action
// 需要暴露出去
export const { setName, setAge } = stuSlice.actions
console.log('acions', stuSlice.actions);
// actions对象 中储存了自动生成action的函数创建器，调用后会自动生成对应的action对象

//action对象的结构 {type:name/函数名, payload:函数的参数} 我们可以传入payload值
const nameAction = setName('哈哈');


// 由于把不同功能的reducer拆分了，这里需要暴露，并且在store的index中集中引入
// 重命名为stuReducer
export const { reducer: stuReducer } = stuSlice;