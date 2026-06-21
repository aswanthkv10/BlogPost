import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Service } from '../../service/service';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-create.html'
})
export class PostCreate {

  post = {
    title:'',
    content:'',
    author:''
  };

  constructor(
    private service: Service,
    private router: Router
  ) {}

  savePost() {
    this.service
      .createPost(this.post)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
