import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Employee } from '../../data/mockemployee';
import { mockemployee} from '../../data/employee';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-userprofile',
  imports: [CommonModule, FormsModule],
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css',
})
export class UserProfileComponent {
  editableEmployee?: Employee;     // A copy of the User to edit
  saveMessage  = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id   = this.route.parent?.snapshot.paramMap.get('id') ?? '';
    const found = mockemployee.find(e => e.id === Number(id));
    // Spread into a new object to avoid mutating the shared mock data directly
    if (found) this.editableEmployee? { ...found }:{}
  }

  saveProfile() {
    // In a real app: call UserService.update(this.editableUser)
    this.saveMessage = `✅ Profile for ${this.editableEmployee?.firstname} saved successfully!`;
    setTimeout(() => this.saveMessage = '', 3000);
  }
}
