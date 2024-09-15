import axios from "axios";
import { FilterType, IEvent } from "./Types";

export const getEvents = async(type:FilterType=FilterType.All):Promise<IEvent[]> => {
   const query = type != FilterType.All ? ("?type="+type):""
    const response = await axios.get('http://localhost:3004/events'+query)
    return response.data
}