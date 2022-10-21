import React from 'react'

const cartContext = React.createContext({
    // 默认
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    addMealHandler: () => { },
    deleMealHandler: () => { },
    clearCart: () => { }

})
export default cartContext