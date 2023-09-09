import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit{
  url: string = 'https://www.google.com/'
  cursoAngular: boolean = true;
  urlImagem: string = 'https://picsum.photos/seed/picsum/400/200'

  valorAtual = ''
  valorSalvo: string = ''

  isMouserOver: boolean = false;

  constructor() {}
  ngOnInit(): void {
  }

  getValor(){
    return 1
  }
  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!')
  }

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement> evento.target).value)
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouserOver = !this.isMouserOver;
  }

}//class

/*
======= DATA BINDING ========

TEMPLATE <---- COMPONENT (Valor do component para o template)
  - {{ valor }} - INTERPOLAÇÃO

  - [propriedade] = "valor" - PROPERTY BINDING
        - Usa-se colchetes <img [src] = "url-img" />
  - bind-propriedade = "valor" - PROPERTY BINDING QUE O ANGULAR FAZ POR DE BAIXO DOS PANOS
        - default <img bind-src = "url-img" />
  - Quando não existe uma propriedade no elemento, usa-se:
    [attr.colspan]

TEMPLATE ----> COMPONENT
  - (evento) = "handler"

TEMPLATE <----> COMPONENT (Bi-direcional)
  - [(ngModel)] = "propriedade" - TWO WAY DATA BINDING
    - Usa-se binding de eventos + propriedades


 */
