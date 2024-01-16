import { Router, Request, Response } from "express"

import { UserLoginValidation, UserRegisterValidation } from "../validations/user-validation";
import { loginUser, registerUser } from "../controllers/auth-controller";
import { validateRequest } from "../middlewares/validate-request";

const authRouter = Router();

authRouter.get("/", (req : Request, res : Response) => {
    res.status(200).send("Nothing here")
})

authRouter.post("/login", validateRequest({body : UserLoginValidation}), loginUser)

authRouter.post("/register", validateRequest({ body : UserRegisterValidation }), registerUser)

export default authRouter