import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  productId;
  constructor(
    private router:ActivatedRoute,
    private cart:CartService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.productId=params.get("productId");
      this.product=products[+this.productId];
    })
  }

  addToCart(productId){
    this.cart.addItem(productId);
    window.alert(this.product.name +  " added to cart!");
  }

}