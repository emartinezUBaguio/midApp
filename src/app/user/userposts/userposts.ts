import { Component, OnInit } from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { CommonModule }       from '@angular/common';
import { ActivatedRoute }     from '@angular/router';
import { EmployeeService } from '../../services/employee-service';
import { Post } from '../../models/employee.model';


@Component({
  selector: 'app-userposts',
  imports: [FormsModule, CommonModule],
  templateUrl: './userposts.html',
  styleUrl: './userposts.css',
})

export class UserPosts implements OnInit {
  posts: Post[]=[];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ){}

  ngOnInit() {
    // Read parent's :id param using 'parent' reference
        // Child routes inherit parent params — we access :id from the parent snapshot
    const id   = +this.route.parent!.snapshot.paramMap.get('id') !;
    this.posts = this.employeeService.getEmployeeById(id)?.posts ?? [];
  }

  
}

