import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-contact-me-details',
  templateUrl: './contact-me-details.component.html',
  styleUrls: ['./contact-me-details.component.css']
})
export class ContactMeDetailsComponent implements OnInit {

  email = AppConstants.DEV_EMAIL;

  constructor() { }

  ngOnInit() {
  }

}
