import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyStatementComponent } from './my-statement/my-statement.component';
import { PricingModule } from '../pricing/pricing.module';
import { AvailabilityModule } from '../availability/availability.module';
import { ContactMeModule } from '../contact-me/contact-me.module';
import { GalleryModule } from '../gallery/gallery.module';
import { MyEquipmentModule } from '../my-equipment/my-equipment.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    HomeComponent,
    MyStatementComponent
  ],
  imports: [
    CommonModule,
    PricingModule,
    AvailabilityModule,
    ContactMeModule,
    GalleryModule,
    MyEquipmentModule,
    CoreModule
  ],
  entryComponents: [
    HomeComponent
  ]
})
export class HomeModule { }
