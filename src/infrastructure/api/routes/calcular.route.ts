import express, { Request, Response } from "express";
import DivisorCalcularUseCase from "../../../usecase/calcular/divisior/divisor.calcular.usecase";
import PrimosCalcularUseCase from "../../../usecase/calcular/primos/primos.calcular.usecase";

export const calcularRouter = express.Router();

calcularRouter.post("/", async (req: Request, res: Response) => {
  try {
    const calcularDto = {
      numero: req.body.numero,
    };
    const usecaseDivisores = new DivisorCalcularUseCase(calcularDto);
    const usecasePrimos = new PrimosCalcularUseCase(calcularDto);

    const outPut = {
      numero: req.body.numero,
      divisores: await usecaseDivisores.execute(calcularDto),
      primos: await usecasePrimos.execute(calcularDto),
    };

    return res.send(outPut);
  } catch (error) {
    res.status(500).send(error);
  }
});
