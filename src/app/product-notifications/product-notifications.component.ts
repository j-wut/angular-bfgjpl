import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-notifications',
  templateUrl: './product-notifications.component.html',
  styleUrls: ['./product-notifications.component.css']
})
export class ProductNotificationsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}