
import style from "../App.module.css"
import {Button} from "../Button/Button";
export const Controls=()=>{
    return <div className={style.counter}>
        <Button>+</Button>
        <Button>-</Button>
    </div>
}