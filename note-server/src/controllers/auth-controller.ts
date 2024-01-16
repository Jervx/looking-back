import { RequestHandler } from "express";
import { compare, compareSync, hash } from "bcrypt"
import db from "../config/db";

export const registerUser : RequestHandler = async (req, res, next) => {
    try{
        let { name, email, password } = req.body
        password = await hash(password, 10)

        const createdUser = await db.user.create({ data : { email, name, password } });
        res.status(201).json(createdUser)
    }catch(e){
        res.status(500)
        next(e)
    }
};

export const loginUser : RequestHandler = async ( req, res, next) => {
    try{
        const { email, password } = req.body

        const user = await db.user.findUnique({ where : { email }})

        if(!user) { 
            res.status(404)
            throw new Error("User doesn't exist");
        }

        const passwordMatch = await compare(password, user?.password);

        if(!passwordMatch) {
            res.status(400)
            throw new Error("Wrong password")
        }

        res.status(200)
        res.json(user)
    }catch(e){
        res.status(500)
        next(e)
    }
}