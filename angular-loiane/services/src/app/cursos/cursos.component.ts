import {Component, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  cursosServices: CursosService;

  cursos: string[] = [];

  constructor() {
    this.cursosServices = new CursosService();
  }
  ngOnInit(): void {
    this.cursos = this.cursosServices.getCursos();
  }

}
