import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-pricing-details',
  templateUrl: './pricing-details.component.html',
  styleUrls: ['./pricing-details.component.css']
})
export class PricingDetailsComponent implements OnInit {

  quaterAcrePrice = AppConstants.QUATER_ACRE_PRICE;
  halfAcrePrice = AppConstants.HALF_ACRE_PRICE;
  oneAcrePrice = AppConstants.ONE_ACRE_PRICE;

  constructor() { }

  ngOnInit() {
  }

}
