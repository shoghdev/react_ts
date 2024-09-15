import { useContext } from "react"
import { Context } from "../lib/Context"
import { ActionTypes, FilterTypes } from "../lib/Types"

export const Filter = () => {
    const contex = useContext(Context)
    if(!contex) {
        throw new Error("undefind")
    }

    const {state,dispatch} =contex
    return <div>
        <div className="select-wrapper">
            <p>{state.currentFilter} is used</p>
            <select value={state.currentFilter} 
                    onChange={event => dispatch({type:ActionTypes.SetFilter, payload:event.target.value})}>
                <option value={FilterTypes.All}>all</option>
                <option value={FilterTypes.Ballet}>ballet</option>
                <option value={FilterTypes.Opera}>opera</option>
            </select>
        </div>
    </div>
}