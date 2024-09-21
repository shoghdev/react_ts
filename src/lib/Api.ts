import axios from "axios"
import { InputUser, IUser } from "../types"

export const getUsers = async () => {
    const response = await axios.get("http://localhost:3005/users")
    return response.data
}

export const getUserById = async (id:number)=> {
    const response = await axios.get(`http://localhost:3005/users/${id}`)
    return response.data
}

export const deleteUserById = async (id:number)=> {
    const response = await axios.delete(`http://localhost:3005/users/${id}`);
    return response.data
}

export const addNewUser = async (data:IUser)=> {
    const response = await axios.post("http://localhost:3005/users/", data)
    return response.data;
}

export const editUser = async (id:number,data:InputUser)=> {
    const response = await axios.put(`http://localhost:3005/users/${id}`, data)
    return response.data;
}