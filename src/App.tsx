import { useState } from 'react'
import './App.css'
import { UserContext } from './context'
import { InputUser, IUser } from './types'
import { UserList } from './component/userlist'
import { AddUser } from './component/adduser'

export default  function App() {
  const [users,setUsers] = useState<IUser[]>([
    {id:100, name:"Ani", age:25, salary: 250000},
    {id:101, name:"Hayk", age:55, salary: 350000},
    {id:102, name:"John", age:40, salary: 450000},
    {id:103, name:"Anna", age:35, salary: 200000}
  ])

  const removeUser = (id:number):void =>{
    setUsers(users.filter(user=>user.id != id))
  }

  const handelAdd = (user:InputUser) => {
    setUsers([...users, {...user, id:100+users.length}])
  }

  return <>
    <UserContext.Provider value={{users, onDelete:removeUser, onAdd:handelAdd}}>
      <UserList />
      <AddUser />
    </UserContext.Provider>
  </>
}
