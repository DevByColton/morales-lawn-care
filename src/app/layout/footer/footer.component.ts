import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mySite = AppConstants.APPLICATION_NAME;
  year = new Date();

  constructor() { }

  ngOnInit() {
  }

}
