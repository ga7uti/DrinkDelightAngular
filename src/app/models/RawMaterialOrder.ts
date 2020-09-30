import { Warehouse } from './Warehouse';
import { Supplier } from './Supplier';

export class RawMaterialOrder{
  
    orderId:number;
    name:string;
    supplier:Supplier;
    quantityUnit:number;
    dateOfOrder:Date;
    dateOfDelivery:Date;
    pricePerUnit:number;
    totalPrice:number;
    deliveryStatus:string;
    warehouse:Warehouse;
    constructor() {
      }

}