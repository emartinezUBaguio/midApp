import { Component } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-attribute-binding',
  imports: [],
  templateUrl: './attribute-binding.html',
  styleUrl: './attribute-binding.css',
})
export class AttributeBinding {
columnSpan: number = 2;
itemName: string = 'Siopao';
isMenuOpen: boolean = true;
isButtonDisabled: boolean = false;
buttonStatus: string='Enabled'
isDisabled: boolean = false;
circleCx: number = 50;
circleCy: number = 50;
circleR: number = 40;
userId: number = 123;
userRole: string = 'admin';
user: User[] = [{
  id: 1,
  name: 'John Doe',
  position: 'Developer',
  department: 'IT',
  role: 'Admin'

},
{
  id: 2,
  name: 'Jane Smith',
  position: 'Designer',
  department: 'Creative',
  role: 'Editor'
},
{
  id: 3,
  name: 'Alice Johnson',
  position: 'Manager',
  department: 'Management',
  role: 'Viewer'
}
];
}
