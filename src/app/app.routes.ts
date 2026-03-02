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
import { Users } from './user/users/users'
import { Guards } from './routing/guards/guards';
import { Params } from './routing/params/params';
import { Databinding } from './databinding/databinding/databinding';
import { Rhome } from './routing/rhome/rhome';
import { Userdetails } from './user/userdetails/userdetails';
import { Userposts } from './user/userposts/userposts';
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
  { path: 'rhome', component: Rhome,
    children:[
      { path: 'guards', component: Guards},
      { path: 'users', component: Users,
        children:[
          {
            path: ':id',
            component: Userdetails,
              children: [ // <-- Further nesting possible
                { path: 'profile', component: Userprofile},
                { path: 'posts', component: Userposts }
              ]
          },
        ]
      },
      { path: 'params', component: Params},
    ]
  },


  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
