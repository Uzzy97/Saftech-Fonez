import { Component, AfterViewChecked } from '@angular/core';
import { reject } from 'q';
declare let  paypal: any;
@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements AfterViewChecked {

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

  constructor() { }

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
