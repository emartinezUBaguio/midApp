import { Component } from '@angular/core';
import { Databinding } from '../../databinding/databinding/databinding';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Databinding, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
