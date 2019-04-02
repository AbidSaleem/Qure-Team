import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  private loginSignUp: string = "Sign Up";
  private link: string = "login";

  constructor() {
    this.loginSignUp = "Sign Up";
    this.link = "signUp";
  }
  
  ngOnInit() {
  }

  toggle() {
    if(this.loginSignUp == "Sign Up") {
      this.loginSignUp = "Login";
      this.link = "login"
    }

    else {
      this.loginSignUp = "Sign Up";
      this.link = "signUp";
    }
  }

}
