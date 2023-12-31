import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { TransformadorPipe } from './pipes/transformador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TransformadorPipe

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

//HttpClientModule - Informa ao module que irá Trabalhar com requisições http
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
