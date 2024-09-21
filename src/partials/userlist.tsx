    import { useEffect, useState } from "react"
    import { IUser } from "../types"
    import { getUsers, deleteUserById } from "../lib/Api"
    import { Link } from "react-router-dom"

    export const UserList = () => {
        const [users,setUsers] = useState<IUser[]>([])

        const handleDeleteUser =(id:number)=> {
            deleteUserById(id)
            .then(()=>{
              setUsers(users.filter(user => user.id != id))  
            })
        }
        useEffect(()=>{
            getUsers()
            .then(response => {
                setUsers(response)
            })
        },[])

        return <>
            <h1>Users List</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => 
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name} {user.surname}</td>
                                <td className="icons">
                                    <Link to={"/users/"+user.id}>&#128269;</Link>
                                    <Link to={"users/edit/user/"+user.id}>&#x270E;</Link>
                                    <button onClick={() => handleDeleteUser(user.id)}>&#128465;</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    }