import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './../../../services/restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantServices:RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantServices.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
