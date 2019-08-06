import { Component, OnInit, Input } from '@angular/core';

import { ServPalindromoService } from '../services';

@Component({
  selector: 'app-comp-palindromo',
  templateUrl: './comp-palindromo.component.html',
  styleUrls: ['./comp-palindromo.component.css']
})
export class CompPalindromoComponent implements OnInit {

  private valorMax: String;
  private numConcat: any;

  infoPalindromo = {
    valor: '0'
  }

  constructor(private palidromoService: ServPalindromoService) { }

  ngOnInit() {   
  }
  /**
   * resetar o valor para zero
   */
  Limpar(): any {
    this.valorMax = '0';
  }
  /**
   * Faz o tratamento do separador decimal e retorna os valores a serem exibidos na tela
   * 
   * @param string numAtual
   * @param string numConcat
   * @return any
   */
  tratarNumero(valorMax: string): any {
    this.numConcat = valorMax.replace('.', '');
    this.numConcat = this.palidromoService.comparaPalindromo(this.numConcat);  
    
  }
}
