import { Component, OnInit, HostListener } from '@angular/core';
import { NavBarItem } from 'src/app/core/model/nav-bar-item.model';
import { RouteConstants, AppConstants } from 'src/app/app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  /**
   * Listens for screen size to set navbar items zoom
   * @param event 
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth >= 992) {
      this.setScreenSizeBoolean();
    }
  }

  isSmallScreen = false;
  appName = AppConstants.APPLICATION_NAME;
  navBarItems: NavBarItem[] = [
    new NavBarItem('Pricing', RouteConstants.PRICING_ROUTE, 'fas fa-dollar-sign'),
    new NavBarItem('Availability', RouteConstants.AVAILABILITY_ROUTE, 'fas fa-calendar-alt'),
    new NavBarItem('Contact Me', RouteConstants.CONTACT_ME_ROUTE, 'fas fa-mobile-alt'),
    new NavBarItem('About Me', RouteConstants.ABOUT_ME, 'fas fa-user')
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    if (window.innerWidth >= 992) {
      this.setScreenSizeBoolean();
    }
  }

  /**
   * Routes to home for click on navbar brand
   */
  public routeHome(): void {
    this.router.navigate(['']);
  }

  /**
   * Sets screen size boolean
   */
  private setScreenSizeBoolean(): void {
    this.isSmallScreen = !this.isSmallScreen;
  }
}
