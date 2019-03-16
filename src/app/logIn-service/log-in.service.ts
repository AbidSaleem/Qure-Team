import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private name:string = 'admin';
  private pwd:string = 'admin';
  private loggedIn:boolean = false;

  constructor() { }

  getLoggedIn(): boolean {
    return this.loggedIn;
  }

  check(name:string, pwd:string) {
    if(name == this.name && pwd == this.pwd) {
      this.loggedIn = true;
      return true;
    }

    else {
      return false;
    }
  }
}
