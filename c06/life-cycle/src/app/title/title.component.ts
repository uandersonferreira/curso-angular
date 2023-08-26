import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = "";


  constructor() {
    console.log("Constructor")
  }

  ngOnInit(): void {
    this.nome = `Olá ${this.nome}`
    console.log("ngOnInit()");
    /*
    Toda vez que o component nascer/for criado irá ser executado o
    method 'ngOnInit()' logo após o constructor.
   */
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }

}
