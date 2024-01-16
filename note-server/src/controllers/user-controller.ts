import db from "../config/db";
import { RequestHandler } from "express";

export const getUser: RequestHandler = async (req, res, next) => {
    try {
        let id = Number(req.params.id);

        const user = await db.user.findUnique({
            where: { id },
            select: {
                email: true,
                name: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            res.status(404);
            throw new Error("User not found");
        }

        res.status(200).json(user);
    } catch (e) {
        next(e);
    }
};
