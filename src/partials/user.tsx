import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserById } from "../lib/Api"
import { IUser } from "../types"

export const User = () => {
    const {id} = useParams()
    const [user, setUser] = useState<IUser | undefined>(undefined)
    useEffect(() => {
        if (id) {
            getUserById(+id)
                .then((response) => {
                    setUser(response)
            })
        }
    }, [])
    return <>
        <div className="profile">
            <img src={user?.image} alt="" />
            <h3><strong>{user?.name} {user?.surname}</strong></h3>
            <p>{user?.age}</p>
        </div>
    </>
}