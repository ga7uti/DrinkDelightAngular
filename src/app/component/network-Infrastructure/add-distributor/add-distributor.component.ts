import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Distributor } from 'src/app/models/Distributor';
import { NetinfraService } from 'src/app/services/netinfra.service';

@Component({
  selector: 'app-add-distributor',
  templateUrl: './add-distributor.component.html',
  styleUrls: ['./add-distributor.component.css']
})
export class AddDistributorComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  distributorId:number;
  distributorName:string;
  distributorLocation:string;
  distributorPhone:number;
  distributor:Distributor=new Distributor();
  constructor(private service: NetinfraService) { }

  postdistributor(distributor: Distributor){
    this.service.postDistributorObserveable(distributor).subscribe(res => 
      { this.distributorId = res.distributorId ;console.log(res)});
    return this.distributorId;
  }
  ngOnInit(): void {
  }
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    this.distributor.name=this.distributorName;
    this.distributor.location=this.distributorLocation;
    this.distributor.phoneNumber=this.distributorPhone;
    this.distributorId=this.postdistributor(this.distributor);
    console.log(this.distributorId)
    this.signupForm.reset();
  }
}
