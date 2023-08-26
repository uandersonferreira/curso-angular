import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})

export class CheckSampleComponent implements OnInit, DoCheck,
  AfterContentChecked, AfterViewChecked,
  AfterViewInit, AfterContentInit, OnDestroy {

  quantidade: number = 0;

  constructor() {
  }

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  // checked -> content -> view
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  //Executa apenas 1vez, Quando o primeiro conteúdo é inicializado
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  //Executa apenas 1vez , Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  //Toda vez, Após alguma alteração verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  //Toda vez, Após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy -> GoodBye my friend :(")
  }



}

/*
Toda vez que ocorre uma mundança será executado o:

ngDoCheck -> ngAfterContentChecked -> ngAfterViewChecked

 */
