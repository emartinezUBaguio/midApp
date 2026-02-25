import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-style-binding',
  imports: [FormsModule],
  templateUrl: './style-binding.html',
  styleUrl: './style-binding.css',
})
export class StyleBinding {
// ── Component Properties for Style Binding ──────────────────
fontSize: number = 16;          // bound to [style.font-size.px]
fontColor: string = '#f6e6d7';  // bound to [style.color]
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
styleObject = {                 // used with [ngStyle]
  'background-color': '#f0f9ff',
  'border': '2px solid #3b82f6',
  'padding': '16px',
  'color': '#200202'
};

}

