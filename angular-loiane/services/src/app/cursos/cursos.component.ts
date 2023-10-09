import {Component, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  // cursosServices: CursosService;

  cursos: string[] = [];

  constructor(private cursosServices: CursosService) {
    // this.cursosServices = new CursosService();
    // this.cursosServices = _cursosServices;
  }
  ngOnInit(): void {
    this.cursos = this.cursosServices.getCursos();
  }

}
