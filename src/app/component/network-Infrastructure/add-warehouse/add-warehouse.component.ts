import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NetinfraService } from 'src/app/services/netinfra.service';
import { Warehouse } from 'src/app/models/Warehouse';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  warehouseId: number;
  location: string;
  warehouse: Warehouse = new Warehouse();
  constructor(private service: NetinfraService) { }
  ngOnInit(): void {
  }
  postWarehouse(warehouse: Warehouse) : number{
    this.service.postWarehouseObserveable(warehouse).subscribe(res => { this.warehouseId = res.warehouseId });
    return this.warehouseId;
  }
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    this.warehouse.location = this.location;
    this.warehouseId = this.postWarehouse(this.warehouse);
    this.signupForm.reset();
  }
}
