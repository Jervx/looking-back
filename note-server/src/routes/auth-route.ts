import { registerUser } from "../controllers/auth-controller";
import { Router, Request, Response } from "express"

const authRouter = Router();

authRouter.get("/", (req : Request, res : Response) => {
    res.status(200).send("Nothing here")
})

authRouter.post("/login", (req : Request, res : Response)=> {

})

authRouter.post("/register", registerUser)

export default authRouter