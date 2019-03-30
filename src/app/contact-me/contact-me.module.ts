import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContactMeOverviewComponent } from './contact-me-overview/contact-me-overview.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ContactMeComponent,
    ContactMeOverviewComponent
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
