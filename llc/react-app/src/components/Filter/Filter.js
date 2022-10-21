import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './Filter.module.css'

function Filter (props) {
    const onInputChange = (e) => {
        // const keyword = e.target.value.trim()
        // props.filterHandler(keyword)

        // 节流
        let timer;
        // clearTimeout(timer)
        timer = setTimeout(() => {
            console.log('send request');
            const keyword = e.target.value.trim()
            props.filterHandler(keyword)
        }, 500);
    }

    return (
        <div className={classes.filterContainer}>
            <input type="text" onChange={onInputChange} className={classes.iSearchInput} placeholder='请输入商品' />
            <FontAwesomeIcon className={classes.iSearchIcon} icon={faSearch} />
        </div>
    )
}

export default Filter