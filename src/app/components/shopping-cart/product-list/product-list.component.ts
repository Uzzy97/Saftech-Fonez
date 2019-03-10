import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../../post.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  posts: any = [];

  constructor(private ps: PostService) {}

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });
  }
}
