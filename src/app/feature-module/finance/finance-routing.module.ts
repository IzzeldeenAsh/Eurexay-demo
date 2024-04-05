import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceMainComponent } from './finance-main/finance-main.component';
import { MyInvoicesComponent } from './finance-main/my-invoices/my-invoices.component';
import { InvoiceSummaryComponent } from './finance-main/invoice-summary/invoice-summary.component';

const routes: Routes = [
  {
    path: '',
    component: FinanceMainComponent,
    children: [
      {path:'',redirectTo:'my-invoices',pathMatch: 'full'},
      { path: 'my-invoices', component: MyInvoicesComponent },
      { path: 'invoice-summary/:invoiceUUID', component: InvoiceSummaryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}
