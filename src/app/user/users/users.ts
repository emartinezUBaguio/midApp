import { mockemployee } from '../../data/employee';


// users/users.component.ts
// Lists all users in a styled table.
// Uses [(ngModel)] two-way binding for live search filtering.
// Contains a nested <router-outlet> for UserDetails to render below the table.

import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule }              from '@angular/forms';
import { CommonModule }             from '@angular/common';
import { Employee }                     from '../../data/employee';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, CommonModule],
  templateUrl: 'users.html',
  styleUrl: 'users.css',
})
export class UsersComponent {
  searchTerm = '';      // 🔁 Two-way bound to search input
  employees: Employee[] = mockemployee;

  // Filters users live as searchTerm changes
  get filteredEmployees(): Employee[] {
    const term = this.searchTerm.toLowerCase();
    return this.employees.filter(e =>
      e.firstname.toLowerCase().includes(term)  ||
      e.lastname.toLowerCase().includes(term)   ||
      e.department.toLowerCase().includes(term) ||
      e.role.toLowerCase().includes(term)
    );
  }
}
