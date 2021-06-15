
import style from "../App.module.css"
import {ButtonProps} from "../types/types";
export const Button=(props:ButtonProps)=>{
    return <button className={style.button}>
        {props.children}
    </button>
}

const mapStateToProps(