import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouteConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-overview-header',
  templateUrl: './overview-header.component.html',
  styleUrls: ['./overview-header.component.css']
})
export class OverviewHeaderComponent implements OnInit {

  @Input() header: 'Header';
  @Input() icon: string;
  @Input() route: string;
  @Input() isClickable: false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Routes to page based on route input 
   */
  public routeToPage(): void {
    switch (this.route) {
      case RouteConstants.PRICING_ROUTE:
        this.router.navigate([RouteConstants.PRICING_ROUTE]);
        break;
      case RouteConstants.AVAILABILITY_ROUTE:
        this.router.navigate([RouteConstants.AVAILABILITY_ROUTE]);
        break;
      case RouteConstants.CONTACT_ME_ROUTE:
        this.router.navigate([RouteConstants.CONTACT_ME_ROUTE]);
        break;
      case RouteConstants.ABOUT_ME:
        this.router.navigate([RouteConstants.ABOUT_ME]);
        break;
    }
  }

}
