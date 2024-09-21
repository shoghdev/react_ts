export interface IUser {
    id:number
    name:string
    surname:string
    age:number
    image:string
}

export type InputUser = Omit<IUser, 'id'>

