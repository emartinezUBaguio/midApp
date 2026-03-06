import { Component } from '@angular/core';
import { Employee } from '../../data/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-binding',
  imports: [FormsModule],
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
employeeId: number = 123;
employeeRole: string = 'admin';
employee: Employee[] = [{
  id: 1,
  firstname: 'John',
  lastname: 'Doe',
  email: 'John@Doe.com',
  position: 'Developer',
  department: 'IT',
  role: 'Admin',

},
{
  id: 2,
  firstname: 'Jane',
  lastname:'Smith',
  email: 'Jane@Smith.com',
  position: 'Designer',
  department: 'Creative',
  role: 'Editor',
},
{
  id: 3,
  firstname: 'Alice',
  lastname: 'Johnson',
  email: 'Alice@Johnson.com',
  position: 'Manager',
  department: 'Management',
  role: 'Viewer'
}
];
}
