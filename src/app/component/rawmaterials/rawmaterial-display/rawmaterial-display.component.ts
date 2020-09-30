import { Component, OnInit } from '@angular/core';
import { RawMaterialOrder } from 'src/app/models/RawMaterialOrder';
import { RawmaterialService } from 'src/app/services/rawmaterial.service';

@Component({
  selector: 'app-rawmaterial-display',
  templateUrl: './rawmaterial-display.component.html',
  styleUrls: ['./rawmaterial-display.component.css']
})
export class RawmaterialDisplayComponent implements OnInit {

  rawMaterialOrders:RawMaterialOrder[]
  constructor(rawMaterialService:RawmaterialService) {
    this.rawMaterialOrders=rawMaterialService.getRawMaterialOrders();
    console.log(this.rawMaterialOrders)
   }

  ngOnInit(): void {
  }
}
