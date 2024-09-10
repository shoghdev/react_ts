import { useState } from 'react'
import './App.css'
import { AddUser } from './components/adduser'
import { UserList } from './components/userlist'
import { IUser } from './types'
import { UserContext } from './context'

export default function App() {
    const [users,setUsers]=useState<IUser[]>([
        {id:100, name:"John", age:45, salary: 250000},
        {id: 102 ,name: "Robert", age: 25, salary: 270000},
        {id: 103 ,name: "Ani", age: 28, salary: 190000},
        {id: 104 ,name: "Arman", age: 19, salary: 215000},
    ])

    const removeUser = (id:number):void => {
        setUsers(users.filter(user => user.id != id))
    }
    return <>
        <UserContext.Provider value={{users, onDelete:removeUser}}>
            <AddUser />
            <UserList />
        </UserContext.Provider>
    </>

}

