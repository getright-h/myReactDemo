import { configureStore } from '@reduxjs/toolkit';
// 引入拆分的多组reducer
import { stuReducer } from './stuSlice/stuSlice';
import { schReducer } from './stuSchool/schSlice';

// 3. 创建store
const store = configureStore({
    // 聚合多个不同的reducer，管理多组数据
    reducer: {
        student: stuReducer,
        school: schReducer
    }
})
export default store