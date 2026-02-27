import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style-binding',
  imports: [FormsModule, CommonModule],
  templateUrl: './style-binding.html',
  styleUrl: './style-binding.css',
})
export class StyleBinding {
// ── Component Properties for Style Binding ──────────────────
fontSize: number = 16;          // bound to [style.font-size.px]
fontColor: string = '#472e81';  // bound to [style.color]
bgOpacity: number = 0.8;        // bound to [style.opacity]
cardWidth: string = '300px';    // bound to [style.width]
borderRadius: number = 8;       // bound to [style.border-radius.px]
borderColor: string = '#9dbdf1'; // bound to [style.border-color]
borderStyle: string = 'solid';  // bound to [style.border-style]
borderWidth: number = 2;       // bound to [style.border-width.px]
selectedColor: string = '#0a1628'; // bound to [style.background-color]
imageWidth: number = 200;         // bound to [style.width.px]
isActive: boolean = true;          // used to conditionally apply styles
isLoading: boolean = true;        // used to conditionally apply styles

  bgColor: string = '#EBF3FB';
  isHovered: boolean = false;

  increaseFont(): void { if (this.fontSize < 32) this.fontSize += 2; }
  decreaseFont(): void { if (this.fontSize > 10) this.fontSize -= 2; }

  onMouseEnter(): void { this.isHovered = true; }
  onMouseLeave(): void { this.isHovered = false; }

styleObject = {                 // used with [ngStyle]
  'background-color': '#f0f9ff',
  'border': '2px solid #3b82f6',
  'padding': '16px',
  'color': '#200202'
};

}

