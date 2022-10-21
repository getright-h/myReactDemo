import React from 'react'

function logFilter (props) {
    const onselectionchange = (e) => {
        // 类型转换
        props.onChange(+e.target.value)
    }


    return (
        <div>
            年份:<select onChange={onselectionchange} value={props.year}>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div >
    )
}

export default logFilter