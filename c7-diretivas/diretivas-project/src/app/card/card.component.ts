import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  produtos: string[] = [];
  menyType: string = "superuser";
  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ];
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push("Cpu");
  }

  remover(index: number){
    this.produtos.splice(index,1)
    //Apartir do index, delete QTD elementos da lista
  }


}//class