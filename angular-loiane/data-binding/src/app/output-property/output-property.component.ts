import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit{

  @Input()
  valor: number = 0;
  @Output() mudouValor = new EventEmitter;

  // @ts-ignore
  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa(){
    console.log("INCREMENTO: "+this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    console.log("DECREMENTO: "+this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }


  constructor(){}
  ngOnInit(): void {}

}//class
