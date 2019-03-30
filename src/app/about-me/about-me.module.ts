import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeOverviewComponent } from './about-me-overview/about-me-overview.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AboutMeComponent, 
    AboutMeOverviewComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  entryComponents: [
    AboutMeComponent
  ], 
  exports: [
    AboutMeOverviewComponent
  ]
})
export class AboutMeModule { }
