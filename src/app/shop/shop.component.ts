import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }
  addScript: boolean = false;

  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox'
  }
  ngOnInit() {
  }

}
