import {Component, OnInit} from '@angular/core';
import {LogInService} from 'src/app/common/security/services/log-in.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logInSrv: LogInService) {

  }

  ngOnInit() {
  }

  logIn(email: string, pwd: string){
    var user:User;
    user = this.logInSrv.getUsers().filter(user => user.email == email)[0];
    this.logInSrv.check(user.password, pwd);
    
  }
}