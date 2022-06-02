import {
  InputDivisorCalcularDto,
  OutputDivisorCalcularDto,
} from "./divisor.calcular.dto";

export default class DivisorCalcularUseCase {
  private inputDivisor: InputDivisorCalcularDto;

  constructor(inputDivisor: InputDivisorCalcularDto) {
    this.inputDivisor = inputDivisor;
  }

  async execute(
    input: InputDivisorCalcularDto
  ): Promise<OutputDivisorCalcularDto> {
    try {
      const divisores: number[] = new Array();
      for (let i = 1; i <= input.numero; i++) {
        if (input.numero % i == 0) {
          divisores.push(i);
        }
      }
      const result: OutputDivisorCalcularDto = {
        divisores,
      };
      return result;
    } catch (error) {
      throw new Error();
    }
  }
}
