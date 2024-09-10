import React from "react";
import { IContext, IState } from "./types";

export const initialState:IState={
    users:[
        {id:100, name: "John",age:45, salary:150000},
        {id:101, name: "Jim",age:25, salary:250000},
        {id:102, name: "Ani",age:30, salary:350000}
    ]
}

export const UserContext = React.createContext<IContext|undefined>(undefined)