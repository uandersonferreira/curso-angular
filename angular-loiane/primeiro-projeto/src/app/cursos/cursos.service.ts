import { Injectable } from '@angular/core';

@Injectable({//Ativa a injenção desse serviço em outros locais
  providedIn: 'root'
})
export class CursosService {
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

Injeção de Dependência (DI) - A mesma ideia que temos no spring boot

O decorator @Injectable é usado em Angular para marcar uma classe
como um provedor de serviço injetável. Isso significa que o Angular
pode criar uma instância dessa classe e fornecê-la automaticamente
para outros componentes ou serviços que dependam dele. Em outras
palavras, o @Injectable é usado para configurar a injeção de
dependência para uma classe que atua como um serviço.

 */
