import { useParams } from "react-router-dom"

export const User = () => {
    const {id} = useParams()
    return <>
        <div>
            <h2>User{id}</h2>

        </div>
    </>
}