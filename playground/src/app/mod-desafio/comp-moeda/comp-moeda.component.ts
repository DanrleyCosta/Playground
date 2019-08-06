import { Component, OnInit } from '@angular/core';

import { ServMoedasService } from '../services'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-comp-moeda',
  templateUrl: './comp-moeda.component.html',
  styleUrls: ['./comp-moeda.component.css']
})
export class CompMoedaComponent implements OnInit {

private valor: number;
private boolean: any;

  constructor(private serviceNotas: ServMoedasService) { }

  ngOnInit() {
  }
   /**
   * resetar o valor para zero
   */
  Limpar(): any {
    this.valor = 0;
  }
  /**
   * O metodo faz o tratamento do valor caso seja menor igual ao mesmo.
   * @param valorCompra number
   * @param valorPago number
   * @returns void
   */
  tratarValor(valorCompra: number, valorPago: number): any {
    var str;
    if (valorPago < valorCompra) {
      this.boolean = false;
    }
    else if (valorPago == valorCompra) {
      this.boolean = false;
    }
    else{this.boolean=true;}
  }
  executar(valorCompra: number, valorPago: number): any{
    if(this.boolean){
    var troco = this.serviceNotas.valorTroco(valorCompra,valorPago);
    var resposta = this.serviceNotas.contarNotas(troco);
    }
    var eachProduct = 
    {
        "modelo": name,
        "id": Number,
        "ano de fabricação":Number,
        "quantidade de portas":Number,
        "Marca":name,
        "Texto":Text
    };


  }

}
