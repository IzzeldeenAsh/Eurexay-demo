import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { IInvoice, IMyInvoicesResponse } from 'src/app/core/models/myInvoices.interface';
import { InvoicesService } from 'src/app/core/services/payments/invoices.service';
import { Unsub } from 'src/app/core/services/unsub/unsub';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-app.scss'],
})
export class InvoiceSummaryComponent extends Unsub implements OnInit {
loading:boolean = false;
invoicesList:IInvoice[] =[];
myInvoice!:IInvoice;
errorMessage:string =''

constructor(private _invoices:InvoicesService,private _activatedRoute:ActivatedRoute){super()}
  ngOnInit(): void {
    
    this._activatedRoute.paramMap.subscribe(param=>{
      const uuid=param.get('invoiceUUID')
      if(uuid){
        this.getMyInvoice(uuid);
      }
    })
  }

  getMyInvoice(uuid:string):void{
    this.loading = true;
    this._invoices.getUserInvocies()
    .pipe(
     takeUntil(this.destroy$)
    )
    .subscribe(
     {
       next:(res:IMyInvoicesResponse)=>{
        if(res.status.code ==='0'){
         this.invoicesList = res.result;
         const invoice = this.invoicesList.find((invoice:IInvoice)=> invoice.itemUUID === uuid);
         if(invoice) this.myInvoice = invoice;
         this.loading = false;
        }else{
          this.errorMessage = res.status.description 
          this.loading = false;
        }
       },
       error:(error)=>{
        this.errorMessage = 'Unexpec error. Please contact Administrator.'
       }
     }
    )
  }
}
