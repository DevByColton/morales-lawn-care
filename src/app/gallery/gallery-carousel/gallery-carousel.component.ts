import { Component, OnInit } from '@angular/core';
import { CarouselImage } from 'src/app/core/model/carousel-image.model';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.css']
})
export class GalleryCarouselComponent implements OnInit {

  carouselImages: CarouselImage[] = [
    new CarouselImage('../../../assets/bluebonnet.jpeg', 'Blue Bonnets'),
    new CarouselImage('../../../assets/bushes.jpeg', 'Bushes'),
    new CarouselImage('../../../assets/cactus.jpeg', 'Cacuts'),
    new CarouselImage('../../../assets/trees.jpeg', 'Trees')
  ];

  constructor() { }

  ngOnInit() {
  }

}
