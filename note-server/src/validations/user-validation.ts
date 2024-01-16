import z from "zod"

export const UserRegister = z.object({
    name : z.string().min(1),
    email : z.string().email(),
    password : z.string().min(5)
})

export const UserLogin = z.object({
    email : z.string().email(),
    password : z.string().min(1)
})