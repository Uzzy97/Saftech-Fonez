import { Component,  OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  posts: any = [];

  constructor(private ps: PostService) {}

  ngOnInit(): void {
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
      
    });

  }
}
