import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';



@NgModule({//criando um modulo de funcionalidade
  declarations: [
    //Os components declaros aqui se tornam públicos para os
    //componets de outros modulos, já os outro components
    //são privados, portanto só podem ser usados dentro do
    //modulo que pertecem
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule//fornecer acesso a diretivas comuns e outros recursos úteis que são amplamente usados em componentes
  ],
  exports:[
    CursosComponent
  ]
})
export class CursosModule { }
/*
modulos de funcionalidade (modulos locais) - criado
afim de não lotar o modulo raiz com as classes criadas.
possibilitando uma organização mais eficiente no decorrer
do crescimento do projeto em que estamos desenvolvendo;
- ngModule

exports: Informa ao angular quais anotações,
Componentes, diretivas e pipes do modulo queremos
expôr para os outros modulos.

Em Angular, um "módulo de funcionalidade" é uma unidade organizacional
que agrupa componentes, diretivas, serviços e outros recursos
relacionados a uma determinada funcionalidade ou recurso específico
dentro de um aplicativo maior. Essa abordagem é útil para modularizar
seu aplicativo e organizar o código de forma mais clara e manutenível.
Os módulos de funcionalidade são uma parte fundamental da arquitetura
de um aplicativo Angular e ajudam a separar e isolar diferentes partes
do código.
 */
