import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  selected;
  @Output() ship = new EventEmitter();

  constructor(
    private cart:CartService
  ) { 
    this.shippingCosts = this.cart.getShippingPrices();
  }

  ngOnInit() {
    this.shippingCosts = this.cart.getShippingPrices();
  }

  selectShipping(selected){
    this.selected=selected;
    this.ship.emit(selected);
  }

}