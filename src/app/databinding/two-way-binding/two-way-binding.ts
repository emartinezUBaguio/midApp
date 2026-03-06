
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../data/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  // SECTION D: Two-Way Binding Properties
  // [(ngModel)] syncs the component property AND the input field
  // at the same time. Change one, the other updates automatically.
  twoWName: string = 'Juan Dela Cruz';
  twoWayEmail: string = '';
  twoWayAge: number = 20;
  twoWayGender: string = 'male';
  twoWaySubscribed: boolean = false;
  twoWayLanguage: string = 'TypeScript';
  twoWayRating: number = 3;
  twoWayColor: string = '#3b82f6';
  mockemployee?: Employee[];
// Language options for select dropdown
programmingLanguages: string[] = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'];


    i:number = 0;
    twoWayName: string = 'Change me!';
    selectedColor: string = '#2E75B6';
    rangeValue: number = 50;
    selectedOption: string = 'option1';
    selectedId: number | null = null;
    selectedName: string = '';
    selectedDepartment: string = '';
    selectedPosition: string = '';
    selectedRole: string = '';





    onClick(e: Employee): void {
      console.log('Button clicked!');
      this.selectedId=(e.id);
      this.selectedName=e.firstname || '';
      this.selectedDepartment=e.department || '';
      this.selectedPosition=e.position || '';
      this.selectedRole=e.role[1] || '';

      console.log(`Selected User ID: ${this.selectedId}`);
    }

    // Generated profile output
get profileSummary(): string {
  const sub = this.twoWaySubscribed ? 'Subscribed' : 'Not subscribed';
  return `${this.twoWayName}, ${this.twoWayAge} years old, ${this.twoWayGender}. ` +
         `Prefers ${this.twoWayLanguage}. Rating: ${this.twoWayRating}/5. ${sub}.`;
}

// Reset the entire form programmatically
resetForm(): void {
  // Changing component properties also updates the bound input fields
  this.twoWayName = '';
  this.twoWayEmail = '';
  this.twoWayAge = 18;
  this.twoWayGender = 'male';
  this.twoWaySubscribed = false;
  this.twoWayLanguage = 'TypeScript';
  this.twoWayRating = 3;
}

}
