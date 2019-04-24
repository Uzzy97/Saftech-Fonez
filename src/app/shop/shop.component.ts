import { Component, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { NgForm } from "@angular/forms";
import { Observable } from 'rxjs';
import { Post } from '../post.model';
import { reject } from 'q';
declare let  paypal: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements AfterViewChecked {
  constructor(private router: Router, private route: ActivatedRoute, private ps: PostService) { }
  post: any = [];
 
  addScript: boolean = false;
  paypalLoad: boolean = true;
  finalAmt: number = this.route.snapshot.params['Price'];

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

  ngOnInit() {
    console.log(this.route.snapshot.params['Price']);
    
    console.log(this.post.price);
    }
  
}
