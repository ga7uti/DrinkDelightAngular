import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RawmaterialService } from 'src/app/services/rawmaterial.service';
import { CustomResponse } from 'src/app/models/CustomResponse';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-rawmaterial-update',
  templateUrl: './rawmaterial-update.component.html',
  styleUrls: ['./rawmaterial-update.component.css']
})
export class RawmaterialUpdateComponent implements OnInit {
  @ViewChild('f', { static: false }) updateForm: NgForm;
  submitted = false;
  constructor(private http: HttpClient) { }

  orderId:number;
  orderStatus:string;
  response:string;
  readonly baseUrl = 'http://localhost:8008/api/v1';


  ngOnInit(): void {
  }

  updateOrder(orderId:Number,orderStatus:String):string{
    //this.updateOrderPromise(orderId,orderStatus);
    this.http.get<CustomResponse>(this.baseUrl+"/updateOrder/"+orderId+"/"+orderStatus).subscribe((res)=>{
      console.log(res);
      this.response=res.responseMessage;
    });
    return this.response;
  }
  onSubmit() {
    this.response=this.updateOrder(this.orderId,this.orderStatus);
    this.submitted = true;
    console.log(this.response);
    this.updateForm.reset();
  }

}
