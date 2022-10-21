import { configureStore } from "@reduxjs/toolkit";
import testApi from "./stuAPI/stuAPI";

const store = configureStore({
    reducer: {
        // 这里的reducer是自动生成的
        [testApi.reducerPath]: testApi.reducer
    },
    // 配置中间件  解决什么缓存问题 不清楚
    /* 
        middleware:getDefaultMiddleware =>
        getDefaultMiddleware().concat(studentApi.middleware)
    */
})

export default store