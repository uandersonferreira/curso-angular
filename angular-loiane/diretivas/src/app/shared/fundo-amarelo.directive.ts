import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private  _elementRef: ElementRef, private _renderer: Renderer2) {
    //console.log(_elementRef)
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );


    /*
      ElementRef - faz acesso diretamente ao dom o que pode trazer/deixar
        a aplicação vuneravel a ataques, para isso temos o Renderer2 como
        alternativa, mais segura

     */
  }


}
/*
    Marca a classe como uma diretiva: Quando você usa @Directive acima de
    uma classe, está informando ao Angular que a classe deve ser tratada
    como uma diretiva. Isso significa que você pode usá-la para definir o
    comportamento ou a aparência de elementos HTML em seus templates Angular.

    Especifica o seletor da diretiva: O @Directive permite que você defina
    o seletor da diretiva usando a propriedade selector dentro do decorador.
    O seletor é uma forma de dizer ao Angular em quais elementos HTML a
    diretiva deve ser aplicada. Por exemplo, se você definir
    selector: '[appFundoAmarelo]', a diretiva será aplicada a todos os
    elementos com o atributo appFundoAmarelo.

    Fornece um local para adicionar lógica personalizada: Embora o @Directive
    em si não execute nenhuma lógica, ele cria uma estrutura para que você
    possa adicionar métodos e propriedades personalizadas à classe diretiva.
    Isso permite que você adicione lógica específica para manipular
    os elementos DOM aos quais a diretiva é aplicada.

Em resumo, o @Directive é usado para criar diretivas personalizadas em Angular. Ele define o comportamento, o seletor e o escopo de uma diretiva e fornece um local para adicionar lógica personalizada que será executada quando a diretiva é aplicada a elementos HTML correspondentes em seus templates Angular.


ElementRef - Indica a Referência do elemento (tag) html
  selector: 'button[appFundoAmarelo]' - selector: 'nome-da-Tag[nome-do-Selector]
  - Restrigindo a funcionalidade para somente elemento(tag) do tipo
  especificado.



DICA: QUANDO NÃO SABEMOS A PROPRIEDADE, QUE QUEREMOS ALTERAR
FAÇA UM CONSOLE.LOG PARA DESCOBRIR.

 */


