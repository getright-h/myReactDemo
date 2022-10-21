import React from 'react';
import Meal from "./Meal/Meal";
import classes from './Meals.module.css';

/*
*   食物列表的组件
* */
const Meals = ({ meals }) => {
    return (
        /*现在将滚动条设置给了Meals*/
        <div className={classes.Meals}>
            {meals.map(item => <Meal
                key={item.id}
                item={item} />)}
        </div>
    );
};

export default Meals;
