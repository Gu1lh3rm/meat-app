import { MenuItemModel } from './../../../models/restaurant/menu-item.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestaurantService } from '../../../services/restaurants/restaurants.service';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItemModel[]>;

  constructor(private restaurantServices:RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantServices.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItemModel) {
    console.log(item);
  }

}
