import { Component, OnInit } from '@angular/core';
import { ProductOrder } from 'src/app/models/ProductOrder';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.css']
})
export class DisplayOrderComponent implements OnInit {
 
  productOrders:ProductOrder[]
  constructor(private productService: ProductService) {
    this.productOrders=this.productService.getProductOrders();
   }

  ngOnInit(): void {
  }
}