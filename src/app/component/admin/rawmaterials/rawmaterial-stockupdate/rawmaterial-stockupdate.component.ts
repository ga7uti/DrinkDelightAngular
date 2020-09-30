import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RawmaterialService } from 'src/app/services/rawmaterial.service';

@Component({
  selector: 'app-rawmaterial-stockupdate',
  templateUrl: './rawmaterial-stockupdate.component.html',
  styleUrls: ['./rawmaterial-stockupdate.component.css']
})
export class RawmaterialStockupdateComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  stockId: number;
  QuantityUnit: number;
  qualityCheck: string;
  pricePerUnit: number;
  response: string;
  submitted: boolean = false;
  stockIds: number[];
  constructor(private rawMaterialService: RawmaterialService) {
    this.stockIds = this.rawMaterialService.getRawMaterialStockId();
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.response = this.rawMaterialService.updateStock(this.stockId, this.QuantityUnit, this.pricePerUnit, this.qualityCheck);
    this.submitted = true;
    console.log(this.stockIds);
    this.signupForm.reset();
  }
}
