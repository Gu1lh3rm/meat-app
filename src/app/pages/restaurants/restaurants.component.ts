import { RestaurantService } from './../../services/restaurants/restaurants.service';
import { RestaurantModel } from './../../models/restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantModel[]

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.findAllRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    })
  }

}
