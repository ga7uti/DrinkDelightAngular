import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  options: any

  constructor(private toastr: ToastrService) {
    this.options = {
      "debug": false,
      "positionClass": "toast-bottom-right",
      "onclick": null,
      "fadeIn": 300,
      "fadeOut": 1000,
      "timeOut": 5000,
      "extendedTimeOut": 1000
    }
  }

  public success(message: string) {
    this.toastr.success(message, "Successfull", this.options);
  }

  public error(message: string) {
    this.toastr.error(message, "Error", this.options);
  }
}
