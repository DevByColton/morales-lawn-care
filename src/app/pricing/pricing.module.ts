import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { PricingOverviewComponent } from './pricing-overview/pricing-overview.component';
import { CoreModule } from '../core/core.module';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { PricingDetailsComponent } from './pricing-details/pricing-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PricingComponent,
    PricingOverviewComponent,
    DisclaimerComponent,
    PricingDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule
  ],
  entryComponents: [
    PricingComponent
  ],
  exports: [
    PricingOverviewComponent
  ]
})
export class PricingModule { }
