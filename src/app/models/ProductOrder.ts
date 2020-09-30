import { Distributor } from './Distributor';
import { Warehouse } from './Warehouse';

export class ProductOrder{
    orderId:number;
    name:string;
    distributor:Distributor;
    quantityUnit:number;
    dateOfOrder:Date;
    dateOfDelivery:Date;
    pricePerUnit:number;
    totalPrice:number;
    deliveryStatus:string;
    warehouse:Warehouse;

}