import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateCase } from 'src/app/core/models/createCase.interface';
export const QuillConfiguration = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    ['link'],
    ['clean'],
  ],
}
@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements OnInit, OnDestroy {
  quillConfiguration = QuillConfiguration
  @Input('updateParentModel') updateParentModel!: (
    part: Partial<ICreateCase>,
    isFormValid: boolean
  ) => void;
  form!: FormGroup;
  showResettingDuration:boolean=false;
  @Input() defaultValues!: Partial<ICreateCase>;
  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, true);
    this.showResetDurationWarning()

    this.form.get('duration')?.valueChanges.subscribe(() => {
      this.resetPaymentMethod();
    });

    this.form.get('durationType')?.valueChanges.subscribe(() => {
      this.resetPaymentMethod();
    });

    this.form.get('budget')?.valueChanges.subscribe(() => {
      this.resetPaymentMethod();
    });


  }

  initForm() {
    this.form = this.fb.group({
      name: [this.defaultValues.name, [Validators.required]],
      nickname: [this.defaultValues.nickname, [Validators.required]],
      caseType: [this.defaultValues.caseType, [Validators.required]],
      budget: [this.defaultValues.budget, [Validators.required, Validators.min(100)]],
      startDate: [this.defaultValues.startDate, [Validators.required , this.futureDateValidator]],
      expiryDate: [this.defaultValues.expiryDate, [Validators.required]],
      duration: [this.defaultValues.duration, [Validators.required]],
      durationType: [this.defaultValues.durationType, [Validators.required]],
      caseAbstract: [this.defaultValues.caseAbstract, [Validators.required,this.minAbstractLength(20)]],
    },  { validators: this.dateValidator });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  futureDateValidator(control:FormControl):ValidationErrors | null {
    const today =new Date();
    //remove time part 
    today.setHours(0,0,0,0);
    const selectedDate = new Date(control.value);
    return selectedDate<today ? {'invalidDate':true} : null;
  }

  resetPaymentMethod(){
    if(this.defaultValues.paymentPlanningMethod !== null){
      this.defaultValues.paymentPlanning = null;
      this.defaultValues.paymentPlanningMethod = null;
    }
  }

  showResetDurationWarning(){
    if(this.defaultValues.paymentPlanning !== null){
      this.showResettingDuration=true
    }
  }

  dateValidator(group: FormGroup): ValidationErrors | null {
    const fromCtrl = group.get('startDate');
    const toCtrl = group.get('expiryDate');

    // Check if both dates are selected
    if (!fromCtrl?.value || !toCtrl?.value) {
      return null; // No validation error if either date is not selected
    }

    const fromDate = new Date(fromCtrl.value);
    const toDate = new Date(toCtrl.value);

    return fromDate > toDate
      ? { issueDateGreater: 'Publish date is greater than expiry date' }
      : null;
  }
  
  minAbstractLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value && control.value.trim().length < minLength) {
        return { minAbstractLength: true };
      }
      return null;
    };
  }
  
  get caseAbstract(){
   return this.form.get('caseAbstract') as FormControl
  }
  checkForm() {
    return !(
      this.form.get('caseName')?.hasError('required') ||
      this.form.get('nickname')?.hasError('required') ||
      this.form.get('caseType')?.hasError('required') ||
      this.form.get('budget')?.hasError('required')  ||
      this.form.get('budget')?.hasError('min')  ||
      this.form.get('startDate')?.hasError('required') ||
      this.form.get('expiryDate')?.hasError('required') ||
      this.form.get('duration')?.hasError('required') ||
      this.form.get('caseAbstract')?.hasError('required') ||
      this.form.get('caseAbstract')?.hasError('minAbstractLength') ||
      this.form.get('durationType')?.hasError('required') ||
      this.form.hasError('issueDateGreater')
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
