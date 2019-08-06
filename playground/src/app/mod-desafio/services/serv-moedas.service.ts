/**
 * Este serviço se destina a executar as operações relacionadas a logica das notas em uma determina comprar
 * @author Danrley Costa
 * @since 1.0.0
 * @description Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que
 * alguém está pagando uma compra, escreva um algoritmo que mostre o número mínimo de
 * notas que o caixa deve fornecer como troco.
 * Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do
 * troco. Suponha que o sistema monetário não utilize moedas.
 * O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServMoedasService {

  constructor() { }
  /**
   * O metodo se destina a contar a quantidade de notas.
   * @param valor number
   * @returns arrNotas Array
   */
  contarNotas(valor: any): any {
    var Nota100, Nota10, Nota1, resto, resto2, resto3;
    if (valor >= 100) {
      Nota100 = valor / 100;
      valor = valor - Nota100 * 100;
    }
    else if (valor < 100) {
      Nota10 = valor / 10;
      valor = valor - Nota10 * 10;
    }
    else if (valor < 10) {
      Nota1 = valor;
    }
    var arrNotas = [Nota100, Nota10, Nota1];
    return arrNotas;
  }
  /**
   * O metodo se destina a retornar o valor do troco.
   * @param valorCompra number
   * @param valorPago number
   * @return troco any
   */
  valorTroco(valorCompra: number, valorPago: number): any {
    var troco = valorCompra - valorPago;
    return troco;
  }
}
