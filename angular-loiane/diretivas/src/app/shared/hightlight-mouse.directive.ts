import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHightlightMouse]'
})
export class HightlightMouseDirective {
  @HostListener('mouseenter') onMouserOver(){
/*      this._renderer.setStyle(
        this._elementRef.nativeElement,
        'background-color',
        'yellow'
      );*/
    this.backgroundColor = 'yellow'

  }

  @HostListener('mouseleave') onMouseLeave(){
/*    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );*/
    this.backgroundColor = 'white'
  }

  // @ts-ignore
  // @HostBinding('style.backgroundColor') backgroundColor: string; //caso não necessite de manipulação entra
  @HostBinding('style.backgroundColor') get setColor(){
    //código extra dentro dos methods get ou setters do ts caso necessite de
    //alguma manipulação antes de setar o valor
    return this.backgroundColor;
  }
  private backgroundColor!: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) {}

}
/*
@HostListener é um decorador em Angular que é usado para
escutar eventos em elementos do DOM host (ou elemento pai)
de um componente. Ele permite que você vincule um manipulador
de eventos a um elemento host para responder a eventos específicos,
como cliques, mouseovers, keypresses, entre outros.

@HostListener('document:keydown', ['$event'])
handleKeyboardEvent(event: KeyboardEvent) {
  // Manipule eventos de teclado aqui
}

Neste exemplo, temos o @HostListener que escuta o evento
'document:keydown'. A parte importante aqui é ['$event'].
Isso significa que quando o evento 'document:keydown' ocorrer,
a função handleKeyboardEvent será chamada e receberá um parâmetro
chamado $event, que conterá informações sobre o evento de teclado
que ocorreu.

O nome $event é apenas uma convenção comum, mas você poderia nomear
esse parâmetro como desejar. O importante é que esse nome
(neste caso, $event) corresponda ao que é especificado no array dentro
do @HostListener. Se você tivesse ['evento'], o nome do parâmetro
da função seria evento

O $event (ou qualquer nome que você escolher) conterá informações
detalhadas sobre o evento de teclado, como qual tecla foi pressionada,
a posição do cursor, etc. Você pode usar essas informações na função
handleKeyboardEvent para tomar decisões com base no evento de teclado
específico que ocorreu.

 */
