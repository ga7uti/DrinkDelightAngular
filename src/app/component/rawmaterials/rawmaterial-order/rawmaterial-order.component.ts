import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RawMaterialOrder } from "../../../models/RawMaterialOrder";
import { RawmaterialService } from 'src/app/services/rawmaterial.service';
import { Supplier } from 'src/app/models/Supplier';
import { Warehouse } from 'src/app/models/Warehouse';
@Component({
  selector: 'app-rawmaterial-order',
  templateUrl: './rawmaterial-order.component.html',
  styleUrls: ['./rawmaterial-order.component.css']
})
export class RawmaterialOrderComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  names :string[];
  suppliers: Supplier[];
  warehouses: Warehouse[];
  order: RawMaterialOrder = new RawMaterialOrder();
  orderId: Number;
  name: string;
  supplier: Supplier;
  warehouse: Warehouse;
  quantityUnit: number;
  pricePerUnit: number;
  dateOfDelivery: Date;
  submitted = false;

  constructor(private rawMaterialService: RawmaterialService) {
    this.suppliers = rawMaterialService.getSuppliers();
    this.warehouses = rawMaterialService.getWarehouses();
    this.names=rawMaterialService.getRawMaterialStockNames();
  }
  ngOnInit(): void {
  }
  postOrder(order: RawMaterialOrder): Number {
    this.rawMaterialService.postOrderObserveable(order).subscribe(res => { this.orderId = res.orderId; });
    return this.orderId;
  }
  onSubmit() {
    this.order.supplier = this.supplier;
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
