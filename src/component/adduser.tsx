import React, { useContext, useState } from "react"
import { UserContext } from "../context"
import { InputUser } from "../types"

export const AddUser = () => {
    const context = useContext(UserContext)
    if(!context) {
        throw new Error("Undefind")
        return
    }
    
    const [user,setUser] = useState<InputUser> ({
        name: "",
        age: 18,
        salary: 100_000
    })

    const[error,setError] = useState("")
    const[numError, setNumError] = useState("")

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(!user.name.trim() || !user.age || !user.salary) {
            return setError("please fill all the fields")
        }

        if( typeof user.age != "number" || typeof user.salary != "number") {
            return setNumError("Please fill a number")
        }
        setNumError("")

        context.onAdd(user)

        setUser({
            name: "",
            age: 18,
            salary: 100_000
        })
    }
    return <>
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <input 
                type="text" 
                placeholder="Add name"
                value={user.name}
                onChange={event => setUser({...user, name:event.target.value})}
            />
            <input 
                type="number" 
                placeholder="Add age"
                value={user.age}
                onChange={event => setUser({...user, age:+event.target.value})}
            />
            {numError && <p className="error">{numError}</p>}
            <input 
                type="number" 
                placeholder="Add salary"
                value={user.salary}
                onChange={event => setUser({...user, salary:+event.target.value})}
            />
            {numError && <p className="error">{numError}</p>}
            <button type="submit">Add</button>
        </form>
    </>
}