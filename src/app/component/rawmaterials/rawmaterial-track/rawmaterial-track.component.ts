import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RawmaterialService } from 'src/app/services/rawmaterial.service';
import { HttpClient } from '@angular/common/http';
import { CustomResponse } from 'src/app/models/CustomResponse';

@Component({
  selector: 'app-rawmaterial-track',
  templateUrl: './rawmaterial-track.component.html',
  styleUrls: ['./rawmaterial-track.component.css']
})
export class RawmaterialTrackComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;
  trackResponse:string;
  submitted:boolean=false;
  orderId:number;
  readonly baseUrl = 'http://localhost:8008/api/v1';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  trackRawMaterialOrder(Id:number):string{
    this.trackResponse="";
    this.http.get<CustomResponse>(this.baseUrl+"/trackOrder/"+Id).subscribe((res)=>{
      console.log(res.responseMessage);
      this.trackResponse=res.responseMessage;
    });
    return this.trackResponse;
  }

  onSubmit(){
    this.trackResponse=this.trackRawMaterialOrder(this.orderId);
    this.submitted=true;
    this.signupForm.reset();
  }
}
