import React, { useContext } from 'react';
import classes from './Counter.module.css';
// 字体图标
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import cartContext from '../../../store/cartContext';


// 计数器的组件
const Counter = (props) => {
    // 使用context
    const cxt = useContext(cartContext)

    // 添加购物车按钮
    const addBtnHandler = () => {
        cxt.cartDispatch({ type: 'ADD', meal: props.item })
    }
    // 删除购物车按钮
    const deleBtnHandler = () => {
        cxt.cartDispatch({ type: 'DELETE', meal: props.item })

    }
    return (
        <div className={classes.Counter}>
            {
                (props.amount && props.amount !== 0) ? (
                    <>
                        <button className={classes.Sub}>
                            <FontAwesomeIcon icon={faMinus} onClick={deleBtnHandler}></FontAwesomeIcon>
                        </button>
                        <span className={classes.count}>{props.amount}</span>
                    </>
                ) : null
            }

            <button className={classes.Add} onClick={addBtnHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Counter;
