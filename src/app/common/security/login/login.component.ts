import {Component, OnInit} from '@angular/core';
import {LogInService} from 'src/app/common/security/services/log-in.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logInSrv: LogInService, private route: Router) {

  }

  ngOnInit() {
  }

  check(user: string, pwd: string): boolean {
    if (this.logInSrv.check(user, pwd)) {
      this.route.navigate(['/home']);
    } else {
      return false;
    }

  }
}
