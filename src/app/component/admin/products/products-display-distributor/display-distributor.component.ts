import { Component, OnInit } from '@angular/core';
import { Distributor } from 'src/app/models/Distributor';
import { NetinfraService } from 'src/app/services/netinfra.service';

@Component({
  selector: 'app-display-distributor',
  templateUrl: './display-distributor.component.html',
  styleUrls: ['./display-distributor.component.css']
})
export class DisplayDistributorComponent implements OnInit {
  distributors:Distributor[];
  constructor(private service:NetinfraService) { 
    this.distributors=this.service.getDistributor();
  }

  ngOnInit(): void {
  }
}
