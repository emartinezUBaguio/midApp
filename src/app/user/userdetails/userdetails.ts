import { Employee, mockemployee } from './../../data/employee';
// user-details/user-details.component.ts
// Reads the :id route parameter, finds the matching User from mock data,
// and displays their details. Provides navigation links to child routes.

import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import { FormsModule }                    from '@angular/forms';
import { CommonModule }                   from '@angular/common';

@Component({
selector: 'app-user-details',
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css'
})
export class UserDetailsComponent implements OnInit {
  employeeId  = '';
  employees: Employee[] = mockemployee;           // The matched employee object
  employee:Employee | undefined;
  reviewNote = '';         // 🔁 Two-way bound reviewer note

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 🔑 Read :id from the URL and find the matching user
    this.employeeId = this.route.snapshot.paramMap.get('id') ?? '';
    this.employee = this.employees.find(e => e.id === Number(this.employeeId)) as Employee;
  }
}
