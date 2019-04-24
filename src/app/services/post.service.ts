import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsData(): Observable<any> {
    return this.http.get("http://localhost:8081/api/phones");
  }

  getPostsDataAccessory(): Observable<any> {
    return this.http.get("http://localhost:8081/api/accessory");
  }

  private posts: Post[] = [];
  //private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  addPost(prodName: string, productType: string, price: number, description: string, stock: number): Observable<any> {
    const post: Post = { prodName: prodName, productType: productType, Price: price, description: description, stock: stock};
    return this.http.post("http://localhost:8081/api/phones", post);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/phones/" + id);
  }

  
  getPost(prodName: string): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/" + prodName);
  }

}
