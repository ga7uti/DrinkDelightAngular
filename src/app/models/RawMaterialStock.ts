import { Warehouse } from './Warehouse';

export class RawMaterialStock{
    stockId:number;
    name:string;
    pricePerUnit:number;
    quantityUnit:number;
    price:number;
    warehouse:Warehouse;
    manufacturingDate:Date;
    expiryDate:Date;
    qualityCheck:String;
    processDate:Date;
}