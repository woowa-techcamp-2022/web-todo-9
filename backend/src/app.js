import express from "express";
import path from "path";
import logger from "morgan";
import baseRouter from "./routes/index.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", baseRouter);

app.listen(PORT);

export default app;
