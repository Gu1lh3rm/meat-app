import { RestaurantModel } from './../../../models/restaurant/restaurant.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: RestaurantModel[];

  constructor() { }

  ngOnInit() {
  }

}
