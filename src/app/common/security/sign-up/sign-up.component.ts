import { Component, OnInit } from '@angular/core';
import {LogInService} from 'src/app/common/security/services/log-in.service';
import { User } from '../user'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private logInSrv:LogInService) { }

  ngOnInit() {
  }

  createUser(name:string, email:string, password:string): void {
    var newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = password;

    this.logInSrv.addUser(newUser);
  }
}