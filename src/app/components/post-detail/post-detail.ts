import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../service/service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  templateUrl: './post-detail.html',
   styleUrl: './post-detail.css'
})
export class PostDetail implements OnInit {

  post:any;
  constructor(
    private route: ActivatedRoute,
    private service: Service
  ) {}

  ngOnInit() {

    const id =
      Number(this.route.snapshot.paramMap.get('id'));

    this.service
      .getPost(id)
      .subscribe(res => {
        this.post = res;
      });
  }
}