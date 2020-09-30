import { Injectable } from '@angular/core';
import { Warehouse } from '../models/Warehouse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from '../models/Supplier';
import { Distributor } from '../models/Distributor';

@Injectable({
  providedIn: 'root'
})
export class NetinfraService {
  private suppliers:Supplier[];
  private distributors:Distributor[];
  readonly rawmaterialOrderUrl = 'http://localhost:8008/api/v1';
  readonly rawmaterialStockUrl = 'http://localhost:8010/api/v1';
  readonly productStockUrl = 'http://localhost:8012/api/v1';
  readonly productOrderUrl = 'http://localhost:8014/api/v1';


  constructor(private http: HttpClient) { }
  postWarehouseObserveable(warehouse:Warehouse) :Observable<Warehouse>{
    const httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<Warehouse>(this.productStockUrl + '/addWarehouse', JSON.stringify(warehouse), { headers: httpHeader });
  }
  postSupplierObserveable(supplier:Supplier) :Observable<Supplier>{
    const httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<Supplier>(this.rawmaterialStockUrl + '/addSupplier', JSON.stringify(supplier), { headers: httpHeader });
  }
  postDistributorObserveable(distributor:Distributor) :Observable<Distributor>{
    const httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.post<Distributor>(this.productStockUrl + '/addDistributor', JSON.stringify(distributor), { headers: httpHeader });
  }
  getSuppliers():Supplier[]{
    this.suppliers = [];
    this.http.get<Supplier[]>(this.rawmaterialOrderUrl + '/getSuppliers').subscribe((suppliersres) => {
      Object.keys(suppliersres).map(key => {
        this.suppliers.push(suppliersres[key]);
      });
    });
    return this.suppliers;
  }
  getDistributor():Distributor[]{
    this.distributors = [];
    this.http.get<Distributor[]>(this.productOrderUrl + '/getDistributors').subscribe((distributorsres) => {
      Object.keys(distributorsres).map(key => {
        this.distributors.push(distributorsres[key]);
      });
    });
    return this.distributors;
  }

}
