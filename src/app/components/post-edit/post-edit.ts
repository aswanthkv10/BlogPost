import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Service } from '../../service/service';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports:[FormsModule],
  templateUrl:'./post-edit.html',
   styleUrl: './post-edit.css'
})
export class PostEdit implements OnInit {

  id!: number;

  post:any = {};

  constructor(
    private route: ActivatedRoute,
    private service: Service,
    private router: Router
  ) {}

  ngOnInit() {

    this.id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.service
      .getPost(this.id)
      .subscribe(data => {
        this.post = data;
      });
  }

  updatePost() {

    this.service
      .updatePost(this.id,this.post)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
