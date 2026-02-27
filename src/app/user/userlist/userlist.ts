import { User } from './../../user';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-userlist',
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './userlist.html',
  styleUrl: './userlist.css',
})
export class Userlist {
selectedId:number=0;
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

    onClick(u: User){
      this.selectedId=u.id;
    }
}
