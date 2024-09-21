import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { InputUser, IUser } from "../types"
import { editUser, getUserById } from "../lib/Api"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { SubmitHandler, useForm } from "react-hook-form"

const schema: yup.ObjectSchema<InputUser> = yup
    .object()
    .shape({
        name: yup.string().required('Name is required'),
        surname: yup.string().required('Surname is required'),
        age: yup.number().transform((value, originalValue) => (originalValue === '' ? undefined : value)).required('Age is required'),
        image: yup.string().required('The image is required')
    })
    .required()

export const UpdateUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState<IUser | undefined>(undefined)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<InputUser>({
        resolver: yupResolver(schema),
    })
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getUserById(+id)
                .then((response) => {
                    setUser(response)

                    setValue("name", response.name)
                    setValue("surname", response.surname)
                    setValue("age", response.age)
                    setValue("image", response.image) 
                })
        }
    }, [id, setValue])

    const handleEdit: SubmitHandler<InputUser> = (data) => {
        if (data && user) {
            editUser(user.id, { ...data })
            navigate("/")
        }
    }

    return (
        <>
            <h1>Edit User Info</h1>
            <form onSubmit={handleSubmit(handleEdit)}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name")}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Surname"
                        {...register("surname")}
                    />
                    {errors.surname && <p style={{ color: "red" }}>{errors.surname.message}</p>}
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Age"
                        {...register("age")}
                    />
                    {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        {...register("image")}
                    />
                    {errors.image && <p style={{ color: "red" }}>{errors.image.message}</p>}
                </div>
                <button type="submit">Update</button>
            </form>
        </>
    )
}
