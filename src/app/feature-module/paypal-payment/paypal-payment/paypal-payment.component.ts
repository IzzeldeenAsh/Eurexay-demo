import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, catchError, of, switchMap, takeUntil } from 'rxjs';
import { IPaypalCompletionResponse } from 'src/app/core/models/paypal-response.interface';
import { CreateCaseService } from 'src/app/core/services/cases/create-case.service';
import { PaypalPaymentService } from 'src/app/core/services/paypal-payment/paypal-payment.service';
import { Unsub } from 'src/app/core/services/unsub/unsub';
import { PaymentType } from '../../create-case/create-case/Payment-type.enum';
import { ContractsService } from 'src/app/core/services/contracts/contracts.service';


@Component({
  selector: 'app-paypal-payment',
  templateUrl: './paypal-payment.component.html',
  styleUrls: ['./paypal-payment.component.scss'],
})
export class PaypalPaymentComponent extends Unsub  implements OnInit  {
  loader:boolean=false;
  showfailed:boolean=false;
  showSucess:boolean=false;
  paymentId:string='';
  errorMessage:string=''
  itemUUID:string='';
  paymentType:string='';
constructor(
  private activatedRoute:ActivatedRoute,
  private _paypalService:PaypalPaymentService,
  private _createCase:CreateCaseService,
  private _contract:ContractsService
  ){
    super();
}

  ngOnInit(): void {
  this.getValuesFromURL()
  }

  getValuesFromURL():void{
    this.loader=true
    setTimeout(()=>{
      this.activatedRoute.queryParams.subscribe(
        params=>{
          const status = params['status'];
          const paymentId = params['paymentId'];
          const PayerID = params['PayerID'];
          const token= params['token'];
          if (status === 'success'){
           this.successPaymentHandle(paymentId,PayerID,token)
          }else{
           this.failedPaymentHandle();
          }
        }
       )
    },1500)
  }

  successPaymentHandle(paymentId: string, payerId: string, token: string): void {
    this._paypalService.paymentCompletion(paymentId, payerId, token)
      .pipe(
        switchMap((res: IPaypalCompletionResponse) => {
          if (res.status.code === '0') {
            this.paymentId = res.result.paypalPayment.paymentId;
            const uuid = res.result.paypalPayment.itemUUID;
            const type = res.result.paypalPayment.paymentType
            console.log('type',type)
            if(uuid && type){
              this.itemUUID = uuid;
              this.paymentType=type
             return this.publish(uuid,type)
            }else{
              return of(null)
            }
          } else {
            this.loader = false;
            this.showfailed = true;
            this.errorMessage = res.status.description;
            return of(null);
          }
        }),
        catchError((error) => {
          // Handle errors globally here
          this.loader = false;
          this.showfailed = true;
          this.errorMessage = 'An error occurred.';
          return of(null); // Return an observable to continue the stream
        }),
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (res: any) => {
          if (res && res.status.code === '0') {
            this.loader = false;
            this.showSucess = true;
          } else {
            this.loader = false;
            this.showfailed = true;
            this.errorMessage = res ? res.status.description : 'An error occurred';
          }
        },
        error: (err) => {
          // Handle errors specific to the subscribe block if needed
          // This will be called if there is an error in the switchMap block
          console.error('An error occurred in the subscribe block:', err);
        }
      });
  }
  
  publish(itemUUID: string,type:string): Observable<any> {
    if(type===PaymentType.CASE_PUBLISHING){
      return this._createCase.publishCaese(itemUUID)
      .pipe(
        catchError((error) => {
          // Handle errors specific to the publishCase function if needed
          console.error('An error occurred in publishCase:', error);
          return of(null); // Return an observable to continue the stream
        })
      );
    } else if(type===PaymentType.CONTRACT_FINALIZING){
      return this._contract.finializeContract(itemUUID)
      .pipe(
        catchError((error) => {
          // Handle errors specific to the publishCase function if needed
          console.error('An error occurred in publishCase:', error);
          return of(null); // Return an observable to continue the stream
        })
      );
    }else{
      return of(null); 
    }
  }
  failedPaymentHandle():void{
    this.loader=false;
    this.showfailed=true
  };

 

}
