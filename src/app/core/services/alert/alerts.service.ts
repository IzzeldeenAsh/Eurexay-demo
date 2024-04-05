import { Injectable } from '@angular/core';
import Swal, { SweetAlertResult } from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  constructor() {}

  success(title: string, message: string): Promise<SweetAlertResult> {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  }

  warning(title: string, message: string): Promise<SweetAlertResult> {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: message,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  }

  error(title: string, message: string): Promise<SweetAlertResult> {
    return Swal.fire({
      title: title,
      text: message,
      confirmButtonColor: 'red',
      confirmButtonText: 'OK',
    });
  }
}
