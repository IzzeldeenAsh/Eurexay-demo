import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CountUp } from 'countup.js';
interface IPaymentData {
  paymentNo: number;
  percentage: number;
  amount: number;
  isValid: boolean;
}

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(250)]),
      transition(':leave', [animate(250, style({ opacity: 0 }))]),
    ]),
  ],
})
export class MonthlyPaymentComponent implements OnInit {
constructor(){
  this.dataSource = new MatTableDataSource<IPaymentData>(this.payments);
}
@Output() paymentsCompleted: EventEmitter<any> = new EventEmitter();

  loading: boolean=false;
  noOfPaymentsDisplayed!:number;
  showAlert: boolean = false;
  budgetSpent!: number;
  emptyField: boolean = false;
  remainBudget: boolean = false;
  totalBudgetDisplayed:number=0;
  previousPercentage: string | null = null;
  
  @Input() monthlyPayments!:number;
  @Input() paymentsList!:any;
  @Input() caseBudget!:number;
  @ViewChild('BudgetTotalCounter', { static: true })
  BudgetTotalCounter!: ElementRef;
 @ViewChild('budgetSpentCounter', { static: true })
  budgetSpentCounter!: ElementRef;
  

  dataSource!: MatTableDataSource<IPaymentData>;
  displayedColumns: string[] = ['payment', 'percentage', 'amount'];
  payments: IPaymentData[] = [];
  selectedMonths = new FormControl([]);
  amount: number | undefined;
  displayedPercentage: number = 0;
  paymentPlanning: any[] = [];
  showPopup: boolean = false;
  
  percentagePreview: any;
  paymentDates: Date[] = [];
totalBudget:number=0;
  ngOnInit() {
    this.loader();
    this.initParameters();
    this.initializePayments();
    this.extractPaymentList();
  }

  extractPaymentList(){
    if(this.paymentsList !== null && this.paymentsList.length > 0){
      this.payments = this.paymentsList
      this.dataSource.data = this.payments
      const totalPercentage = this.payments.reduce((sum, payment) => sum + Number(payment.percentage), 0);
      this.displayedPercentage = totalPercentage;
      const totalAmount = this.payments.reduce((sum, payment)=> sum +Number(payment.amount),0);
      this.budgetSpent = totalAmount ;
      this.startCounter(
        this.budgetSpentCounter.nativeElement,
        0,
        this.budgetSpent,
        () => {
          // Callback function to update the displayed budgetSpent value after countdown
          this.budgetSpent = this.budgetSpent;
        }
      );
      this.totalBudgetDisplayed = this.caseBudget - this.budgetSpent;
      this.startCounter(
        this.BudgetTotalCounter.nativeElement,
        this.totalBudget,
        this.totalBudgetDisplayed,
        () => {
          // Callback function to update the displayed totalBudgetDisplayed value after countdown
          this.totalBudget = this.totalBudgetDisplayed;
        }
      );
      const paymentsWithZeroAmount = this.payments.filter((payment)=>payment.amount === 0 ).length;
      this.noOfPaymentsDisplayed = paymentsWithZeroAmount
    }else{
      this.initializePayments()
    }
  }

  initParameters(){
    this.noOfPaymentsDisplayed = this.monthlyPayments;
    this.totalBudget = this.caseBudget
    this.totalBudgetDisplayed=this.caseBudget;
    this.startCounter(
      this.BudgetTotalCounter.nativeElement,
      0,
      this.totalBudgetDisplayed,
      () => {
        // Callback function to update the displayed values after countdown
        this.totalBudgetDisplayed = this.totalBudgetDisplayed;
      }
    );
    this.budgetSpent = 0;
  }

  initializePayments(){
    this.payments=[]
    if (this.monthlyPayments !== undefined) {
      for (let paymentNo = 1; paymentNo <= this.monthlyPayments; paymentNo++) {
        this.payments.push({
          paymentNo: paymentNo,
          percentage: 0,
          amount: 0,
          isValid: true,
        });
      }

      this.noOfPaymentsDisplayed = this.monthlyPayments;
      this.dataSource.data=this.payments
    } 
  }

  startCounter(element: HTMLElement, startValue: number, endValue: number, onComplete: () => void) {
    const options = {
      startVal: startValue,
      duration: 2,
      onComplete: onComplete, // Execute the callback when the countdown is complete
    };
  
    const countDown = new CountUp(element, endValue, options);
    if (!countDown.error) {
      countDown.start();
    } else {
      console.error(countDown.error);
    }
  }

  loader(){
    this.loading=true;
    setTimeout(()=>this.loading=false,2000);
  }

  onPercentageInput(payment: IPaymentData): void {
    this.emptyField = false;
    this.remainBudget = false;
    this.showAlert = false;
    this.percentagePreview = payment.percentage;
    let currentPercentage = payment.percentage
      ? payment.percentage.toString()
      : '';

    if (
      !payment.percentage ||
      (this.previousPercentage &&
        this.previousPercentage.length > currentPercentage.length)
    ) {
      this.percentagePreview =
        Number(this.previousPercentage) - Number(currentPercentage);
      this.showPopup = false;
    }
    if (!payment.percentage) {
      this.clearPayment(payment);
    } else {
      this.calculateAmount(payment, payment.percentage);
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 1100);
    }

    this.previousPercentage = currentPercentage;
  }

  calculateAmount(payment: IPaymentData, parsedPercentage: number): void {
    if (
      isNaN(parsedPercentage) ||
      parsedPercentage < 0 ||
      parsedPercentage > 100
    ) {
      payment.isValid = false;
      payment.percentage = 0;
    } else {
      let rawAmount = (parsedPercentage / 100) * this.totalBudget;
      payment.amount = Math.round(rawAmount * 100) / 100; // Rounds to 2 decimal places
      payment.isValid = true;
      this.validateBudget();
    }
  }

  clearPayment(payment: IPaymentData): void {
    payment.amount = 0;
    payment.isValid = true;
    this.validateBudget();
  }

  validateBudget(): void {
    let allocatedAmount = 0;
    let paymentsWithZeroValue = 0;
    let allocatedPercentage = 0;

    this.showAlert = false;

    this.payments.forEach((payment) => {
      allocatedAmount += payment.amount;
      if (payment.amount === 0) {
        paymentsWithZeroValue++;
      }
    });
    this.noOfPaymentsDisplayed = paymentsWithZeroValue;
    this.totalBudgetDisplayed = this.totalBudget - allocatedAmount;
    this.startCounter(
      this.BudgetTotalCounter.nativeElement,
      this.totalBudget,
      this.totalBudgetDisplayed,
      () => {
        // Callback function to update the displayed values after countdown
        this.totalBudgetDisplayed = this.totalBudgetDisplayed;
      }
      
    );
    this.budgetSpent = allocatedAmount;
    this.startCounter(
      this.budgetSpentCounter.nativeElement,
      0,
      this.budgetSpent
      ,
      () => {
        // Callback function to update the displayed values after countdown
        this.budgetSpent = this.budgetSpent;
      }
    );
    this.payments.forEach((payment) => {
      allocatedPercentage += Number(payment.percentage);
    });
    this.displayedPercentage = allocatedPercentage;

    if (this.totalBudgetDisplayed < 0) {
      this.showAlert = true;
    }
    this.paymentsCompleted.emit(this.payments);
  }

}
