import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryOverviewComponent } from './gallery-overview/gallery-overview.component';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryOverviewComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    GalleryComponent
  ],
  exports: [
    GalleryOverviewComponent
  ]
})
export class GalleryModule { }
