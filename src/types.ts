import { Dispatch } from "react"

export interface IUser {
    id:number
    name:string
    age:number
    salary:number
}

export interface IState {
    users:IUser[]
}

export interface IAction{
    type:string
    payload?:unknown
}

export interface IContext {
    state:IState
    dispatch:Dispatch<IAction>
}