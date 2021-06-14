export interface ButtonProps{
    children:String
}

export interface CounterState{
    counter:number
}

export type DispatchType=()=>CounterState

export type CounterAction={
    type:string
}