import { createSlice } from '@reduxjs/toolkit';

// 1. 切片对象
const schSlice = createSlice({
    // 用于生成action中的type名
    name: 'school',
    // 初始值对象
    initialState: {
        name: '电子科大',
        address: '清水河1号'
    },
    // 指定操作state数据的方法
    reducers: {
        setName (state, action) {
            // 这里可以对state直接修改，因为这里的state是一个代理对象
            state.name = action.payload
        },
        setAddress (state, action) {
            state.address = action.payload
        }
    }
})


// 2. createSlice生成的切片对象，会自动生成action
// 需要暴露出去
export const { setName, setAddress } = schSlice.actions



// 由于把不同功能的reducer拆分了，这里需要暴露，并且在store的index中集中引入
// 重命名为stuReducer
export const { reducer: schReducer } = schSlice;