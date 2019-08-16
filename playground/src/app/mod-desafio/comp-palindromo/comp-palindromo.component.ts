import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';


import { ServPalindromoService } from '../services';
import { ServCepService } from '../services'

@Component({
  selector: 'app-comp-palindromo',
  templateUrl: './comp-palindromo.component.html',
  styleUrls: ['./comp-palindromo.component.css']
})
export class CompPalindromoComponent implements OnInit {


  infoPalindromo = {
    palindromo: '',
    auxiliar: ''

  }

  constructor(private palidromoService: ServPalindromoService, private http: HttpClient) { }

  ngOnInit() {     
    
   }
  /**
   * resetar o valor para zero
   */
  Limpar(): any {
    this.infoPalindromo.palindromo = '';
  }
  /**
   * Faz o tratamento do separador decimal e retorna os valores a serem exibidos na tela   * 
   * @param string numAtual
   * @param string numConcat
   * @return any
   */
  tratarNumero(){
    
    this.infoPalindromo.auxiliar = this.infoPalindromo.palindromo.replace('.', '');
    this.infoPalindromo.auxiliar = this.palidromoService.comparaPalindromo(this.infoPalindromo.auxiliar);
  } 
  display(myForm): any{
    var list = document.querySelector('ul');
    var html = '';
    for (let item of myForm){
      html +=`<li>${item}</li>`;
    }
    list.innerHTML = html;
  }   
}
