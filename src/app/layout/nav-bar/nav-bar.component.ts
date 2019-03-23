import { Component, OnInit } from '@angular/core';
import { NavBarItem } from 'src/app/core/model/nav-bar-item.model';
import { RouteConstants, AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  appName = AppConstants.APPLICATION_NAME;
  navBarItems: NavBarItem[] = [
    new NavBarItem('Pricing', RouteConstants.PRICING_ROUTE, 'fas fa-dollar-sign'),
    new NavBarItem('My Equipment', RouteConstants.MY_EQUIPMENT, 'fas fa-truck-pickup'),
    new NavBarItem('Contact Me', RouteConstants.CONTACT_ME, 'fas fa-mobile-alt')
  ];

  constructor() { }

  ngOnInit() {
  }

}
