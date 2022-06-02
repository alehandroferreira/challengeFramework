import { app } from "../express";
import request from "supertest";

describe("E2E test for calcular", () => {
  it("", async () => {
    const response = await request(app).post("/calcular").send({
      numero: 10,
    });

    const primos = { primos: [2, 3, 5, 7] };
    const divisores = { divisores: [1, 2, 5, 10] };

    expect(response.status).toBe(200);
    expect(response.body.numero).toBe(10);
    expect(response.body.divisores).toStrictEqual(divisores);
    expect(response.body.primos).toStrictEqual(primos);
  });
});
