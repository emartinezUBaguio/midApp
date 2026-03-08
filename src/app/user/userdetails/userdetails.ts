
// user-details/user-details.component.ts
// Reads the :id route parameter, finds the matching User from mock data,
// and displays their details. Provides navigation links to child routes.

import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import { FormsModule }                    from '@angular/forms';
import { CommonModule }                   from '@angular/common';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee-service';
@Component({
selector: 'app-user-details',
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css'
})
export class UserDetailsComponent implements OnInit {
  employeeId  = '';
       // The matched employee object
  employee: Employee|undefined;
  reviewNote = '';         // 🔁 Two-way bound reviewer note
  errorMessage = ''
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    //  Read :id from the URL and find the matching user
         // Child routes inherit parent params — we access :id from the parent snapshot
   const id = Number(this.route.snapshot.paramMap.get('id'));
  
   if (isNaN(id)) {
      this.errorMessage = 'Invalid user ID.';
      return;
    }

    // Fetch user from service using the ID
    this.employee = this.employeeService.getEmployeeById(id);

    if (!this.employee) {
      this.errorMessage = `Employee with ID ${id} not found.`;
    }
  }

  // ⬅️ Go back to list
  goBack(): void {
    this.router.navigate(['/employees']);
}
}
