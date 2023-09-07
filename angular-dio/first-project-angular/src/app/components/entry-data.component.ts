import {Component} from "@angular/core";


@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css']

})

export class EntryDataComponent{
  placeHolder: string = "email";
  placepass:string = "password";
  color:string = "red" //Style Binding

}
