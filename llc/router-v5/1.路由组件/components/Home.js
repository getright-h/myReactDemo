import React from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";


function Home () {

    // children
    const match = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
    const { id } = useParams();

    console.log(match);
    console.log(location);
    console.log(history);
    console.log(id);
    const toAbout = () => {
        //push()需要一个location作为参数
        history.push({
            pathname: '/about/3',
            state: {
                info: 'wuhu'
            }
        })
    }
    return (
        <div>
            <button onClick={toAbout}>to About</button>
        </div>
    )
}

export default Home