import { ActionTypes, FilterTypes, IAction, IEvent, IState } from "./Types";

export const reducer = (state:IState, action:IAction):IState =>{
    switch(action.type){
        case ActionTypes.SetEvents:
            return {
                ...state,
                events: action.payload as IEvent[]
            }
        
       case ActionTypes.SetFilter:
            return {
                ...state,
                currentFilter: action.payload as FilterTypes
            }
            
        default:
            return state
    }
}