import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model'
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private departments: Department[] = [
    { id: 1, name: 'Engineering',  description: 'Builds and maintains all products.',  location: 'New York',  budget: 500000 },
    { id: 2, name: 'Marketing',    description: 'Handles brand and campaigns.',         location: 'London',    budget: 200000 },
    { id: 3, name: 'HR',           description: 'Manages people and culture.',          location: 'Toronto',   budget: 150000 },
  ];
  
  private employees: Employee[] = [
    
  {
    id: 1,
    firstname: 'Alice',
    lastname: 'Santos',
    email: 'alice.santos@example.com',
    departmentId: 2,
    position: 'Senior Developer',
    role: 'admin',
    posts: [{
      id: 1,
      title: 'Getting Started with Angular 22',
      body: 'Angular 22 introduces powerful new routing APIs...',
      date: '2024-12-10'}
    ]
  },
  {
    id: 2,
    firstname: 'Bob',
    lastname: 'Reyes',
    email: 'bob.reyes@example.com',
    departmentId: 1,
    position: 'Marketing Analyst',
    role: 'user',
    posts: [{
      id: 2,
      title: 'Writing Clean Angular Templates',
      body: 'Best practices for readable and maintainable templates...',
      date: '2024-10-05' }
    ]
  },
  {
    id: 3,
    firstname: 'Charlie',
    lastname: 'Cruz',
    email: 'charlie.cruz@example.com',
    departmentId: 1,
    position: 'HR Coordinator',
    role: 'guest',
    posts: []
  },
  {
    id: 4,
    firstname: 'Diana',
    lastname: 'Lim',
    email: 'diana.lim@example.com',
    departmentId: 1,
    position: 'QA Engineer',
    role: 'user',
    posts: [
        { id: 4, title: 'Micro-Frontend Architecture',
          body: 'Splitting large Angular apps into independent modules...',
          date: '2025-01-22' },
        { id: 5, title: 'Module Federation with Angular',
          body: 'Webpack 5 Module Federation enables runtime integration...',
          date: '2025-02-14' },
        ]

  },
  {
    id: 5,
    firstname: 'Edward',
    lastname: 'Tan',
    email: 'edward.tan@example.com',
    departmentId: 1,
    position: 'Finance Officer',
    role: 'admin',
    posts: [
        { id: 6, title: 'Design Systems in Angular',
          body: 'Building reusable component libraries with Angular CDK...',
          date: '2024-09-17' },
        ]},
      ];
    
    /** Return all users */
  getEmployees(): Employee[] {
    return this.employees;
  }

  /** Return one user by id, or undefined if not found */
  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find(e => e.id === id);
  }

  /** Update a user in the mock array (for two-way binding demo) */
  updateUEmployee(updated: Employee): void {
    const idx = this.employees.findIndex(e => e.id === updated.id);
    if (idx !== -1) this.employees[idx] = { ...updated };
  }

  /** Simulate auth — returns true if user has 'Admin' or 'Editor' role */
  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void  { sessionStorage.setItem('auth_token', 'demo-token'); }
  logout(): void { sessionStorage.removeItem('auth_token'); }
}


