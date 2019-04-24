import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { reject } from 'q';
declare let  paypal: any;
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../post.model';
import { post } from 'selenium-webdriver/http';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements AfterViewChecked {

  posts: any = [];

  constructor(private ps: PostService) {}

  ngOnInit() {
    this.ps.getPostsData().subscribe(data => {
      this.posts = data;
    });
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;
  finalAmt: number = this.posts.price;

  

  paypalConfig = {
    env: 'sandbox',
    client:{
      sandbox: 'AQU5MlY8EwI38CANc8wpJ989B7O4BS6s7RYbkhpSuP_xTjiFj0ifmcuP5yXxrhx1EtuImNd-yPdLNxeg'  
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment:{
          transactions:[
            {amount:{total: this.finalAmt, currency: 'EUR'}}
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) =>{
        // Do something when payment is successful
      })
    }

  };

  ngAfterViewChecked(): void {
    if (!this.addScript){
      this.addPaypalScript().then(() => {
      paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      this.paypalLoad = false;
    })
    }
  }

  addPaypalScript(){
    this.addScript = true;
    return new Promise ((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }


}
