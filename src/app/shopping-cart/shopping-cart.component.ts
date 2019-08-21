import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

import { FormBuilder } from '@angular/forms';

import { products } from '../products';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  products;
  items;
  shipping;
  checkoutForm;

  constructor(
    private cart: CartService,
    private form: FormBuilder,
    private router: Router
  ) {
    this.items = this.cart.getItems();
    this.checkoutForm = this.form.group({
      name: '',
      address: '',
      shipping: null
    });
   }

  ngOnInit() {
    this.products = products;
    this.shipping = 5;
  }

  clearCart(){
    this.cart.clearCart()
  }

  adjustCart(productId, amount){
    this.cart.adjustAmount(productId, amount);
  }
  
  startForm(event){
    this.checkoutForm;
    this.checkoutForm.patchValue({shipping: event});
  }

  onSubmit(customerData){
    console.log("Form submitted: ", customerData);
    this.cart.clearCart();
    this.checkoutForm.reset();
    this.router.navigateByUrl('');
  }

}