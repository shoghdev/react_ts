export interface IUser{
    id:number
    name:string
    age:number
    salary:number
    isMaried?:boolean
}

export interface IContext {
    users: IUser[]
    onDelete: (id:number)=>void
}