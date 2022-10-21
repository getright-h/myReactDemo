import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import classes from './Confirm.module.css'

function Confirm ({ text, onCancel, onOk }) {
    return (
        <Backdrop className={classes.outerbox} >
            <div className={classes.box} onClick={e => e.stopPropagation()}>
                <div className={classes.text}>
                    {text}
                </div>
                <div className={classes.btns}>
                    <button className={classes.ok} onClick={e => onOk(e)}>确定</button>
                    <button onClick={e => onCancel(e)}>取消</button>
                </div>
            </div>
        </Backdrop>
    )
}

export default Confirm