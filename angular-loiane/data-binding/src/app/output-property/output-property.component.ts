import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit{

  @Input()
  valor: number = 0;

  incrementa(){
    this.valor++
  }

  decrementa(){
    this.valor--
    if(this.valor < 0){
      this.valor = 0;
    }
  }


  constructor(){}
  ngOnInit(): void {}


}//class
