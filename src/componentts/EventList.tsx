import { useContext, useEffect } from "react"
import { Context } from "../lib/Context"
import { getEvents } from "../lib/Api"
import { ActionTypes } from "../lib/Types"
import { Event } from "./Event"

export const EventList:React.FC = () => {
   const context = useContext(Context)
   if(!context) {
        throw new Error("undefind")
   }

   const {state,dispatch} = context
   useEffect(()=>{
        getEvents(state.currentFilter)
        .then(response => {
            dispatch({type:ActionTypes.setEvents, payload:response})
        })
   },[state.currentFilter])
    return <div className="list">
      {
        state.events.map(event=>
            <Event key={event.id} event={event}/>
        )
      }
    </div>
}