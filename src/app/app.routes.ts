import { Routes } from '@angular/router';
import { Home } from './comps/home/home';
import { Interpolation } from './databinding/interpolation/interpolation';
import { PropertyBinding } from './databinding/property-binding/property-binding';
import { EventBinding } from './databinding/event-binding/event-binding';
import { TwoWayBinding } from './databinding/two-way-binding/two-way-binding';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'interpolation', component: Interpolation},
  { path: 'property-binding', component: PropertyBinding},
  { path: 'event-binding', component: EventBinding},
  { path: 'two-way', component: TwoWayBinding}

];
