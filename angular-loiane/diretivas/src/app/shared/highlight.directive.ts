import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @HostListener('mouseenter') onMouserOver(){//Disparado pela tag html
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string; //caso não necessite de manipulação entra

  @Input('appHighlight') defaultColor: string = 'white';
  /*
  o angular conseguir identificar que o nome da diretiva e propriedades são os mesmo
  é então no html fazer a associação as duas sem dar erro.
  deizando de ser necessaŕio declarar o nome da diretiva mais os dos propertyBinding
  ex:
  -<p appHighlight [appHighlight]="'grey'" [highLightColor]="'red'">
  - <p [appHighlight]="'grey'" [highLightColor]="'red'">

  */
 // @Input() defaultColor: string = 'white';
 @Input() highLightColor: string = 'yellow';


  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

}
