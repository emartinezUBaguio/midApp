import { User } from '../../user';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-users',
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
uid:number=0;
uName:string|null=null;
uDepartment:string|null=null;
uPosition:string|null=null;
uRole:string|null=null;
  user: User[] = [
     {
      id:1,
      name: 'John Doe',
      position: 'Developer',
      department: 'IT',
      details: { role: [1, 'Admin'] }
    },
    {
      id:2,
      name: 'Jane Smith',
      position: 'Designer',
      department: 'Creative',
      details: { role: [2, 'Editor'] }
    },
    {
      id:3,
      name: 'Alice Johnson',
      position: 'Manager',
      department: 'Management',
      details: { role: [3, 'Viewer'] }
    }];

    onClick(u: User): void {
      console.log('Button clicked!');
      this.uid=u.id;
      this.uName=u.name || '';
      this.uDepartment=u.department || '';
      this.uPosition=u.position || '';
      this.uRole=u.details?.role[1] || '';


    }
}
