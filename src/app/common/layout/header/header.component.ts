import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {LogInService} from '../../security/services/log-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LogInService, private route: Router) {
  }

  ngOnInit() {
  }

  doLogout(): void {
    this.loginService.doLogout();

    this.route.navigate(['/home']);
  }

}
