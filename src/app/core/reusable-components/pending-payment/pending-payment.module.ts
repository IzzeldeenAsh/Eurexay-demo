import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingPaymentComponent } from './pending-payment/pending-payment.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { PaymentFailedComponent } from './payment-failed/payment-failed.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PendingPaymentComponent,
    PaymentSuccessfulComponent,
    PaymentFailedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],exports:[PendingPaymentComponent,PaymentSuccessfulComponent,PaymentFailedComponent]
})
export class PendingPaymentModule { }
