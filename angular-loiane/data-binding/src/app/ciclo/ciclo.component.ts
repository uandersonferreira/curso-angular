import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
//Seguindo as boas práticas e recomendandado implementar todas as interfaces que estavamos utilizando
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, AfterContentChecked, OnDestroy  {
    @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    //Executa apenas 1vez, Quando o primeiro conteúdo é inicializado
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    //Executa apenas 1vez , Depois da inicialização da view
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  log(hook: string) {
    console.log(hook)
  }

}//class
/*
#    EVENTO (HOOKS)          QUANDO ?

1° - ngOnChanges -> É executado antes do 'ngOnInit' e quando o valor do
                    property-binding é atualizado.

2° - ngOnInit -> QUANDO O COMPONENTE É INICIALIZADO
3° - ngDoCheck -> A CADA CICLO DE VERIFICAÇÃO DE MUDANÇAS
4° - ngAfterContentInit -> DEPOIS DE INSERIR CONTEÚDO EXTERNO NA VIEW
5° - ngAfterContentChecked -> A CADA VERIFICAÇÃO DE CONTEÚDO INSERIDO
6° - ngAfterViewChecked -> A CADA VERIFICAÇÃO DE CONTEÚDO / CONTEÚDO FILHO
7° - ngOnDestroy -> ANTES DA DIRETIVA/COMPONENT SER DESTRUÍDO

Toda vez que ocorre uma mundança será executado o:

  ngDoCheck -> ngAfterContentChecked -> ngAfterViewChecked

 */
