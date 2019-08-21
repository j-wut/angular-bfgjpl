import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items;

  constructor(
    private http: HttpClient
  ) {
    this.items = JSON.parse(window.localStorage.getItem("angularDemoCart")) || {};
    console.log(window.localStorage);
    }
  
  addItem(productId){
    this.items[productId]=(this.items[productId] ? this.items[productId] : 0) + 1;
    return this.items;
  }

  clearCart(){
    this.items={};
    window.localStorage.removeItem("angularDemoCart")
    return this.items;
  }

  adjustAmount(productId,amount){
    +amount<=0 ? delete this.items[productId] : this.items[productId]=+amount;
    return this.items;
  }

  getItems(){
    return Object.keys(this.items).map((k)=>[k, this.items[k]]);
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

}