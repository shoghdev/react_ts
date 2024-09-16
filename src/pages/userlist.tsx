import { useState } from "react"
import { Link } from "react-router-dom"

interface IUser{
    id:number
    name:string
}

export const UserList = () => {
    const [users,setUsers] = useState<IUser[]>([
        {id:100, name: "John"},
        {id:101, name: "Ani"},
        {id:102, name: "Anna"}
    ])
    return <>
        <div>
            <h2>User list</h2>
            {
                users.map(user => 
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <Link to={"/user/"+user.id}>details</Link>
                    </div>
                )
            }
        </div>
    </>
}