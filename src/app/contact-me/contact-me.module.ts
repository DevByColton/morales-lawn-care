import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContactMeOverviewComponent } from './contact-me-overview/contact-me-overview.component';
import { CoreModule } from '../core/core.module';
import { ContactMeDetailsComponent } from './contact-me-details/contact-me-details.component';

@NgModule({
  declarations: [
    ContactMeComponent,
    ContactMeOverviewComponent,
    ContactMeDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  entryComponents: [
    ContactMeComponent
  ],
  exports: [
    ContactMeOverviewComponent
  ]
})
export class ContactMeModule { }
