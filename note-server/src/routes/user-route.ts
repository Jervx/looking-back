import { Router } from "express"

import { getUser } from "../controllers/user-controller";

import { validateRequest } from "../middlewares/validate-request";
import { UserGetValidation } from "../validations/user-validation";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send("nothing here"))

userRouter.get("/:id", validateRequest({ params : UserGetValidation }), getUser)

export default userRouter;