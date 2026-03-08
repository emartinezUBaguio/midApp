import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nested',
  imports: [RouterOutlet],
  templateUrl: './nested.html',
  styleUrl: './nested.css',
})
export class Nested {

}
