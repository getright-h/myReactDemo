import React, { memo } from 'react'

function A (props) {
    console.log('a 执行了');
    return (
        <div>
            <h3>a components</h3>
            {props.test}
        </div>
    )
}

export default React.memo(A)