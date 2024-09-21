import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { addNewUser, getUsers } from '../lib/Api'
import { InputUser, IUser } from '../types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const schema: yup.ObjectSchema<InputUser> = yup
    .object()
    .shape({
        name: yup.string().required('Name is required'),
        surname: yup.string().required('Surname is required'),
        age: yup.number().transform((value, originalValue) => (originalValue === '' ? undefined : value)).required('Age is required'),
        image: yup.string().required('The image is required')
    })
    .required()

export const AddUser = () => {
    const [users,setUsers] = useState<IUser[]>([])
    const {register, handleSubmit,formState:{errors},reset} = useForm<InputUser>({
        resolver: yupResolver(schema),
    })
    const navigate = useNavigate()

    getUsers()
        .then(response => {
            setUsers(response)
        })

    const handleAdd:SubmitHandler<InputUser> = data => {
        
        if(data) {
            addNewUser({...data, id:users.length+100})
            navigate("/")
        }
        reset()
    }
    return <>
        <h1>Add New User</h1>
        <form onSubmit={handleSubmit(handleAdd)}>
            <div>
                <input 
                    type="text" 
                    placeholder="Name"
                    {...register("name")}
                />
                {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Surname"
                    {...register("surname")}
                />
                {errors.surname && <p style={{color:"red"}}>{errors.surname.message}</p>}
            </div>
            <div>
                <input 
                    type="number" 
                    placeholder="Age"
                    {...register("age")}
                />
                {errors.age && <p style={{color:"red"}}>{errors.age.message}</p>}
            </div>
            <div>
                <input 
                    type="file" 
                    placeholder="image"
                    {...register("image")}
                />
                {errors.image && <p style={{color:"red"}}>{errors.image.message}</p>}
            </div>
            <button>Add</button>
        </form>
    </>
}