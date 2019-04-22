import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../post.model';
@Component({
  selector: 'app-accessory',
  templateUrl: './accessory.component.html',
  styleUrls: ['./accessory.component.css']
})
export class AccessoryComponent implements OnInit {

  posts: any = [];

  constructor(private ps: PostService) {}

  ngOnInit() {
    this.ps.getPostsDataAccessory().subscribe(data => {
      this.posts = data;
    });
  }

}
