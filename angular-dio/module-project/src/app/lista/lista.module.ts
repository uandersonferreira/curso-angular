import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ListViewComponent } from './list-view/list-view.component';



@NgModule({
  declarations: [
    InputComponent,
    ListViewComponent
  ],

  exports: [
    InputComponent,
    ListViewComponent
    /*
    Tudo que o ListaModule está sendo exportado,
    será visivel em outros lugares que importar 'ListaModule'.
    Portanto, conseguiremos utilizar em outros modulos.
     */
  ],

  imports: [
    CommonModule
  ]
})
export class ListaModule { }
