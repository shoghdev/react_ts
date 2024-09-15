import { Action, ActionTypes, FilterType, IEvent, IState } from "./Types"

export const reducer = (state:IState, action:Action):IState => {
    switch(action.type){
        case ActionTypes.setEvents:
            return {
                ...state,
                events: action.payload as IEvent[]
            }
        case ActionTypes.setFilter:
            return {
                ...state,
                currentFilter: action.payload as FilterType
            }
        default:
            return state
    }
}