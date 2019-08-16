/**
 * Este serviço se destina a executar as operações relacionadas a logica do numero palindromo
 * @author Danrley Costa
 * @since 1.0.0
 * @description Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para
 * direita tem o mesmo valor. Exemplo: 929, 44, 97379.
 * Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será
 * escolhido pelo usuário da aplicação.
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServPalindromoService {

  constructor() { }
  /**
   * Metodo que irá efetuar a inversão e efetuar a comparação.
   * @param valorMax string
   * @return arrayPalindromo any
   * 
   */
  comparaPalindromo(valorMax: String): any {

    let arrayPalindromo = '';
    let inverter, cont = 0;

    for (var i = 0; i < Number(valorMax); i++) {
      inverter = i;
      //  inversão atraves de uma Arrow function
      inverter = inverter => inverter.split().reverse().join();
      if (inverter === i || inverter < 10) {
        arrayPalindromo += i + " ";
        cont++;
      }
    }
    return arrayPalindromo;
  }
}
