import React, { useContext, useState } from 'react'
import cartContext from '../../store/cartContext'
import classes from './Cart.module.css'
import pic from '../../asset/bag.png'
import CartDetail from './CartDetail/CartDetail'

function Cart () {
    const cxt = useContext(cartContext)
    const isEmpty = cxt.totalAmount === 0
    const [isShowDetail, setisShowDetail] = useState(false)
    // 切换购物车的显示
    const toggleDetailHandler = () => {
        // 没有东西不让点
        if (isEmpty) return
        setisShowDetail(!isShowDetail)
    }
    return (
        <div className={classes.container} onClick={toggleDetailHandler}>
            {/* 购物车详情 */}
            {(isShowDetail && !isEmpty) ? <CartDetail /> : null}

            <div className={classes.left}>
                <div className={classes.pic}>
                    <img src={pic} alt="" />
                    {isEmpty ? null : <span>{cxt.totalAmount}</span>}
                </div>
                {isEmpty ? <p className={classes.NoMeal}>未添加商品</p> : <p className={classes.price}>{cxt.totalPrice}</p>}

            </div>

            <button className={`${classes.Button} ${isEmpty ? classes.emptyButton : null}`}>去结算</button>

        </div >
    )
}

export default Cart