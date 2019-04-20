import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/services/authentication.service';
import { UserService } from 'src/app/common/services';
import { User } from 'src/app/common/models';


@Component({
  selector: 'app-free-trial',
  templateUrl: './free-trial.component.html',
  styleUrls: ['./free-trial.component.css']
})


export class FreeTrialComponent implements OnInit {

  
  private name:string = this.authenticationService.currentUserValue.username;
  private phone:string = this.authenticationService.currentUserValue.phoneNumber;
  private email:string= this.authenticationService.currentUserValue.email;
  private website:string= this.authenticationService.currentUserValue.website;
  private user : User;

  constructor(private authenticationService:AuthenticationService , 
    private userService: UserService) { }

  ngOnInit() {
  }

  submit() {
    this.authenticationService.currentUserValue.username = this.name;
    this.authenticationService.currentUserValue.phoneNumber = this.phone;
    this.authenticationService.currentUserValue.email = this.email;
    this.authenticationService.currentUserValue.website = this.website;
    this.user = this.authenticationService.currentUserValue;
    this.userService.update(this.user);

  }
}