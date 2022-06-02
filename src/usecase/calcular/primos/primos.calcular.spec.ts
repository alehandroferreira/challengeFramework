import {
  InputPrimosCalcularDto,
  OutputPrimosCalcularDto,
} from "./primos.calcular.dto";
import PrimosCalcularUseCase from "./primos.calcular.usecase";

describe("Unit test primos calcular", () => {
  it("Valid primos", async () => {
    const input: InputPrimosCalcularDto = { numero: 50 };
    const usecase = new PrimosCalcularUseCase(input);
    const usecaseResponse = await usecase.execute(input);
    const outPutExpect: OutputPrimosCalcularDto = {
      primos: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47],
    };

    expect(usecaseResponse).toEqual(outPutExpect);
  });
});
