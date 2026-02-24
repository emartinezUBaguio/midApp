
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  // SECTION D: Two-Way Binding Properties
  // [(ngModel)] syncs the component property AND the input field
  // at the same time. Change one, the other updates automatically.
    i:number = 0;
    twoWayName: string = 'Change me!';
    selectedColor: string = '#2E75B6';
    rangeValue: number = 50;
    selectedOption: string = 'option1';
    user: User[] = [
      {
      id:1,
      name: 'John Doe',
      position: 'Developer',
      department: 'IT',
      role: 'Admin'
    },
  {
      id:2,
      name: 'Jane Smith',
      position: 'Designer',
      department: 'Creative',
      role: 'Editor'
    },
    {
      id:3,
      name: 'Alice Johnson',
      position: 'Manager',
      department: 'Management',
      role: 'Viewer'
    }];
}
