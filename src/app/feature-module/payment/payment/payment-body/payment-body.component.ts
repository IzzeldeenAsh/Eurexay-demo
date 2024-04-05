import { style } from '@angular/animations';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ICase } from 'src/app/core/models/createCase.interface';
import { GetCasesService } from 'src/app/core/services/cases/get-cases.service';

@Component({
  selector: 'app-payment-body',
  templateUrl: './payment-body.component.html',
  styleUrls: ['./payment-body.component.scss'],
})
export class PaymentBodyComponent implements OnInit, OnDestroy {
  @ViewChild('paymentRef',{static:false}) paymentRef!:ElementRef;
  private readonly destroy$ = new Subject<void>();
  loading: boolean = false;
  UUID: string = '';
  currentCase!: ICase;
  amount: any = 0;
  tansactionID:string=''
  showSuccessfulID:boolean = false;
  showFailed:boolean = false;
  constructor(private getCase: GetCasesService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((param: any) => {
      if (param.get('UUID')) {
        this.UUID = param.get('UUID');
      }
    });
  }

  ngOnInit(): void {
  
    if (this.UUID) {
      this.getCaseUUID();

    }
  }

  renderPayPal(){
    window.paypal.Buttons(
      {
        createOrder:(data:any, actions:any)=>{
          return actions.order.create({
            purchase_units:[
              {
                amount : {
                  value : this.amount.toString(),
                  currency_code:'USD'
                }
              }
            ]
          })
        },
        onApprove: (data:any, actions:any)=>{
          return actions.order.capture().then((details:any)=>{
            if(details.status==='COMPLETED'){
              this.tansactionID=details.id;
              this.showFailed=false;
              this.showSuccessfulID=true;
            }
          })
        },
        onError:(error:any)=>{
          this.showSuccessfulID=false;
          this.showFailed=true;
          console.log(error)
        }
      }
    ).render(this.paymentRef.nativeElement)
  }

  getCaseUUID() {
    this.loading = true;
    this.getCase
      .getCaseByID(this.UUID)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.status.code === '0') {
            this.loading = false;
            this.currentCase = res['result'];
            this.amount = this.currentCase.budget;
            this.renderPayPal()
          } else {
            this.loading = false;
          }
        },
        error: (err) => {
          this.loading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
