import { NextFunction, Request, Response } from "express"
import z, { AnyZodObject, ZodError} from "zod"

export default interface validators {
  params?: AnyZodObject,
  body?: AnyZodObject,
  query?: AnyZodObject,
}

export const validateRequest = ( validators : validators ) => {
    return async (req : Request, res : Response, next : NextFunction) => {
        try{
            if(validators.body){
                req.body = await validators.body?.parseAsync(req.body);
            }
            next();
        }catch(e){
            if(e instanceof ZodError){
                console.log(e)
                next(new Error(e.issues[0].message))
                res.status(400)
            }
            next(e)
        }
    }
}