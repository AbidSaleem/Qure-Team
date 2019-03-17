import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  loggedIn = false;

  constructor() {
  }

  getLoggedIn(): boolean {
    return this.loggedIn;
  }

  doLogout(): void {
    this.loggedIn = false;
  }

  check(name: string, pwd: string) {
    if (name === 'admin' && pwd === 'admin') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    return this.loggedIn;

  }
}
