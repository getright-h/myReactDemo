import ReactDOM from 'react-dom/client'
import './index.css'

const App =
    <div className='foo'>
        {/* item */}
        <div className="item">
            {/* date */}
            <div className="date">
                <div className="month">八月</div>
                <div className="day">22</div>
            </div>
            {/* todo */}
            <div className="todo">
                <div className="do-what">javascript</div>
                <div className="time">80m</div>
            </div>
        </div>
    </div>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(App)