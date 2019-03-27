import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overview-header',
  templateUrl: './overview-header.component.html',
  styleUrls: ['./overview-header.component.css']
})
export class OverviewHeaderComponent implements OnInit {

  @Input() header = 'Header';

  constructor() { }

  ngOnInit() {
  }

}
