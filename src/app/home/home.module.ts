import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PricingModule } from '../pricing/pricing.module';
import { AvailabilityModule } from '../availability/availability.module';
import { ContactMeModule } from '../contact-me/contact-me.module';
import { CoreModule } from '../core/core.module';
import { AboutMeModule } from '../about-me/about-me.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PricingModule,
    AvailabilityModule,
    ContactMeModule,
    AboutMeModule,
    CoreModule
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule { }
