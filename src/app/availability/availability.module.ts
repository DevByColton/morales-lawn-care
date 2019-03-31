import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailabilityComponent } from './availability/availability.component';
import { AvailabilityOverviewComponent } from './availability-overview/availability-overview.component';
import { CoreModule } from '../core/core.module';
import { AvailabilityDetailsComponent } from './availability-details/availability-details.component';

@NgModule({
  declarations: [
    AvailabilityComponent,
    AvailabilityOverviewComponent,
    AvailabilityDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  entryComponents: [
    AvailabilityComponent
  ],
  exports: [
    AvailabilityOverviewComponent
  ]
})
export class AvailabilityModule { }
