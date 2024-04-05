import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrls: ['./payment-successful.component.scss'],
})
export class PaymentSuccessfulComponent implements OnInit {
  constructor(private router:Router){}
  @Input() paymentId:string='';
  @Input() paymentType:string='';
  @Input() itemUUID:string='';
  showDatails:boolean=false;
  ngOnInit(): void {
    console.log('paymentType',this.paymentType)
   setTimeout(()=>{
    this.showDatails=true
   },2000)
  }

  navigate(type:string):void{
    switch(type){
      case 'CASE_PUBLISHING' :
         const urlCase = `/summary/summary/${this.itemUUID}`;
         this.router.navigate([urlCase]);
         break;
      case 'CONTRACT_FINALIZING':
          const urlContract = `/contracts-main/contract/${this.itemUUID}`;
          this.router.navigate([urlContract],{queryParams:{amOw44:true}});
          break;
      case 'INVOICE':
        const urlInvoice  = `/finance/invoice-summary/${this.itemUUID}`
        this.router.navigate([urlInvoice]);
        break
    }

  }
  print(){
    window.print();
  }
}
