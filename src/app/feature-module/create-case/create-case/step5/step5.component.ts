import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ICase } from 'src/app/core/models/createCase.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { CreateCaseService } from 'src/app/core/services/cases/create-case.service';
import { GetCasesService } from 'src/app/core/services/cases/get-cases.service';
import Swal from 'sweetalert2';
import { PaypalPaymentService } from '../../../../core/services/paypal-payment/paypal-payment.service';
import { PaymentType } from '../Payment-type.enum';
import { IPaypalResponse } from 'src/app/core/models/paypal-response.interface';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step4.scss']
})
export class Step5Component  implements OnInit ,OnDestroy  {
  private readonly destroy$ = new Subject<void>();
  @Input() caseUUID!:string;
  isPublished = false;
  isProcessing = false;
  casePublishFee:number=100;
  buttonText = 'Proceed';
  ownerCase: ICase[] = [];
  currentCase!: any;
  loading:boolean=false;
  viewSumamry:boolean=false;
  data: any;
  options:any;
  constructor(
    private _caseService: GetCasesService,
    private _alert: AlertsService,
     private _createCase:CreateCaseService,
    private router:Router,
    private _paypalPayment:PaypalPaymentService,
  ) {}

  ngOnInit(): void {
    this.getCase()
}

togglePublish(event: Event): void {
  event.preventDefault();
  Swal.fire({
    title: 'Proceed?',
    html: `<div style="font-size:13px">
    <p>You will be directed to PayPal to complete your payment.
    Once you payed and submitted, your case will be publised and there is no way to edit the case.
    Are you sure you want to proceed?.</p><p>${this.checkDate()}</p>
    </div>`,
    showCancelButton: true,
    confirmButtonColor: '#009042',
    cancelButtonColor: '#d6d6d6',
    confirmButtonText: 'Submit',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
  this.isProcessing = true;
  this._paypalPayment.paymentCreation(PaymentType.CASE_PUBLISHING,this.caseUUID)
  .pipe(takeUntil(this.destroy$))
  .subscribe(
    {
      next: (res:IPaypalResponse)=>{
       if(res.status.code==='0'){
        this.buttonText = 'Submitted';
        const url = res.result.redirectURL
        window.location.href = url
       }else{
        this._alert.error('', `${res.status.description}`);
        this.isProcessing = false;
        this.isPublished = false;
        this.buttonText = 'Proceed';
        return;
       }
      },
      error:(error:Error)=>{
        this._alert.error('', 'An error occurred.Try Again Later');
        this.isProcessing = false;
      }
    }
  )
    }
  });


}
getCase() {
  this.loading=true
  this._caseService.getCaseByID(this.caseUUID).pipe(takeUntil(this.destroy$)).subscribe({
    next: (res) => {
      if (res.status.code === '0' && res['result']) {
       this.currentCase = res['result'];
       this.checkDate()
       this.loading=false
      } else {
        this._alert.error('', `${res.status.message}`);
        this.loading=false
      }
    },
    error: (error) => {
      this._alert.error('', 'An error occurred.');
      this.loading=false
    }
  });
}

checkDate(){
  const publishDate = this.currentCase.startDate;
  const currentDate = new Date();
  let month = (currentDate.getMonth()+1).toString().padStart(2,'0');
  let day = currentDate.getDate().toString().padStart(2,'0');
  let year = currentDate.getFullYear();
  const today = `${year}-${month}-${day}`

  if (publishDate <= today){
    return "Due publish date provided, the case will be published <strong>immediately.</strong>"
  } else{
    return `Your case is scheduled for publication on <strong>${publishDate}.</strong>`
  }

}
downloadFile(data: any) {
  const splittedName = data.attachmentName.split('.');
  const extension = splittedName[splittedName.length - 1];
  const name = splittedName[0];
  let mimeType = '';

  // Define MIME types based on file extensions
  switch (extension.toLowerCase()) {
    case 'txt':
      mimeType = 'text/plain';
      break;
    case 'json':
      mimeType = 'application/json';
      break;
    case 'pdf':
      mimeType = 'application/pdf';
      break;
    case 'png':
      mimeType = 'image/png';
      break;
    case 'jpg':
    case 'jpeg':
      mimeType = 'image/jpeg';
      break;
    default:
      mimeType = 'application/octet-stream'; // Default to binary data
  }

  const src = `data:text/csv;base64,${data.attachmentContent}`;
  const link = document.createElement('a');
  link.href = src;
  link.download = `${name}.${extension}`;
  link.click();
  link.remove();
}


printPage(){
  const newWindow = window.open(`/summary/summary/${this.caseUUID}`, '_blank');
  if (!newWindow) {
      console.error('Failed to open new window');
  }
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}
}
