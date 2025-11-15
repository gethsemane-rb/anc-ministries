import { Routes } from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutUsComponent} from './components/pages/about-us/about-us.component';
import {LiveComponent} from './components/pages/live/live.component';
import {LocationComponent} from './components/pages/location/location.component';
import {OfferingsComponent} from './components/pages/offerings/offerings.component';





export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'live', component: LiveComponent },
  { path: 'location', component: LocationComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'give', component: OfferingsComponent },
];
