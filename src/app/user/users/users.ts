// users/users.component.ts
// Lists all users in a styled table.
// Uses [(ngModel)] two-way binding for live search filtering.
// Contains a nested <router-outlet> for UserDetails to render below the table.

import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule }              from '@angular/forms';
import { CommonModule }             from '@angular/common';
import { Employee }                     from '../../models/employee.model';
import { EmployeeService } from '../../services/employee-service';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: 'users.html',
  styleUrl: 'users.css',
})
export class UsersComponent implements OnInit{

employees: Employee[] =[];
returnUrl: string | null = null;
searchPlaceholder:string="Search by name, department, or role..."
selectedId:number|null =null;

constructor(
  private employeeService: EmployeeService,
  private route: ActivatedRoute,
  private router: Router
){}

ngOnInit(): void {
  this.employees = this.employeeService.getEmployees();
 
}

getEmployee(e:Employee): void {
  this.selectedId = e.id;
  this.router.navigate(['/employees', e.id]);
}

login():void {
  this.employeeService.login();
  if (this.returnUrl) this.router.navigateByUrl (this.returnUrl);
}

badgeClass(role: string): object {
  return{
    'bg-danger': role === 'Admin',
    'bg-primary': role === 'Editor',
    'bg-secodary': role === 'Viewer'
  };
}

}



 /*  searchTerm = '';      // 🔁 Two-way bound to search input
  employees: Employee[] = mockemployee;

  // Filters users live as searchTerm changes
  get filteredEmployees(): Employee[] {
    const term = this.searchTerm.toLowerCase();
    return this.employees.filter(e =>
      e.firstname.toLowerCase().includes(term)  ||
      e.lastname.toLowerCase().includes(term)   ||
      e.department.toLowerCase().includes(term) ||
      e.role.toLowerCase().includes(term)
    ); */
  
