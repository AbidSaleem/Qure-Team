import {Component, OnDestroy, OnInit} from '@angular/core';
import {slideInOutAnimation} from '../../common/app.constsants';
import {Subscription} from 'rxjs';
import {AuthenticationService, UserService} from '../../common/services';
import {first} from 'rxjs/operators';
import {User} from '../../common/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [slideInOutAnimation]

})
export class HomeComponent implements OnInit, OnDestroy {
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {

    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
