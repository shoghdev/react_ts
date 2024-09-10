import { useContext } from "react"
import { UserContext } from "../context"

export const UserList = () => {
    const context = useContext(UserContext)
    if(!context) {
        throw new Error("Undefind")
    }
    const {users, onDelete} = context
    return <>
        <h3>UerList</h3>
        {
            users.map(user => 
                <div key={user.id} style={{display:"flex", width: "200px",justifyContent: "space-between", marginBottom: "15px"}}>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                    <button onClick={()=>onDelete(user.id)}>x</button>
                </div>
            )
        }
    </>
}