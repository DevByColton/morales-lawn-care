import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailabilityComponent } from './availability/availability.component';
import { AvailabilityOverviewComponent } from './availability-overview/availability-overview.component';

@NgModule({
  declarations: [
    AvailabilityComponent,
    AvailabilityOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    AvailabilityComponent
  ],
  exports: [
    AvailabilityOverviewComponent
  ]
})
export class AvailabilityModule { }
