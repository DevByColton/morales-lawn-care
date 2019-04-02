import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PricingModule } from './pricing/pricing.module';
import { AvailabilityModule } from './availability/availability.module';
import { ContactMeModule } from './contact-me/contact-me.module';
import { AboutMeModule } from './about-me/about-me.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    CoreModule,
    HomeModule,
    PricingModule,
    AvailabilityModule,
    ContactMeModule,
    AboutMeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
