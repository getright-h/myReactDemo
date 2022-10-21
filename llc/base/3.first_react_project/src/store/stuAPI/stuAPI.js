import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';


// createApi创建一个RTKQ对象，所有的配置信息都写在里面,接受一个配置对象
const testApi = createApi({
    // api标识
    reducerPath: 'testApi',
    // 请求方式 以及基础查询信息
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=10&lang=Cn' }),
    // endpoints 用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值
    endpoints (build) {
        // build是请求的构建器，通过build来设置请求的相关信息,由rtkq对象提供
        // 返回查询配置对象
        return {
            // build.query 是查询的请求类型 不同的请求对应不同的参数
            getTest: build.query({
                query () {
                    // 返回这条请求的配置信息
                    // 这个query是拼接的子路径
                    return ''
                },
                // 对响应结果做处理 baseQueryReturnValue是原来的响应结果
                transformResponse (baseQueryReturnValue, meta, arg) {
                    return baseQueryReturnValue.data
                },
                // 设置缓存时间，单位秒，默认60s
                keepUnusedDataFor: 5,
            })
        }
    }
})

/* 页面需要调用这个请求api，要通过自动生成的钩子函数
    这个钩子函数需要我们命名并暴露
    钩子函数的命名规则 getStudents --> useGetStudentsQuery
*/
export const { useGetTestQuery } = testApi

// 还需要把rtqk对象暴露给store 挂载其自动生成的reducer
export default testApi



// "proxy": "https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=10&lang=Cn"