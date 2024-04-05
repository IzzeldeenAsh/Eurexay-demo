import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { API_BASE_URL } from 'src/app/appconfig';
interface PaymentResponse {
  status: {
    code: string;
    description: string;
    reason: string;
  };
  result: {
    redirectURL: string;
  };
}
@Injectable({
  providedIn: 'root'
})
export class PaypalPaymentService {

  private apiUrl = `${API_BASE_URL}`;
  constructor(private http: HttpClient) {}

  paymentCreation(paymentType:string,itemUUID:string):Observable<PaymentResponse>{
    return this.http.post<any>(`${this.apiUrl}/api/create-payment`,
    {
      "paymentType" : paymentType,
     "itemUUID" : itemUUID
     })
    .pipe(
      map((respose)=> respose),
      catchError((error)=>{  return throwError(() => new Error(error));})
    )
  }

  paymentCompletion(paymentId:string,payerId:string,token:string):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/complete-payment`,
    {
      "paymentId" : paymentId,
     "payerId" : payerId,
     "paymentToken":token,
     })
    .pipe(
      map((respose)=> respose),
      catchError((error)=>{  return throwError(() => new Error(error));})
    )
  }



}
