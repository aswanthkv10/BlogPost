import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Service } from '../../service/service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList implements OnInit {

  posts: any[] = [];
  search = '';

  constructor(
    private postService: Service
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService
      .getPosts(this.search)
      .subscribe((data: any) => {
        this.posts = data;
      });
  }

  deletePost(id: number) {
    this.postService
      .deletePost(id)
      .subscribe(() => {
        this.loadPosts();
      });
  }
}