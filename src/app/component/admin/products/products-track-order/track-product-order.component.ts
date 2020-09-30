import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomResponse } from 'src/app/models/CustomResponse';

@Component({
  selector: 'app-track-product-order',
  templateUrl: './track-product-order.component.html',
  styleUrls: ['./track-product-order.component.css']
})
export class TrackProductOrderComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  trackResponse:string;
  submitted:boolean=false;
  orderId:number;
  readonly baseUrl = 'http://localhost:8014/api/v1';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  trackProductOrder(Id:number):string{
    this.trackResponse="";
    this.http.get<CustomResponse>(this.baseUrl+"/trackOrder/"+Id).subscribe((res)=>{
      console.log(res.responseMessage);
      this.trackResponse=res.responseMessage;
    });
    return this.trackResponse;
  }

  onSubmit(){
    this.trackResponse=this.trackProductOrder(this.orderId);
    this.submitted=true;
    this.signupForm.reset();
  }
}
