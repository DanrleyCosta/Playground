import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompPalindromoComponent } from './comp-palindromo';
import { CompMoedaComponent } from './comp-moeda/comp-moeda.component';
import { ServPalindromoService } from './services';
import { ServMoedasService } from './services/serv-moedas.service';
import { ServCepService } from './services/serv-cep.service';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    CompPalindromoComponent,
    CompMoedaComponent    
  ],
  exports: [
    CompPalindromoComponent,
    CompMoedaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServPalindromoService,
    ServMoedasService,
    ServCepService
  ]
})
export class ModDesafioModule { }
