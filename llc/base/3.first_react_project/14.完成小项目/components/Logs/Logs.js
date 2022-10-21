/* 日志的容器 */
import LogItem from "./LogItem/LogItem";
import Card from "../UI/Card/Card";
import LogFilter from './logFilter/logFilter';
import './Logs.css';
import { useState } from "react";

const Logs = (props) => {

    /*
    *   logsDate 用来存储学习的日志，
    *       这个数据除了当前组件Logs需要使用外，LogsForm也需要使用
    *       当遇到一个数据需要被多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素中
    *       这样就可以使得多个组件都能方便的访问到这个数据
    *
    *   state的提升
    *
    * */

    // 状态管理
    const [year, setYear] = useState(2022)

    // 获取改变年份的函数
    const onChangeHandler = (changeYear) => {
        //
        setYear(changeYear)
    }

    // 模拟一组从服务器中加载的数据

    // 过滤后的数组
    let filterData = props.logsData.filter(i => i.date.getFullYear() === year)


    // 将数据放入JSX中
    let logItemData = filterData.map(
        (item) => <LogItem
            onDelLog={() => props.onDelLog(item.id)}
            key={item.id}
            date={item.date}
            desc={item.desc}
            time={item.time} />
    );

    if (logItemData.length === 0) {
        logItemData = <p className="no-logs">没要找到日志！</p>;
    }

    return <Card className="logs">
        <LogFilter onChange={onChangeHandler} year={year} />
        {
            logItemData
            // logItemData.length !== 0 ? logItemData : <p className="no-logs">没要找到日志！</p>
            // logsData.map(item => <LogItem {...item}/> )
        }
    </Card>
};

export default Logs;
