import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-contact-me-overview',
  templateUrl: './contact-me-overview.component.html',
  styleUrls: ['./contact-me-overview.component.css']
})
export class ContactMeOverviewComponent implements OnInit {

  email = AppConstants.DEV_EMAIL;

  constructor() { }

  ngOnInit() {
  }

}
