import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private logInService:LogInService, private router:Router) {

  }

  canActivate() : boolean {

    if(this.logInService.getLoggedIn()) {
      return true;
    }

    else {
      this.router.navigate(['/entry']);
      return false;
    }

  }
  
}