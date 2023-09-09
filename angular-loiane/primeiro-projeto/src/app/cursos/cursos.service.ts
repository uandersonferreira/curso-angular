import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  //http
  constructor() {}
  getCursos(){
    return['Java', 'Ext JS', 'Angular'];
  }

}//class
/*
Pode ser vista como o @Service do spring, pois é
a Classe onde irá ficar a lógica/regra de negócio do serviço.
Separando do @Componente todos os dados dinâmicos que são necessários

component(.component) -> service(service.ts) -> repository


 */
