import {Component, OnDestroy, OnInit} from '@angular/core';
import {slideInOutAnimation} from '../../common/app.constsants';
import {User} from '../../common/security/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInOutAnimation]

})
export class HomeComponent implements OnInit, OnDestroy {

  currentUser = new User();

  constructor() {
    this.currentUser = new User();
  }

  ngOnInit() {
    console.log('Home component is been initialized');
  }

  ngOnDestroy(): void {
    console.log('Home component is been destroyed');
  }

  onSubmit(): void {
    alert('Press on F12 and see what is being printed out in console lorg');
    console.log('First Name ' + JSON.stringify(this.currentUser));

  }

}
