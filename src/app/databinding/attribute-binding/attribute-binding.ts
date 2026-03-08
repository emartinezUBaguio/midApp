import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
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
employee: Employee[] = []

}
