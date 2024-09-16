import { useNavigate } from "react-router-dom"

export const AddUser = () => {
    const navigate = useNavigate()
    const handleCrate = () => {
        navigate("/")
    }
    return <>
        <div>
            <h2>Add User</h2>
            <button onClick={handleCrate}>Create</button>
        </div>
    </>
}