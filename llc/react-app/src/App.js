import React, { useState, useReducer } from 'react';
import Meals from "./components/Meals/Meals";
import CartContext from './store/cartContext';
import Filter from './components/Filter/Filter';
import Cart from './components/Cart/Cart';


// 商品数据
const MEALS_DATA = [
    {
        id: '1',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/img/meals/1.png'
    },
    {
        id: '2',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/img/meals/2.png'
    },
    {
        id: '3',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/img/meals/3.png'
    }, {
        id: '4',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/img/meals/4.png'
    }, {
        id: '5',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/img/meals/5.png'
    }, {
        id: '6',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/img/meals/6.png'
    }, {
        id: '7',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/img/meals/7.png'
    }
];
// cartReducer 聚合函数
const cartReducer = (state, action) => {

    const newCart = { ...state }
    switch (action.type) {
        case 'ADD':
            // 购物车判断是否存在该商品
            if (newCart.items.indexOf(action.meal) === -1) {
                // 不存在
                newCart.items.push(action.meal)
                action.meal.amount = 1

            } else {
                // 存在
                action.meal.amount += 1

            }
            newCart.totalAmount += 1
            newCart.totalPrice += action.meal.price
            // 重设购物车数据
            return newCart

        case 'DELETE':
            // 购物车判断是否存在该商品
            // 不为1
            action.meal.amount -= 1
            if (action.meal.amount === 0) {
                // 余数为1 直接删除
                newCart.items = newCart.items.filter(i => i !== action.meal)
            }
            newCart.totalAmount -= 1
            newCart.totalPrice -= action.meal.price
            // 重设购物车数据
            return newCart

        case 'CLEAR':
            // 将购物车中商品的数量清0
            newCart.items.forEach(item => delete item.amount);
            newCart.items = [];
            newCart.totalAmount = 0;
            newCart.totalPrice = 0;
            return newCart

        default:
            return state
    }
}


const App = () => {
    // 购物车中的商品数据 用state管理
    /* 
    meal.amount 单个商品数量
    1. items 列表
    2. totalAmount 总数
    3. totalPrice 总价
    
    */
    /* const [cartData, setCartData] = useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0
    }) */

    // 过滤函数
    const filterHandler = (keyword) => {
        const newArr = MEALS_DATA.filter(i => i.title.indexOf(keyword) !== -1)
        setMealData(newArr)
    }

    // 用reducer管理购物车数据，函数
    const [cartData, cartDispatch] = useReducer(cartReducer, {
        items: [],
        totalAmount: 0,
        totalPrice: 0
    })

    // 添加购物商品函数
    /*     const addMealHandler = (meal) => {
            const newCart = { ...cartData }
            // 购物车判断是否存在该商品
            if (newCart.items.indexOf(meal) === -1) {
                // 不存在
                newCart.items.push(meal)
                meal.amount = 1
    
            } else {
                // 存在
                meal.amount += 1
    
            }
            newCart.totalAmount += 1
            newCart.totalPrice += meal.price
            // 重设购物车数据
            setCartData(newCart)
            console.log(cartData, '!');
    
        } */

    // 删除购物车商品函数
    /*  const deleMealHandler = (meal) => {
         const newCart = { ...cartData }
         // 不为1
         meal.amount -= 1
         if (meal.amount === 0) {
             // 余数为1 直接删除
             newCart.items = newCart.items.filter(i => i !== meal)
             // newCart.items.splice(newCart.items.indexOf(meal), 1);
         }
         newCart.totalAmount -= 1
         newCart.totalPrice -= meal.price
 
         // 重设购物车数据
         setCartData(newCart)
     } */

    // 清空购物车函数
    /*  const clearCart = (params) => {
 
         const newCart = { ...cartData };
         // 将购物车中商品的数量清0
         newCart.items.forEach(item => delete item.amount);
         newCart.items = [];
         newCart.totalAmount = 0;
         newCart.totalPrice = 0;
 
         setCartData(newCart);
     } */



    const [mealData, setMealData] = useState(MEALS_DATA)



    return (
        <div>
            <Filter filterHandler={filterHandler} />
            <CartContext.Provider value={{ ...cartData, cartDispatch }}>
                <Meals meals={mealData} />
                <Cart />
            </CartContext.Provider>
        </div>
    );
};

export default App;
