import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceMainComponent } from './finance-main/finance-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyInvoicesComponent } from './finance-main/my-invoices/my-invoices.component';
import { MyInvoicesTableComponent } from './finance-main/my-invoices/my-invoices-table/my-invoices-table.component';
import { InvoiceSummaryComponent } from './finance-main/invoice-summary/invoice-summary.component';
import { SpinnerModule } from 'src/app/core/loader/spinner/spinner.module';
import { TableModule } from 'primeng/table';
import { InvoiceModule } from 'src/app/core/reusable-components/invoice/invoice.module';
import { ButtonModule } from 'primeng/button';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  declarations: [
    FinanceMainComponent,
    MyInvoicesComponent,
    MyInvoicesTableComponent,
    InvoiceSummaryComponent,
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    SharedModule,
    SpinnerModule,
    InvoiceModule,
    TableModule,
    ButtonModule,
    InlineSVGModule
  ]
})
export class FinanceModule { }
