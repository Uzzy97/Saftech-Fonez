import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../post.model';
declare let  paypal: any;
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

    if (!this.addScript){
      this.addPaypalScript().then(() => {
      paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      this.paypalLoad = false;
    })
    }
  }
  addScript: boolean = false;
  paypalLoad: boolean = true;
  finalAmt: number =1;

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
