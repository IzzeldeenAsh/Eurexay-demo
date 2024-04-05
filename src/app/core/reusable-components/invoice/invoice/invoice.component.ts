import { Component, Input, OnInit } from '@angular/core';
import { IInvoice } from 'src/app/core/models/myInvoices.interface';
interface PayerInfo {
  email: string;
  firstName: string;
  lastName: string;
  payerId: string;
  countryCode: string;
  shippingAddress: {
    recipientName: string;
    line1: string;
    city: string;
    countryCode: string;
    postalCode: string;
    state: string;
  };
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  payerInfo!:PayerInfo;
ngOnInit(): void {
 if (this.invoice) this.payerInfo = JSON.parse(this.invoice.payerInfo)
}
@Input() invoice!:IInvoice;

print(){
  window.print();
}
}
