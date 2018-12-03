import { Http } from '@angular/http';
import { RestaurantModel } from './../../models/restaurant/restaurant.model';
import {API_CONFIG} from './../../config/api.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()

export class RestaurantService {


  constructor(private http: Http){}

  findAllRestaurants(): Observable<RestaurantModel[]> {
      return this.http.get(`${API_CONFIG.baseUrl}/restaurants`)
      .map(response => response.json());
  }
}
