import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private static loggedIn = false;
  private static users : User[] = [];
  private static loggedInUser: User;

  constructor(private route?: Router) {
  }

  setLoggedInUser(loggedInUser: User): void {
    LogInService.loggedInUser = loggedInUser;
  }

  getLoggedInUser(): User {
    return LogInService.loggedInUser;
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

  check(user: User, pwd: string) {
    

    if (user.password == pwd) {
      LogInService.loggedIn = true;
      this.setLoggedInUser(user);
      this.route.navigate(['/home']);
    } 

    else {
     LogInService.loggedIn = false;
     this.route.navigate(['/login']);
    } 
  }

  addUser(newUser: User) {
    LogInService.users.push(newUser);
    LogInService.loggedIn = true;
    this.setLoggedInUser(newUser);
    this.route.navigate(['/home']);
  }

}
