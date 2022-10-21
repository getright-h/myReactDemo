import React from 'react'
import StudyItem from './components/study/studyItem/studyItem'
import './app.css'

function App () {
    const arr = [
        { desc: '长门有希', time: new Date(), key: 1 },
        { desc: '凉宫春日', time: new Date(), key: 2 },
        { desc: '琦玉', time: new Date(), key: 3 }
    ]

    // 把逻辑写在jsx外面
    const item = arr.map(i => <StudyItem {...i} />)

    return <div className="foo">
        {
            item
        }
    </div>


}

export default App