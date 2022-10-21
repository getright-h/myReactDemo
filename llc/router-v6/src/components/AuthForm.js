import React, { useRef, useState } from 'react'

function AuthForm () {
    // 提交的状态
    const [isLoadingForm, setIsLoadingForm] = useState(true)
    // 提交的信息
    const [username, setUsername] = useState('')
    const [pwd, setpwd] = useState('')
    const [email, setemail] = useState('')
    // 提交
    const subHandler = (e) => {
        e.preventDefault()
        if (isLoadingForm) {
            console.log(username, pwd);
        } else {

            console.log(username, pwd, email);
        }

    }
    // 更改
    const changeHandlerName = (e) => {
        //绑定受控组件
        setUsername(e.target.value)

    }
    const changeHandlerPwd = (e) => {
        setpwd(e.target.value)
    }
    const changeHandlerEmail = (e) => {
        setemail(e.target.value)
    }
    return (
        <div>
            <h1>
                {isLoadingForm ? '登录' : '注册'}
            </h1>
            <form onSubmit={subHandler}>
                <div>
                    <input onChange={changeHandlerName} value={username} type="text" placeholder='用户名' />
                </div>
                <div>
                    <input onChange={changeHandlerPwd} value={pwd} type="password" placeholder='密码' />
                </div>
                {isLoadingForm ?
                    '' :
                    <div>
                        <input onChange={changeHandlerEmail} value={email} type="email" placeholder='邮箱' />
                    </div>
                }

                <button>提交</button>
                <a href="www.example.com" onClick={
                    event => {
                        event.preventDefault();
                        setIsLoadingForm(prevState => !prevState);
                    }
                }>
                    {isLoadingForm ? '没有帐号?点击注册' : '已有帐号，点击登录'}
                </a>

            </form>
        </div>
    )
}

export default AuthForm