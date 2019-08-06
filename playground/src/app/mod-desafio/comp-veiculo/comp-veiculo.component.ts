import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comp-veiculo',
  templateUrl: './comp-veiculo.component.html',
  styleUrls: ['./comp-veiculo.component.css']
})
export class CompVeiculoComponent implements OnInit {

  automovel: FormGroup;

  constructor() { }

  ngOnInit() {
    this.automovel = new FormGroup({
      modelo: new FormControl(null),
      ano: new FormControl(null),
      quantidadePortas: new FormControl(null),
      marca:new FormControl(null),
      texto: new FormControl(null)
    })
  }

}
