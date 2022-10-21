import React from 'react'
import ReactDOM from 'react-dom/client'

class App extends React.Component {
    render () {
        return <div>this is a class component</div>
    }
}




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)