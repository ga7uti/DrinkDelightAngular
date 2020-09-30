import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
import { CustomResponse } from 'src/app/models/CustomResponse';

@Component({
  selector: 'app-update-an-order',
  templateUrl: './update-an-order.component.html',
  styleUrls: ['./update-an-order.component.css']
})
export class UpdateAnOrderComponent implements OnInit {
  @ViewChild('f', { static: false }) updateForm: NgForm;
  submitted = false;
  constructor(private http: HttpClient) { }

  orderId:number;
  orderStatus:string;
  response:string;
  readonly baseUrl = 'http://localhost:8014/api/v1';
  updateOrder(orderId:Number,orderStatus:String):string{
    this.http.get<CustomResponse>(this.baseUrl+"/updateOrder/"+orderId+"/"+orderStatus).subscribe((res)=>{
      console.log(res);
      this.response=res.responseMessage;
    });
    return this.response;
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.response=this.updateOrder(this.orderId,this.orderStatus);
    console.log("jkj" + this.response)
    this.submitted = true;
    console.log(this.response);
    this.updateForm.reset();
  }

}
