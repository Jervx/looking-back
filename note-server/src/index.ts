import http from "http";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import router from "./routes";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(cookieParser())
app.use(bodyParser.json())

app.use("/api/v1", router)

app.use(errorHandler)

const server = http.createServer(app)

server.listen(8000, ()=> console.log("running on port:8000"))