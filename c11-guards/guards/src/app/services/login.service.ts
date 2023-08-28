import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  doLogin(){
    localStorage.setItem('token', 'xyz27082023')
  }

  doLogout(){
    localStorage.clear()
  }

}//class
