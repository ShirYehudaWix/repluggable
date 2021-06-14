
import style from "../App.module.css"
import {Counter} from "../Counter/Counter";
export const MainView=()=>{
    return <div className={style.counter}>
        <Counter/>
    </div>
}