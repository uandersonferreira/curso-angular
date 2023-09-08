import { Component } from "@angular/core";

@Component({
  //Declaração de Metadados
  selector: 'meu-primeiro-component',//tag html que será criada para esse component
  template: `
    <p>Meu primeiro component com angular! :) </p>
  `
})
export class MeuPrimeiroComponent{

}
/*
@Component é um decorator do angular basicamente o
           mesmo qeu as anotações do spring.
           e dentro dele é declarados os metadados


export -> para exportar/expor a class para os outros component
através da declara do modulo ao qual pertecem.

PASSO A PASSO DE CRIAÇÃO:
1. CRIAR UMA CLASSE QUE SERÁ O @COMPONENT DO ANGULAR
2. DEFINIR O EXPORT PARA QUE SEJA VISTO/A PELOS DEMAIS
   ARQUIVOS.TS NO GERAL
3. NO ARQUIVO DE MODULE.TS(APP.MODULE.TS) DECLARAR O COMPONENT
   PARA CONSEGUIR UTILIZAR O METADADO 'SELECTOR'QUE DEFINE O NOME
   DA TAG HTML CUSTOMIZADA CRIADA.
4. APÓS ISSO PODE SER UTILIZAR A TAG NO ARQUIVO .HTML

OBS: SE DER ERRO VERIFICAR SE UM COMPONENT PERTENCE AO
MODULO OU SE NÃO ESQUECEMOS DE DECLARA-LÓ/IMPORT CORRETAMENTE.


*/
