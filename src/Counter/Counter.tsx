import style from "../App.module.css"
import React from "react";

export const Counter = () => {
    const [count, setCount] = React.useState(0);
    return <div className={style.counter}>
        {count}
    </div>
}