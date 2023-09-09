import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import {CursosModule} from "./cursos/cursos.module";

@NgModule({
  //metadados
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {//Modulo raiz da aplicação
}
/*
declarations:
  - E onde ficam todos: components, diretivas e pipes
  que queremos utilizar no modulo.

imports:
  - E onde declaramos os outros módulos que desejamos utilizar ou
  que são necessários para o funcionamento do módulo atual.

providers:
  - Os provedores são usados para configurar os serviços e
  injeções de dependência em um módulo. Isso significa que você
  declara quais serviços estarão disponíveis para injeção no escopo
  do módulo.

bootstrap(Inicialização):
  - E declarado somente no módulo raiz. E indica o componente
  que deve ser instanciado quando iniciamos a aplicação e irá servir como
  container da aplicação(ponto de entrada).
  - Componente principal do proejto 'AppComponent'(app-root)

SPA - SINGLE PAGE APPLICATION


 */
