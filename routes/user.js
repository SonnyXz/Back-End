import express from "express"
import { createUser, getUserById } from "../Controllers/user";

export const userRouter = express.Router();

userRouter
.get("/user/", getUsers)
.get("user/:id", getUserById)
.post("user/create", createUser)
.delete("user/delete", DeleteUserById)