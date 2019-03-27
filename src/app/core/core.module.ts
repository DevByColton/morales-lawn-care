import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OverviewHeaderComponent } from './components/overview-header/overview-header.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    OverviewHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    PageNotFoundComponent,
    OverviewHeaderComponent
  ]
})
export class CoreModule { }
