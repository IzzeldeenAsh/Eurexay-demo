import { Component, Input } from '@angular/core';
import { takeUntil } from 'rxjs';
import { IPaypalResponse } from 'src/app/core/models/paypal-response.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { PaypalPaymentService } from 'src/app/core/services/paypal-payment/paypal-payment.service';
import { Unsub } from 'src/app/core/services/unsub/unsub';
import { PaymentType } from 'src/app/feature-module/create-case/create-case/Payment-type.enum';

@Component({
  selector: 'app-payment-step',
  templateUrl: './payment-step.component.html',
  styleUrls: ['./payment-step.component.scss'],
})
export class PaymentStepComponent extends Unsub {
  constructor(
    private _paypalPayment: PaypalPaymentService,
    private _alert: AlertsService
  ) {
    super();
  }
  isFinalizing: boolean = false;
  @Input() uuid: string = '';
  @Input() budget: number = 0;
  @Input() loggenInUser:string='';
  @Input() owner:string='';

  toggleFinializing(event: Event): void {
    event.preventDefault();
    this.isFinalizing = true;
    if(this.owner === this.loggenInUser){
      this._paypalPayment
      .paymentCreation(PaymentType.CONTRACT_FINALIZING, this.uuid)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: IPaypalResponse) => {
          if (res.status.code === '0') {
            const url = res.result.redirectURL;
            window.location.href = url;
            this.isFinalizing = false;
          } else {
            this._alert.error('', `${res.status.description}`);
            return;
          }
        },
        error: (error: Error) => {
          this._alert.error('', 'An error occurred.Try Again Later');
          this.isFinalizing = false;
        },
      });
    }
  };

}
