import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-failed',
  templateUrl: './payment-failed.component.html',
  styleUrls: ['./payment-failed.component.scss']
})
export class PaymentFailedComponent implements OnInit {
  showDatails:boolean = false;
  @Input() errorMessage:string =''
  ngOnInit(): void {
    setTimeout(()=>{
      this.showDatails=true
     },2000)
  }

}
