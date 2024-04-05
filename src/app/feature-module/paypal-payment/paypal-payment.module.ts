import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypalPaymentRoutingModule } from './paypal-payment-routing.module';
import { PaypalPaymentComponent } from './paypal-payment/paypal-payment.component';
import { PendingPaymentModule } from 'src/app/core/reusable-components/pending-payment/pending-payment.module';


@NgModule({
  declarations: [
    PaypalPaymentComponent
  ],
  imports: [
    CommonModule,
    PaypalPaymentRoutingModule,
    PendingPaymentModule,
  ]
})
export class PaypalPaymentModule {

}
