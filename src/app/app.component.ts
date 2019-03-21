import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Morales Lawn Care';
  @Input() lat = 30.0268759;
  @Input() long = -97.8789529;
}
