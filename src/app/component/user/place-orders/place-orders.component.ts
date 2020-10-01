import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Distributor } from 'src/app/models/Distributor';
import { ProductOrder } from 'src/app/models/ProductOrder';
import { Warehouse } from 'src/app/models/Warehouse';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-place-orders',
  templateUrl: './place-orders.component.html',
  styleUrls: ['./place-orders.component.css']
})
export class PlaceOrdersComponent implements OnInit {

  @ViewChild('f', { static: false }) signupForm: NgForm;
  names = ['a', 'b'];
  distributors: Distributor[];
  warehouses: Warehouse[];
  order: ProductOrder = new ProductOrder();
  orderId: Number;
  name: string;
  distributor: Distributor;
  warehouse: Warehouse;
  quantityUnit: number;
  pricePerUnit: number;
  dateOfDelivery: Date;
  submitted = false;

  constructor(private productService: ProductService) {
    this.distributors = productService.getdistributors();
    this.warehouses = productService.getWarehouses();
    this.names=productService.getProductStockNames();
  }
  ngOnInit(): void {
  }
  postOrder(order: ProductOrder): Number {
    this.productService.postOrderObserveable(order).subscribe(res => { this.orderId = res.orderId; });
    return this.orderId;
  }
  onSubmit() {
    this.order.distributor = this.distributor;
    this.order.warehouse = this.warehouse;
    this.order.name = this.name;
    this.order.pricePerUnit = this.pricePerUnit;
    this.order.quantityUnit = this.quantityUnit;
    this.order.dateOfDelivery = this.dateOfDelivery;
    this.orderId = this.postOrder(this.order);
    this.submitted = true;
    this.signupForm.reset();
  }

}
