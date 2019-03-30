import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryOverviewComponent } from './gallery-overview/gallery-overview.component';
import { GalleryCarouselComponent } from './gallery-carousel/gallery-carousel.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryOverviewComponent,
    GalleryCarouselComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  entryComponents: [
    GalleryComponent
  ],
  exports: [
    GalleryOverviewComponent
  ]
})
export class GalleryModule { }
