import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-pricing-overview',
  templateUrl: './pricing-overview.component.html',
  styleUrls: ['./pricing-overview.component.css']
})
export class PricingOverviewComponent implements OnInit {

  appName = AppConstants.APPLICATION_NAME;

  constructor() { }

  ngOnInit() {
  }

}
