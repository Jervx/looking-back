import { ErrorRequestHandler } from "express";

export const errorHandler : ErrorRequestHandler = (err, req, res, next) => {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    console.error(err)
    res.status(statusCode);
    res.json({ message : err.message })
}