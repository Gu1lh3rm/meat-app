import { RestaurantService } from './../../services/restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from '../../models/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: RestaurantModel;

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.findRestaurantById(this.route.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant)
  }

}
