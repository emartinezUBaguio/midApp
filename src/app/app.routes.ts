import { Routes } from '@angular/router';
import { Home } from './comps/home/home';
import { Interpolation } from './databinding/interpolation/interpolation';
import { PropertyBinding } from './databinding/property-binding/property-binding';
import { EventBinding } from './databinding/event-binding/event-binding';
import { TwoWayBinding } from './databinding/two-way-binding/two-way-binding';
import { AttributeBinding } from './databinding/attribute-binding/attribute-binding';
import { ClassBinding } from './databinding/class-binding/class-binding';
import { StyleBinding } from './databinding/style-binding/style-binding';
import { Userprofile } from './user/userprofile/userprofile';
import { Userlist } from './user/userlist/userlist';
import { Guards } from './routing/guards/guards';
import { Nested } from './routing/nested/nested';
import { Params } from './routing/params/params';
import { Usertransactions } from './user/usertransactions/usertransactions';
export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'interpolation', component: Interpolation},
  { path: 'property-binding', component: PropertyBinding},
  { path: 'event-binding', component: EventBinding},
  { path: 'two-way', component: TwoWayBinding},
  { path: 'attribute', component: AttributeBinding},
  { path: 'class', component: ClassBinding},
  { path: 'style', component: StyleBinding},
  { path: 'userlist/id',
    component: Userlist,
      children:[
        { path: 'records', component: Usertransactions},
        { path: 'user', component: Userprofile},
      ]
  },
  { path: 'list', component: Userlist},
  { path: 'guards', component: Guards},
  { path: 'nested', component: Nested},
  { path: 'params', component: Params},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
