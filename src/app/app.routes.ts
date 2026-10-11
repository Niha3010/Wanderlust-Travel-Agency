import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';
import { DestinationsList } from './destinations-list/destinations-list';
import { Bookings } from './bookings/bookings';
import { DestinationsDetails } from './destinations-list/destinations-details/destinations-details';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'about-us', component: AboutUs },
    { path: 'destinations', component: DestinationsList },
    { path: 'destinations/:id', component: DestinationsDetails },
    { path: 'bookings', component: Bookings },
];
