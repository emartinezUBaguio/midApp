import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Employee } from '../../models/employee.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router,} from '@angular/router';
import { EmployeeService } from '../../services/employee-service';



@Component({
  selector: 'app-userprofile',
  imports: [CommonModule, FormsModule,],
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css',
})
export class UserProfileComponent implements OnInit{
  employee: Employee|undefined;     // A copy of the User to edit
  saved  = false;
  errorMessage='';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService

  ) {}

  ngOnInit() {
        // Child routes inherit parent params — we access :id from the parent snapshot
    const id = Number(this.route.snapshot.paramMap.get('id'));
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
  save():void {
    // In a real app: call UserService.update(this.editableUser)
    if (this.employee){
      this.employeeService.updateUEmployee(this.employee);
      this.saved = true;
      setTimeout(() => (this.saved=false), 2500);
    }
  }
}
