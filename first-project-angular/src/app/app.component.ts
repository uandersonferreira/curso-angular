import {Component, VERSION} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'First-project with Angular ' + VERSION.major;

  buttonLabel: string = "CARRINHO";
}
