import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})

export class Button {
  buttonText: string = 'Acessar Angular ';

  @Input() label:string = "";

  getAlert(num: number){
    alert("Olá "+num)
  }

}//class Button

/*
1° - CRIAR o component.ts, .html, .css
2° - IMPORTAR E DECLARAR NO MODULE (@NgModule)
        No app.module.ts ROOT devemos importar a nossa class criada no nosso
        novo component.ts dentro do bloco do @NgModule -> declarations: [] , separado por virgula.
3° - Adicionamos o novo selector (nova tag) ao nosso app.component.html ROOT


 */
