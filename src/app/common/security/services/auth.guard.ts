import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LogInService } from './log-in.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loggedIn:LogInService, private router:Router) {

  }

  canActivate() : boolean {
    
    if(this.loggedIn.getLoggedIn()) {
      return true;
    }

    else {
      this.router.navigate(['/login']);
      return false;
    }

  }
  
}
