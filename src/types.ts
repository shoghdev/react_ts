export interface IUser {
    id:number
    name: string
    age:number
    salary: number
    isMarried?: boolean
}

export type InputUser = Omit<IUser, 'id'>

export interface IContext {
    users: IUser[]
    onDelete: (id:number) => void
    onAdd: (user:InputUser) => void
}

