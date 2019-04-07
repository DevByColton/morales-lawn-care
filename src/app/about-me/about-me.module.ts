import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutMeOverviewComponent } from './about-me-overview/about-me-overview.component';
import { CoreModule } from '../core/core.module';
import { AboutMeDetailsComponent } from './about-me-details/about-me-details.component';
import { AboutMeTextComponent } from './about-me-text/about-me-text.component';

@NgModule({
  declarations: [
    AboutMeComponent, 
    AboutMeOverviewComponent, AboutMeDetailsComponent, AboutMeTextComponent
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
