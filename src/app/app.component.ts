import {Component, OnInit} from '@angular/core';
import {LogInService} from './common/security/services/log-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private loginService: LogInService) {
  }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return true; // this.loginService.getLoggedIn();
  }
}
