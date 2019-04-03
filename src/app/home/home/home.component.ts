import { Component, OnInit } from '@angular/core';
import { RouteConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pricingRoute = RouteConstants.PRICING_ROUTE;
  availabilityRoute = RouteConstants.AVAILABILITY_ROUTE;
  contactMeRoute = RouteConstants.CONTACT_ME_ROUTE;
  aboutMeRoute = RouteConstants.ABOUT_ME;

  constructor() { }

  ngOnInit() {
  }
}
