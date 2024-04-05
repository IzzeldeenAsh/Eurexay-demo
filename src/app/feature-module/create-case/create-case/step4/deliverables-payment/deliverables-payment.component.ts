import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, MaxLengthValidator, ValidatorFn, Validators } from '@angular/forms';
import { Deliverable, IDelivarblePayment } from 'src/app/core/models/deliverablePayments';
import Swal from 'sweetalert2';

interface ITask {
  name: string;
  amount: number;
  percentage: number;
  description?: string; // Add this property
}

@Component({
  selector: 'app-deliverables-payment',
  templateUrl: './deliverables-payment.component.html',
  styleUrls: ['./deliverables-payment.component.scss']
})

export class DeliverablesPaymentComponent implements OnInit, OnDestroy {
  @Output() paymentsCompleted: EventEmitter<any> = new EventEmitter();
  @Input() paymentsList!:any;
  @Input() caseBudget!:number;
  constructor(
    private fb: FormBuilder,
  ){}

  @ViewChild('casesCounter', { static: true }) casesCounter!: ElementRef;
  @ViewChild('budgetSpentCounter', { static: true })
  budgetSpentCounter!: ElementRef;
  @ViewChild('PercentageCounter', { static: true })
  PercentageCounter!: ElementRef;

  amountFromPercentage: any;
  deliveryForm!: FormGroup;
  loading: boolean = false;
  showAlert: boolean = false;
  validPercentage: boolean = true;
  remainBudget = false;
  invalidTaskName!: string;
  totalBudget!: number;
  totalBudgetDisplayed!: number;
  budgetSpent: number = 0;
  percentageCounterDisplay: number = 0;
  tasksList: ITask[] = [];

  ngOnInit(): void {
    this.initializeDeliverableForm()
   this.initParameters()
  }

  initializeDeliverableForm() {
    this.deliveryForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            this.uniqueRequirementNameValidator(this.tasksList),
          ],
        ],
        percentage: [
          null,
          [
            Validators.required,
            Validators.min(1),
            Validators.max(100),
            Validators.pattern('^[0-9]*$'),
          ],
        ],
        amount: [''],
        description: ['', [Validators.required, this.minAbstractLength(10),this.maxDescriptionLength(500)]],
      }
    );
  }

   maxDescriptionLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const description = control.value;
      if (description && description.length > maxLength) {
        return { 'maxLengthExceeded': { maxLength: maxLength } };
      }
      return null;
    };
  }

  

  uniqueRequirementNameValidator(tasksList: any[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const name = control.value;

      // Check if name is already in the tasksList
      const isDuplicate = tasksList.some((task) => task.name === name);

      return isDuplicate ? { duplicatename: true } : null;
    };
  }

  minAbstractLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.value && control.value.trim().length < minLength
        ? { minAbstractLength: true }
        : null;
    };
  }
  
  initParameters(){
    this.totalBudget = this.caseBudget
    this.totalBudgetDisplayed=this.caseBudget;
    this.startCounter(
      this.casesCounter.nativeElement,
      0,
      this.totalBudgetDisplayed,
      () => {
        // Callback function to update the displayed values after countdown
        this.totalBudgetDisplayed = this.totalBudgetDisplayed;
      }
    );
    this.budgetSpent = 0;
    this.percentageCounterDisplay = 0
   if(this.paymentsList && this.paymentsList.length > 0){
    this.tasksList = this.paymentsList
    console.log('paymentsList',this.paymentsList);
    let allocatedSpentBudget = 0
    let allocatedPercentage=0;
   this.paymentsList.forEach((paymant:Deliverable)=>{
    allocatedSpentBudget += paymant.amount
    allocatedPercentage +=paymant.percentage
   })
   this.totalBudgetDisplayed = allocatedSpentBudget;
   this.budgetSpent = this.totalBudget - allocatedSpentBudget;
   this.percentageCounterDisplay=allocatedPercentage
   }
  }

  startCounter(element: HTMLElement, startValue: number, endValue: number, onComplete: () => void) {
    const options = {
      startVal: startValue,
      duration: 2,
      onComplete: onComplete, // Execute the callback when the countdown is complete
    };
  }

  getAmount(event: any) {
    this.amountFromPercentage =
      (parseFloat(event.target?.value) / 100) * this.totalBudget;
    if (isNaN(this.amountFromPercentage)) {
      this.amountFromPercentage = 0;
    }
  }

  addRequirement() {
    this.remainBudget = false;
    if (
      this.deliveryForm.valid &&
      !(this.amountFromPercentage > this.totalBudgetDisplayed)
    ) {
      this.amountFromPercentage = 0;
      const task = this.deliveryForm.value;
      this.processAndAddTask(task, parseFloat(task.percentage));
    }
  }

  private processAndAddTask(task: ITask, parsedPercentage: number): void {
    if (this.isValidPercentage(parsedPercentage)) {
      this.setTaskAmount(task, parsedPercentage);
      this.addToTasksList(task);
      this.validateBudget();
    }
  }

  private isValidPercentage(parsedPercentage: number): boolean {
    if (
      isNaN(parsedPercentage) ||
      parsedPercentage < 0 ||
      parsedPercentage > 100
    ) {
      this.validPercentage = false;
      return false;
    }
    this.validPercentage = true;
    return true;
  }

  private setTaskAmount(task: ITask, parsedPercentage: number): void {
    let rawAmount = (parsedPercentage / 100) * this.totalBudget;
    task.amount = Math.round(rawAmount * 100) / 100; // Rounds to 2 decimal places
  }

  private addToTasksList(task: any): void {
    this.tasksList.push({
      name: task.name,
      percentage: task.percentage,
      amount: task.amount,
      description: task.description,
    });
    let allocatedPercentage = 0;
    this.tasksList.forEach((task) => {
      allocatedPercentage += Number(task.percentage);
    });
    this.percentageCounterDisplay = allocatedPercentage;
    this.deliveryForm.reset();

    this.paymentsCompleted.emit(this.tasksList);
  }


  validateBudget(): void {
    let allocatedAmount = 0;
    this.showAlert = false;
    this.tasksList.forEach((task) => {
      allocatedAmount += task.amount;
    });
    this.totalBudgetDisplayed = this.totalBudget - allocatedAmount;
    this.startCounter(
      this.casesCounter.nativeElement,
      this.totalBudget,
      this.totalBudgetDisplayed,
      () => {
        // Callback function to update the displayed budgetSpent value after countdown
        this.totalBudgetDisplayed = this.totalBudgetDisplayed;
      }
    );
    this.budgetSpent = allocatedAmount;
    this.startCounter(
      this.budgetSpentCounter.nativeElement,
      0,
      this.budgetSpent,
      () => {
        // Callback function to update the displayed budgetSpent value after countdown
        this.budgetSpent = this.budgetSpent;
      }
    );
    if (this.totalBudgetDisplayed < 0) {
      this.showAlert = true;
    }
  }

  get percentage() {
    return this.deliveryForm.get('percentage') as FormControl;
  }
  get name() {
    return this.deliveryForm.get('name') as FormControl;
  }

  get description() {
    return this.deliveryForm.get('description') as FormControl;
  }

  deleteRequirement(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        let task = this.tasksList[index];
        this.totalBudgetDisplayed += this.totalBudget * (task.percentage / 100);
        this.startCounter(
          this.casesCounter.nativeElement,
          0,
          this.totalBudgetDisplayed,
          () => {
            // Callback function to update the displayed budgetSpent value after countdown
            this.totalBudgetDisplayed = this.totalBudgetDisplayed;
          }
        );
        this.percentageCounterDisplay -= task.percentage;
        this.budgetSpent -= this.totalBudget * (task.percentage / 100);
        this.startCounter(
          this.budgetSpentCounter.nativeElement,
          0,
          this.budgetSpent,
          () => {
            // Callback function to update the displayed budgetSpent value after countdown
            this.budgetSpent = this.budgetSpent;
          }
        );
        this.tasksList.splice(index, 1);
        this.validateBudget()
      }
    });
  }
  
  ngOnDestroy(): void {
  }

}
