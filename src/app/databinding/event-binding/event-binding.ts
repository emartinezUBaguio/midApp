import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-binding',
  imports: [FormsModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  // ─────────────────────────────────────────────────────────────
  // SECTION C: Event Binding Properties
  // These are updated BY the template when the user interacts.
  // The DOM PUSHES data into the component via event handlers.
  // ─────────────────────────────────────────────────────────────
  isButtonDisabled: boolean = true;   // [disabled]='isButtonDisabled'
  buttonLabel: string = 'Disabled';
  clickCount: number = 0;
  lastKeyPressed: string = '';
  mousePosition: { x: number; y: number } = { x: 0, y: 0 };
  isHovered: boolean = false;
  typedInput: string = '';
  frameworks = [
    { name: 'angular', value: 'Angular' },
    { name: 'react', value: 'React' },
    { name: 'vue', value: 'Vue ' }
  ];
  selectedFramework: string = 'angular';


  // Event handler: called when button is clicked
  onButtonClick(): void {
    this.clickCount++;
    this.isButtonDisabled = false; // Enable after first click
      this.buttonLabel = 'Enabled';
  }

  // Event handler: receives the native KeyboardEvent object
  onKeyPress(event: KeyboardEvent): void {
    this.lastKeyPressed = event.key;
  }

  // Event handler: receives the native MouseEvent
  onMouseMove(event: MouseEvent): void {
    this.mousePosition = { x: event.clientX, y: event.clientY };
  }

  // Event handler: receives InputEvent from text field
  onInputChange(event: Event): void {
    // Cast to HTMLInputElement to access .value
    this.typedInput = (event.target as HTMLInputElement).value;
  }

  onMouseEnter(): void { this.isHovered = true; }
  onMouseLeave(): void { this.isHovered = false; }

  onSelectionChange(value: string): void {
    console.log('ngModel value changed to:', value);
    this.selectedFramework = value;
  }
}
