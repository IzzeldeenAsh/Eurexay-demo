import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { IInvoice } from 'src/app/core/models/myInvoices.interface';
import { PaymentType } from 'src/app/feature-module/create-case/create-case/Payment-type.enum';
@Component({
  selector: 'app-my-invoices-table',
  templateUrl: './my-invoices-table.component.html',
  styleUrls: ['./my-invoices-table.component.scss']
})
export class MyInvoicesTableComponent {
  
  @Input() invoicesList:IInvoice[]=[];
  @Input() loading:boolean = false;
  @ViewChild('dt1') dt1: Table | undefined;

  constructor(private router:Router){}

  clear(table: Table) {
    table.clear();
}
applyFilterGlobal($event: any, stringVal: any) {
  this.dt1!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}
navigateToDetails(itemUUID:string):void{
  this.router.navigate([`/finance/invoice-summary/${itemUUID}`])
}
}
