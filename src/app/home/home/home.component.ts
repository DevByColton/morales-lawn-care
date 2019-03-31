import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideIn', [
      state('show', style({opacity: 1})),
      transition('* => *', animate('.55s ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(75px)', offset: 0}),
        style({opacity: 0.5, transform: 'translateY(45px)', offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1})
      ])))
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get showContent(): boolean {
     return true;
  }
}
