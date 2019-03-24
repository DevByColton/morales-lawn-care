import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContactMeOverviewComponent } from './contact-me-overview/contact-me-overview.component';

@NgModule({
  declarations: [
    ContactMeComponent,
    ContactMeOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    ContactMeComponent
  ],
  exports: [
    ContactMeOverviewComponent
  ]
})
export class ContactMeModule { }
