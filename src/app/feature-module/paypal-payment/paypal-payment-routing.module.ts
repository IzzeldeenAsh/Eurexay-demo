import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaypalPaymentComponent } from './paypal-payment/paypal-payment.component';

const routes: Routes = [
  {
    path:"",
    component:PaypalPaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaypalPaymentRoutingModule { }
