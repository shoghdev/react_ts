import { FilterTypes, IState } from "./Types";

export const initialState:IState = {
    events: [],
    currentFilter: FilterTypes.All
}