import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private static loggedIn = false;
  private static users : User[] = [];

  constructor(private route: Router) {
  }

  getLoggedIn(): boolean {
    return LogInService.loggedIn;
  }

  getUsers(): User[] {
    return LogInService.users;
  }

  doLogout(): void {
    LogInService.loggedIn = false;
    this.route.navigate(['/entry']);
  }

  check(pwd1: string, pwd2: string) {
    

    if (pwd1 == pwd2) {
      LogInService.loggedIn = true;
      this.route.navigate(['/home']);
    } 

    else {
     LogInService.loggedIn = false;
     this.route.navigate(['/login']);
    } 
  }

  addUser(newUser: User) {
    LogInService.users.push(newUser);
    console.log(LogInService.users[0].name);
    LogInService.loggedIn = true;
    this.route.navigate(['/home']);
  }
}
