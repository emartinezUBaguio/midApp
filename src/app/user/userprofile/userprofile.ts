import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { User } from '../../user';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-userprofile',
  imports: [CommonModule, FormsModule],
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css',
})
export class Userprofile {
  userId = signal('');
  userName:string='';
  userDepartment:string='';
  userRole:string='';

  userPosition:string='';
  private activatedRoute = inject(ActivatedRoute);
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
    }
  ];
  selectedID:number=this.user[0].id;

  constructor() {
     this.activatedRoute.params.subscribe((params) => {
      this.userId.set(params['id']);
      
    });
  }
}

