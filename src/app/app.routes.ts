import { OrderComponent } from './pages/order/order.component';
import { ReviewsComponent } from './pages/restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './pages/restaurant-detail/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import {Routes} from '@angular/router'
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants-detail/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  },
  {path: 'order', component: OrderComponent}
]
