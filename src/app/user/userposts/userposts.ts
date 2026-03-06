import { Component } from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { CommonModule }       from '@angular/common';
import { ActivatedRoute }     from '@angular/router';

export interface Post {
  id: number;
  title: string;
  body: string;
  date: string;
}
@Component({
  selector: 'app-userposts',
  imports: [FormsModule, CommonModule],
  templateUrl: './userposts.html',
  styleUrl: './userposts.css',
})

export class UserPosts {



userId   = '';
  newTitle = '';   // 🔁 Two-way bound
  newBody  = '';   // 🔁 Two-way bound

   posts: Post[] = [
    { id: 1, title: 'Welcome Post',   body: 'Glad to be part of the team!',   date: '2025-01-10' },
    { id: 2, title: 'Project Update', body: 'Sprint 3 completed successfully.', date: '2025-02-14' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Read parent's :id param using 'parent' reference
    this.userId = this.route.parent?.snapshot.paramMap.get('id') ?? '';
  }

  addPost() {
    if (this.newTitle.trim()) {
      this.posts.unshift({
        id: this.posts.length + 1,
        title: this.newTitle,
        body: this.newBody || '(no content)',
        date: new Date().toISOString().split('T')[0]
      });
      this.newTitle = '';  // 🔁 Clears input via two-way binding
      this.newBody  = '';
    }
  }

}

