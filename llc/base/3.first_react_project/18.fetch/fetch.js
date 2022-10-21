import React, { useEffect, useState } from 'react'

function fetch () {

    // 存储数据
    const [data, setData] = useState([])
    // 管理加载状态
    const [loading, setLoading] = useState(false)
    // 管理错误状态
    const [error, seterror] = useState(null)

    // await promise
    useEffect(() => {

        // 因为useeffect不接收异步函数，所以必须要包裹一层函数
        const sendRequest = async () => {
            try {
                // 显示加载组件
                setLoading(true)
                // 清空错误状态
                seterror(null)
                const res = await fetch('www.example.com')
                // 判断网络状态
                if (res.state === 200) {
                    // fetch从json转换的数据，也是promise对象，
                    const data = await res.json()
                    // 存储数据
                    setData(data)
                } else {
                    throw new Error('请求错误')
                }

            } catch (error) {
                // 更新错误状态
                seterror(error)
            } finally {
                // 不管时成功还是失败，在网络请求结束后都应取消加载提示组件
                setLoading(false)
            }
        }
        sendRequest()
    }, [])



    return (
        <div>
            {/* 展示主体组件 */}
            {(!loading && !error) && <ShowDataComponent />}

            {/* 展示加载提示组件 */}
            {loading && <ShowLoadingComponent />}

            {/* 展示错误提示组件 */}
            {error && <ShowErrorComponent />}
        </div>
    )
}

export default fetch