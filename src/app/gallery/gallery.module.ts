import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryOverviewComponent } from './gallery-overview/gallery-overview.component';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryOverviewComponent,
    GalleryCarouselComponent
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
