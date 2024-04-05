import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateCase } from 'src/app/core/models/createCase.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.scss'],
})
export class Step4Component implements OnInit {
  paymentMethods: any;
  selectedPaymentOption!: string;
  caseDuration!: any;
  durationType!: any; // Values: 'year', 'month', 'day'
  monthlyPayments!: number;
  quarterlyPayments!: number;
  caseBudget!: any;
  validMonthlyPayments: boolean = false;
  validQuarterlyPayments: boolean = false;
  validDeliverablesList: boolean = false;
  monthlyPaymentsList: any[] = [];
  quarterlyPaymentsList: any[] = [];
  deliverablesListArray: any[] = [];
  paymentsList: any[] = [];
  @Input('updateParentModel') updateParentModel!: (
    part: Partial<ICreateCase>,
    isFormValid: boolean
  ) => void;
  form!: FormGroup;
  @Input() defaultValues!: Partial<ICreateCase>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {
    this.paymentMethods = [
      { id: '1', label: 'Monthly', value: '1' },
      { id: '2', label: 'Quarterly', value: '2' },
      { id: '3', label: 'Deliverables', value: '3' },
    ];
  }

  ngOnInit() {
    this.getParameters();
    this.initForm();
    this.updateParentModel({}, this.checkForm());
    this.checkValidity()
  }

  checkValidity() {
    if( this.defaultValues.paymentPlanningMethod !== null  && this.defaultValues.paymentPlanning !== null){
        let perodicPayments = this.defaultValues.paymentPlanning;
        const totalPercentage = perodicPayments.reduce(
          (sum: any, payment: any) => sum + Number(payment.percentage),
          0
        );
        const emptyAmount = perodicPayments.some(
          (payment: any) => payment.amount === 0
        );
        if (
          totalPercentage === 100 &&
          emptyAmount === false 
        ) {
          this.updateParentModel({
            paymentPlanning : this.defaultValues.paymentPlanning,
            paymentPlanningMethod : this.defaultValues.paymentPlanningMethod
          }, true);
        }
      } 
   
  }

  getParameters() {
    this.paymentsList = this.defaultValues.paymentPlanning;
    this.caseDuration = this.defaultValues.duration;
    this.durationType = this.defaultValues.durationType;
    this.caseBudget = this.defaultValues.budget;
    if (this.defaultValues.paymentPlanningMethod === 'MONTHLY') {
      this.selectedPaymentOption = '1';
    } else if (this.defaultValues.paymentPlanningMethod === 'QUARTERLY') {
      this.selectedPaymentOption = '2';
    } else if (this.defaultValues.paymentPlanningMethod === 'DELIVERABLES') {
      this.selectedPaymentOption = '3';
    } else {
      this.selectedPaymentOption = '1';
    }
    this.calculatePayments();
  }

  calculatePayments() {
    let totalMonths: number;
    if (this.durationType === 'YEAR') {
      totalMonths = this.caseDuration * 12; // Convert years to months
    } else if (this.durationType === 'MONTH') {
      totalMonths = this.caseDuration; // Already in months
    } else if (this.durationType === 'DAY') {
      totalMonths = Math.ceil(this.caseDuration / 30); // Convert days to months (assuming 30 days per month)
    } else {
      return;
    }

    this.monthlyPayments = totalMonths;
    this.quarterlyPayments = Math.ceil(totalMonths / 3);
  }

  onPaymentOptionChange(event: Event) {
    this.selectedPaymentOption = (event.target as HTMLInputElement).value;
    if (this.selectedPaymentOption === '1') {
      this.form.get('paymentPlanningMethod')?.setValue('MONTHLY');
      this.form.get('paymentPlanning')?.setValue(null);
      this.paymentsList=[]
    } else if (this.selectedPaymentOption === '2') {
      this.form.get('paymentPlanningMethod')?.setValue('QUARTERLY');
      this.form.get('paymentPlanning')?.setValue(null);
      this.paymentsList=[]
    } else {
      this.form.get('paymentPlanningMethod')?.setValue('DELIVERABLES');
      this.form.get('paymentPlanning')?.setValue(null);
      this.paymentsList=[]
    }
  }

  initForm() {
    this.form = this.fb.group({
      paymentPlanning: [this.defaultValues.paymentPlanning],
      paymentPlanningMethod: [
        this.defaultValues.paymentPlanningMethod,
        [Validators.required],
      ],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    if (this.selectedPaymentOption === '1') {
      return this.validMonthlyPayments;
    } else if (this.selectedPaymentOption === '2') {
      return this.validQuarterlyPayments;
    } else {
      return this.validDeliverablesList
    }
  }

  monthlyPaymentsArray(monthlyPaymentsArray: any) {
    this.monthlyPaymentsList = monthlyPaymentsArray;

    const totalPercentage = this.monthlyPaymentsList.reduce(
      (sum, payment) => sum + Number(payment.percentage),
      0
    );
    const emptyAmount = this.monthlyPaymentsList.some(
      (payment) => payment.amount === 0
    );

    if (totalPercentage === 100 && emptyAmount === false) {
      this.validMonthlyPayments = true;
    } else {
      this.validMonthlyPayments = false;
    }
    this.form.get('paymentPlanning')?.setValue(this.monthlyPaymentsList);
    this.form.get('paymentPlanningMethod')?.setValue('MONTHLY');
  }
  
  quarteltyPaymentsArray(monthlyPaymentsArray: any) {
    this.quarterlyPaymentsList = monthlyPaymentsArray;

    const totalPercentage = this.quarterlyPaymentsList.reduce(
      (sum, payment) => sum + Number(payment.percentage),
      0
    );
    const emptyAmount = this.quarterlyPaymentsList.some(
      (payment) => payment.amount === 0
    );

    if (totalPercentage === 100 && emptyAmount === false) {
      this.validQuarterlyPayments = true;
    } else {
      this.validQuarterlyPayments = false;
    }
    this.form.get('paymentPlanning')?.setValue(this.quarterlyPaymentsList);
    this.form.get('paymentPlanningMethod')?.setValue('QUARTERLY');
  }

  
  deliverablesList(tasksList:any){
    this.deliverablesListArray =  tasksList
    const totalPercentage = this.deliverablesListArray.reduce(
      (sum, task) => sum + Number(task.percentage),
      0
    );
    const emptyAmount = this.deliverablesListArray.some(
      (task) => task.amount === 0
    );
    if (totalPercentage === 100 && emptyAmount === false) {
      this.validDeliverablesList = true;
    } else {
      this.validDeliverablesList = false;
    }
    this.form.get('paymentPlanning')?.setValue(this.deliverablesListArray);
    this.form.get('paymentPlanningMethod')?.setValue('DELIVERABLES');
  }


  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
