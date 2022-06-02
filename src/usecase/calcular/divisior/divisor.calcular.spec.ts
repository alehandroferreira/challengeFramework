import {
  InputDivisorCalcularDto,
  OutputDivisorCalcularDto,
} from "./divisor.calcular.dto";
import DivisorCalcularUseCase from "./divisor.calcular.usecase";

describe("Unit test divisor calcular", () => {
  it("Valid divisores", async () => {
    const input: InputDivisorCalcularDto = { numero: 45 };
    const usecase = new DivisorCalcularUseCase(input);
    const usecaseResponse = await usecase.execute(input);
    const outPutExpect: OutputDivisorCalcularDto = {
      divisores: [1, 3, 5, 9, 15, 45],
    };

    expect(usecaseResponse).toEqual(outPutExpect);
  });
});
