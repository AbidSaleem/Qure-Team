import { Component, OnInit } from '@angular/core';
import { LogInService } from 'src/app/common/security/services/log-in.service';

@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.component.html',
  styleUrls: ['./free-trial.component.css']
})


export class FreeTrialComponent implements OnInit {

  private name:string = this.loginSvc.getLoggedInUser().name;
  private phone:string = this.loginSvc.getLoggedInUser().phoneNumber;
  private email:string = this.loginSvc.getLoggedInUser().email;
  private website:string = this.loginSvc.getLoggedInUser().website;

  constructor(private loginSvc: LogInService) { }

  ngOnInit() {
  }

  submit() {
    this.loginSvc.getLoggedInUser().name = this.name;
    this.loginSvc.getLoggedInUser().phoneNumber = this.phone;
    this.loginSvc.getLoggedInUser().email = this.email;
    this.loginSvc.getLoggedInUser().website = this.website;

    console.log(this.loginSvc.getLoggedInUser().name);
  }
}