import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../post.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  posts: any = [];

  constructor(private ps: PostService) {}

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });
  }
  

}
