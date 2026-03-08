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
import { Intro } from './databinding/intro/intro';
export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Data Binding
  { path: 'home', component: Home,
      children:[
      { path: 'intro', component: Intro},
      {path: 'db', component: Databinding},
      { path: 'interpolation', component: Interpolation},
      { path: 'property', component: PropertyBinding},
      { path: 'event', component: EventBinding},
      { path: 'two-way', component: TwoWayBinding},
      { path: 'attr', component: AttributeBinding},
      { path: 'class', component: ClassBinding},
      { path: 'style', component: StyleBinding},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
  // Employees
  {
    path: 'employees',
    component: UsersComponent,
    children:[
     {
      // level 2 employees: /employees/id/
        path: ':id',
        children: [
          { path: 'details', component: UserDetailsComponent},
          { path: 'posts', component: UserPosts},
          { path: 'profile', component: UserProfileComponent},
        ]
      },
      
    ]
  },
  { path: '**', redirectTo: 'home' }  // Wildcard fallback
  
  
  // parent route: /users
 //parameterized: /user/1
  
 
    
      
   
    
 
  
];
