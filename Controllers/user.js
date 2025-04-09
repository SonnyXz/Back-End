/user/
import {v4 as uuidv4} from "uuid";

const users = [];

export const createUser = (req , res) =>{
    const {name , age, email, gender} = req.body;
    users.push({
        name,
        age,
        email,
        gender,
        id : uuidv4,
    })
    res.send({
        success: true,
        message: "User created",
    })
}
export const getUsers = (_ , res) =>{
    res.send(users)
}

export const getUserById = (req , res) =>{
    const {id} = req.params
    const user = users.find((user) => {
        return user.id === userId
    })
    res.send(users)
}
export const DeleteUserById = (req , res) => {
}
