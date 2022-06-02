import express, { Express } from "express";
import { calcularRouter } from "./routes/calcular.route";

export const app: Express = express();
app.use(express.json());
app.use("/calcular", calcularRouter);
