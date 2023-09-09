import {Component, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements  OnInit{
  nomePortal: string;
  cursos: string[];//Informações dinâmicas devem ser implementadas no service

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'http://loiane.training';

    // *ngFor por debaixo dos panos
    // for (let i=0; i<this.cursos.length; i++){
    //   let curso = this.cursos[i];
    // }
    // var servico = new CursosService();
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit(): void {
  }
}
/*
{{ variavel }} -> Interpolação

INJENÇÃO DE DEPENDÊNCIA NO ANGULAR
  - E feita via construtor


 */
