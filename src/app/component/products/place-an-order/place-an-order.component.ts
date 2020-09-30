import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductOrder } from 'src/app/models/ProductOrder';
import { Warehouse } from 'src/app/models/Warehouse';
import { ProductService } from 'src/app/services/product.service';
import { Distributor } from 'src/app/models/Distributor';

@Component({
  selector: 'app-place-an-order',
  templateUrl: './place-an-order.component.html',
  styleUrls: ['./place-an-order.component.css']
})
export class PlaceAnOrderComponent implements OnInit {
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
