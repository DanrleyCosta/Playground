import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ServCepService {

  constructor(private http: HttpClient) { }

  Cep(cep: string){
    cep = this.endereco.get('endereco.cep').value;

    cep =cep.replace(/\D/g,'');
    if(cep !== ''){
      cont validacep = /^[0-9]{8}$/;
    }
    if(validacep){
      this.http.get('//viacep.com.br/ws/${cep}/json');
    }
  }
}
