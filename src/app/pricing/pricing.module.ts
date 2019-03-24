import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { PricingOverviewComponent } from './pricing-overview/pricing-overview.component';

@NgModule({
  declarations: [
    PricingComponent,
    PricingOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    PricingComponent
  ],
  exports: [
    PricingOverviewComponent
  ]
})
export class PricingModule { }
