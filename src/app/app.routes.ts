import { Routes } from '@angular/router';
import { Home } from './comps/home/home';
import { Interpolation } from './databinding/interpolation/interpolation';
import { PropertyBinding } from './databinding/property-binding/property-binding';
import { EventBinding } from './databinding/event-binding/event-binding';
import { TwoWayBinding } from './databinding/two-way-binding/two-way-binding';
import { AttributeBinding } from './databinding/attribute-binding/attribute-binding';
import { ClassBinding } from './databinding/class-binding/class-binding';
import { StyleBinding } from './databinding/style-binding/style-binding';
import { UserProfileComponent } from './user/userprofile/userprofile';
import { UsersComponent } from './user/users/users';
import { Databinding } from './databinding/databinding/databinding';

import { UserDetailsComponent } from './user/userdetails/userdetails';

import { authGuard } from './guards/auth.guard';
import { UserPosts } from './user/userposts/userposts';
export const routes: Routes = [

  { path: 'data-binding', component: Databinding,
    children:[
      { path: 'home', component: Home},
      { path: 'interpolation', component: Interpolation},
      { path: 'property', component: PropertyBinding},
      { path: 'event', component: EventBinding},
      { path: 'two-way', component: TwoWayBinding},
      { path: 'attr', component: AttributeBinding},
      { path: 'class', component: ClassBinding},
      { path: 'style', component: StyleBinding},
    ]
  },
  { path: 'users', component: UsersComponent,// parent route: /users
    children:[
      { path: ':id', //parameterized: /user/1
        component: UserDetailsComponent,
        canActivate: [authGuard], //ptotects this and child routes
        children: [
        { path: 'posts', component: UserPosts},
        { path: 'profile', component: UserProfileComponent},
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        ]
      }
    ]
  },
  { path: '**', redirectTo: 'users' }  , // Wildcard fallback
];
