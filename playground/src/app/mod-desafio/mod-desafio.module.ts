import { ServMoedasService } from './services/serv-moedas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompPalindromoComponent } from './comp-palindromo';
import { ServPalindromoService } from './services';
import { CompMoedaComponent } from './comp-moeda/comp-moeda.component';
import { CompVeiculoComponent } from './comp-veiculo/comp-veiculo.component';


@NgModule({
  declarations: [
    CompPalindromoComponent,
    CompMoedaComponent,
    CompVeiculoComponent
  ],
  exports: [
    CompPalindromoComponent,
    CompMoedaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ServPalindromoService,
    ServMoedasService
  ]
})
export class ModDesafioModule { }
