import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Warehouse } from 'src/app/models/Warehouse';
import { RawmaterialService } from 'src/app/services/rawmaterial.service';
import { RawMaterialStock } from 'src/app/models/RawMaterialStock';

@Component({
  selector: 'app-add-rawmaterial-stock',
  templateUrl: './add-rawmaterial-stock.component.html',
  styleUrls: ['./add-rawmaterial-stock.component.css']
})
export class AddRawmaterialStockComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  names = ['a', 'b'];
  warehouses:Warehouse[];
  stock: RawMaterialStock = new RawMaterialStock();
  stockId: Number;
  name: string;
  qualityCheck: string;
  warehouse:Warehouse;
  quantityUnit: number;
  pricePerUnit: number;
  manufacturingDate: Date;
  expiryDate: Date;
  submitted = false;

  constructor(private rawMaterialService: RawmaterialService) {
    this.warehouses=rawMaterialService.getWarehouses();
   }

  ngOnInit(): void {
  }

  postStock(stock: RawMaterialStock): Number {
    this.rawMaterialService.postStockObserveable(stock).subscribe(res => { this.stockId = res.stockId; });
    return this.stockId;
  }
  onSubmit(){
    this.stock.name=this.name;
    this.warehouse=this.warehouse;
    this.stock.pricePerUnit=this.pricePerUnit;
    this.stock.qualityCheck=this.qualityCheck;
    this.stock.quantityUnit=this.quantityUnit;
    this.stock.manufacturingDate=this.manufacturingDate;
    this.stock.expiryDate=this.expiryDate;
    this.stockId=this.postStock(this.stock);
    this.submitted=true;
    this.signupForm.reset();
  }
}
