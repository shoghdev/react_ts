import { useContext } from "react"
import { Context } from "../lib/Context"
import { ActionTypes, FilterType } from "../lib/Types"

export const Filter = () => {
   const context = useContext(Context)
   if(!context) {
    throw new Error('undefind')
   }

   const {state,dispatch} = context
    return <div>
        <div className="select-wrapper">
            <p>{state.currentFilter} is used</p>
            <select value={state.currentFilter} 
                    onChange={event => dispatch({type:ActionTypes.setFilter, payload:event.target.value})}>
                <option value={FilterType.All}>all</option>
                <option value={FilterType.Ballet}>ballet</option>
                <option value={FilterType.Opera}>opera</option>
            </select>
        </div>
    </div>
}