import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { IInvoice, IMyInvoicesResponse } from 'src/app/core/models/myInvoices.interface';
import { InvoicesService } from 'src/app/core/services/payments/invoices.service';
import { Unsub } from 'src/app/core/services/unsub/unsub';

@Component({
  selector: 'app-my-invoices',
  templateUrl: './my-invoices.component.html',
  styleUrls: ['./my-invoices.component.scss']
})
export class MyInvoicesComponent extends Unsub implements OnInit {
  invoicesList:IInvoice[] =[];
  loaderSubject= new BehaviorSubject<boolean>(false);
  errorMessage:string =''
  constructor(private _invoices:InvoicesService){super()}
  ngOnInit(): void {
    this.getInvoice();
  }
    getInvoice():void{
      this.loaderSubject.next(true);
      this._invoices.getUserInvocies()
      .pipe(
       takeUntil(this.destroy$)
      )
      .subscribe(
       {
         next:(res:IMyInvoicesResponse)=>{
          if(res.status.code ==='0'){
           this.invoicesList = res.result;
           this.loaderSubject.next(false)
          }else{
            this.errorMessage = res.status.description 
            this.loaderSubject.next(false);
          }
         },
         error:(error)=>{
          this.errorMessage = 'Unexpec error. Please contact Administrator.'
         }
       }
      )
    }
}
