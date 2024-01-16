import { RequestHandler } from "express";
import db from "../config/db";

export const registerUser : RequestHandler = async (req, res, next) => {
    try{
        const { name, email, password } = req.body
        return await db.user.create({ data : { email, name, password } });
    }catch(e){
        next(e)
    }
};

export const login : RequestHandler = async ( req, res, next) => {
    try{

    }catch(e){
        next(e)
    }
}