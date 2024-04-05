import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { DisputeComponent } from './dispute/dispute.component';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PaymentProcessComponent,
    DisputeComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    ConfirmPopupModule,
    FormsModule,
    ButtonModule
  ],
  providers: [
    ConfirmationService ,
  ],
  exports:[PaymentProcessComponent]
})
export class PaymentProcessModule { }
