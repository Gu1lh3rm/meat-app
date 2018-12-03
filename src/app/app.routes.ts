import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import {Routes} from '@angular/router'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent}
]
