import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import cartContext from '../../../store/cartContext'

import Meal from '../../Meals/Meal/Meal'
import Backdrop from '../../UI/Backdrop/Backdrop'

import classes from './CartDetail.module.css'
import Confirm from '../../UI/Confirm/Confirm'

function CartDetail (props) {
    const cxt = useContext(cartContext)
    // 是否显清空示弹窗
    const [isShowClear, setIsShowClear] = useState(false)

    //显示清空购物车弹窗函数
    const showClearHandler = (e) => {
        setIsShowClear(true)
    }
    // 确定清空函数
    const confirmHandler = (e) => {
        //
        cxt.clearCart()

        setIsShowClear(false)
    }
    // 取消清空函数 关闭弹窗
    const cancelHandler = () => {
        setIsShowClear(false)
    }

    return (
        <Backdrop onClick={cancelHandler}>
            {/* 清除购物车弹窗 */}
            {isShowClear && <Confirm
                onOk={confirmHandler}
                onCancel={cancelHandler}
                text={'确认清空购物车吗?'} />}

            {/* 避免遮罩层下的购物车栏继承放置冒泡 */}
            <div className={classes.detailBox} onClick={e => e.stopPropagation()}>
                <header className={classes.info}>
                    <div className={classes.title}>商品详情</div>
                    <div className={classes.trash} onClick={showClearHandler}>
                        <FontAwesomeIcon icon={faTrash} />
                        <p>清空购物车</p>
                    </div>
                </header>
                <div className={classes.cartList}>
                    {cxt.items.map(i => {
                        return <Meal noDesc key={i.id} item={i} />
                    })}
                </div>
            </div>
        </Backdrop>
    )
}

export default CartDetail


/* 
<Backdrop onClick={cancelBackdrop} >
<div className={classes.detailBox}>
    <header className={classes.info}>
        <div className={classes.title}>商品详情</div>
        <div className={classes.trash}>
            <FontAwesomeIcon icon={faTrash} />
            <p>清空购物车</p>
        </div>
    </header>
    <div className={classes.cartList}>
        {cxt.items.map(i => {
            return <Meal noDesc key={i.id} item={i} />
        })}
    </div>
</div>
</Backdrop> */