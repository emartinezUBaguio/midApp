import { Component } from '@angular/core';
import { User } from '../../user';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nested',
  imports: [RouterOutlet],
  templateUrl: './nested.html',
  styleUrl: './nested.css',
})
export class Nested {

}
