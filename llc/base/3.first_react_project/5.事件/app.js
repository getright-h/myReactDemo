import React from 'react'

const fn = (e) => {
    console.log(e);
    e.preventDefault()
}

function App () {
    return (
        <div >
            <a href='http://www.baidu.com' onClick={fn} > tbn</a>
        </div>
    )
}

export default App