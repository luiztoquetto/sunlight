import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

interface ToastConfig {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(
    private readonly toastr: ToastrService,
  ) { }

  public showError(config: ToastConfig): void {
    this.toastr.error(config.message, 'Oops', {
      positionClass: 'toast-bottom-center',
      timeOut: 3000,
    });
  }

}
