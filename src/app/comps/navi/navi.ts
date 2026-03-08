import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, RouterOutlet, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee-service';


@Component({
  selector: 'app-navi',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navi.html',
  styleUrl: './navi.css',
})
export class Navi implements OnInit {
  employee: Employee|undefined; 
  selectedId: number|null = null;
  me:string='ic_launcher.png';
  constructor(
  private employeeService: EmployeeService,
  private route: ActivatedRoute,
  private router: Router
  
){}

  ngOnInit() {

    // 🔑 Read :id from the URL and find the matching user
         // Child routes inherit parent params — we access :id from the parent snapshot
   const id = Number(this.route.snapshot.paramMap.get('id'));
    // 🔍 Fetch user from service using the ID
    this.employee = this.employeeService.getEmployeeById(id);

}
goBack(): void {
    this.router.navigate(['/employees']);
  }
}
