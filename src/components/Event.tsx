import React from "react"
import { IEvent } from "../lib/Types"

interface IProps {
    event: IEvent
}

export const Event:React.FC<IProps> = ({event}) => {
   
    
    return <div>
        <img src={event.cover} />
        <p>{event.title}</p>
        <p>{event.date}</p>
        <strong>{event.type}</strong>
        <p>By {event.composer}</p>
    </div>
}