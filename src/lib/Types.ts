import { Dispatch } from "react"

export interface IEvent {
    id: string | number
    title: string
    date: string
    time: string
    type: string
    composer: string
    cover: string
}

export interface IState {
    events: IEvent[]
    currentFilter: FilterType
    
}
export interface IContextType {
    state: IState
    dispatch: Dispatch<Action>
}
export interface Action {
    type: ActionTypes
    payload?: unknown
}

export enum ActionTypes {
    AddEvent,
    RemoveEvent,
    UpdateEvent,
    setEvents,
    setFilter

}

export enum FilterType{
    All = 'all',
    Opera = 'opera',
    Ballet = 'ballet'
}