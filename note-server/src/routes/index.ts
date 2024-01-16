import { Router } from "express";

import authRouter from "./auth-route";

const router = Router();

router.get("/", (req, res)=> res.status(200).send("nothing on here"))
router.use("/auth", authRouter);

export default router;