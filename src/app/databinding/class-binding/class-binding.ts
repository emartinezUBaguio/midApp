import { Component } from '@angular/core';


@Component({
  selector: 'app-class-binding',
  imports: [],
  templateUrl: './class-binding.html',
  styleUrl: './class-binding.css',
})
export class ClassBinding {
// ── Component Class Properties ───────────────────────────────
// ── Component Class Properties ───────────────────────────────
isActive: boolean = true;
hasError: boolean = false;
isWarning: boolean = true;
isLoading: boolean = false;
isButtonDisabled: boolean = false;
theme: string = 'dark';          // used with [class]="expr"
statusClasses = {                // used with [ngClass]
  'status-active': true,
  'status-error': false,
  'status-loading': true
};


}
