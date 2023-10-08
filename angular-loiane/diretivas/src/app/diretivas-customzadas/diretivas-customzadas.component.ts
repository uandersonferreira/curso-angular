import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-customzadas',
  templateUrl: './diretivas-customzadas.component.html',
  styleUrls: ['./diretivas-customzadas.component.css']
})
export class DiretivasCustomzadasComponent {
  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
