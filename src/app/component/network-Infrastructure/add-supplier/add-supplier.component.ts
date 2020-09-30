import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Supplier } from 'src/app/models/Supplier';
import { NetinfraService } from 'src/app/services/netinfra.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  supplierId:number;
  supplierName:string;
  supplierLocation:string;
  supplierPhone:number;
  supplier:Supplier=new Supplier();
  constructor(private service: NetinfraService) { }

  postSupplier(supplier: Supplier) {
    this.service.postSupplierObserveable(supplier).subscribe(res => 
      { this.supplierId = res.supplierId });
    return this.supplierId;
  }
  ngOnInit(): void {
  }
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    this.supplier.location=this.supplierLocation;
    this.supplier.phoneNumber=this.supplierPhone;
    this.supplier.name=this.supplierName;
    this.supplierId=this.postSupplier(this.supplier);
    this.signupForm.reset();
  }
}
