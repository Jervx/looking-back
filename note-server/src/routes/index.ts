import { Router } from "express";

import authRouter from "./auth-route";
import userRouter from "./user-route";

const router = Router();

router.get("/", (req, res)=> res.status(200).send("nothing on here"))
router.use("/auth", authRouter);
router.use("/user", userRouter)

export default router;