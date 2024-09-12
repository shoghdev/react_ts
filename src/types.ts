import { Dispatch } from "react"

export interface IProduct {
    id:number
    name:string
    price:number
    photo:string
}

export interface IBasket {
    id:number
    name:string
    price:number
    photo:string
    count:number
}

export interface IState{
    products:IProduct[]
    basket:IBasket[]
}

export interface IAction{
    type:string
    payload?:unknown
}

export interface IContext {
    state:IState
    dispatch:Dispatch<IAction>
}