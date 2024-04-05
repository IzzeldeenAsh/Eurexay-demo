import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentBodyComponent } from './payment/payment-body/payment-body.component';
import { InlineSVGModule } from 'ng-inline-svg';


@NgModule({
  declarations: [
    PaymentComponent,
    PaymentBodyComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule,
    InlineSVGModule
  ]
})
export class PaymentModule { }
