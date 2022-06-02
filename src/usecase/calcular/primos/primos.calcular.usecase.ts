import {
  InputPrimosCalcularDto,
  OutputPrimosCalcularDto,
} from "./primos.calcular.dto";

export default class PrimosCalcularUseCase {
  private inputPrimos: InputPrimosCalcularDto;

  constructor(inputPrimos: InputPrimosCalcularDto) {
    this.inputPrimos = inputPrimos;
  }

  async execute(
    input: InputPrimosCalcularDto
  ): Promise<OutputPrimosCalcularDto> {
    try {
      const primos: number[] = new Array();
      for (var i = 2; i < input.numero; i++) {
        if (await this.primeNumber(i)) {
          primos.push(i);
        }
      }

      const result: OutputPrimosCalcularDto = { primos };
      return result;
    } catch (error) {
      throw new Error();
    }
  }

  private async primeNumber(numero: number): Promise<boolean> {
    for (var divisor = 2; divisor < numero; divisor++)
      if (numero % divisor == 0) return false;
    return true;
  }
}
