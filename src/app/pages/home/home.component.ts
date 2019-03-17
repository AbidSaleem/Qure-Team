import {Component, OnInit} from '@angular/core';
import {slideInOutAnimation} from '../../common/app.constsants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInOutAnimation]

})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
