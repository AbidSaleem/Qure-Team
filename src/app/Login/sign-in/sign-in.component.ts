import { Component, OnInit } from '@angular/core';
import { LogInService } from 'src/app/logIn-service/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private logInSrv: LogInService, private route:Router) {

  }

  ngOnInit() {
  }

  check(user: string, pwd: string) : boolean{
    if(this.logInSrv.check(user, pwd)) {
      this.route.navigate(['/home']);
    }

    else {
      return false;
    }

  }
}
