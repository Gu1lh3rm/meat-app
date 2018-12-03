import { ErrorHandler } from './../erros/app.error-handler';
import { Http } from '@angular/http';
import { RestaurantModel } from './../../models/restaurant/restaurant.model';
import {API_CONFIG} from './../../config/api.config';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class RestaurantService {


  constructor(private http: Http){}

  findAllRestaurants(): Observable<RestaurantModel[]> {
      return this.http.get(`${API_CONFIG.baseUrl}${API_CONFIG.phatRestaurants}`)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }
}
