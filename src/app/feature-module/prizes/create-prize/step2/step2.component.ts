import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreatePrize } from 'src/app/core/models/create-prize';
import { IPrize } from 'src/app/core/models/prizes.interface';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component  implements OnInit {
  @Input() prizeEdit!:IPrize;
  @Input('updateParentModel') updateParentModel!: (
    part: Partial<ICreatePrize>,
    isFormValid: boolean
  ) => void;
  form!: FormGroup;
  name: any = ''; // The input field's model
  nameList: string[] | undefined = []; // List of names

 
  @Input() defaultValues!: Partial<ICreatePrize>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.updateParentModel({}, this.checkForm());
    if(this.prizeEdit){
      this.nameList = this.prizeEdit.judges.split(',');
      this.defaultValues.judges =this.nameList;
    }else{
    if(this.defaultValues.judges?.length){
      this.nameList = this.defaultValues.judges
    }
    }
    this.updateParentModel(this.form.value,this.checkForm());
    
  }
  inputName(event:Event){
   const name = (event.target) as HTMLInputElement
   this.name = name.value
  }
  addName() {
   if(this.name !==''){
    this.nameList?.push(this.name);;
    this.form.get('judges')?.patchValue(this.nameList);
    this.name = ''; // Clear the input field
   }
  }

  removeName(index: number) {
    this.nameList?.splice(index, 1);
    this.form.get('judges')?.patchValue(this.nameList)
  }
  initForm() {
    this.form = this.fb.group({
      resultDate: [
        this.prizeEdit ? this.prizeEdit.announcementDate :
        this.defaultValues.resultDate,
         [Validators.required],
       ],
      submissionDate: [
        this.prizeEdit ? this.prizeEdit.submissionEndDate :
       this.defaultValues.submissionDate,
        [Validators.required,this.submissionDateValidator],
      ],
      prizeAmount: [   this.prizeEdit ? this.prizeEdit.amount : this.defaultValues.prizeAmount, [Validators.required]],
      delivery: [   this.prizeEdit ? this.prizeEdit.deliveryMethod :this.defaultValues.delivery, [Validators.required]],
      judges : [ this.prizeEdit ?  this.prizeEdit.judges.split(',') :  this.defaultValues.judges],
      address: [         this.prizeEdit && this.prizeEdit.deliveryMethod ==='ON_SITE' ? this.prizeEdit.deliveryInfo :
        this.defaultValues.address,
       
      ],
      
      email: [
        this.prizeEdit && this.prizeEdit.deliveryMethod ==='EMAIL' ? this.prizeEdit.deliveryInfo :
        this.defaultValues.email,
      ],
      postOfficeNumber: [
        this.prizeEdit && this.prizeEdit.deliveryMethod ==='POST_OFFICE' ? this.prizeEdit.deliveryInfo :
        this.defaultValues.postOfficeNumber,
      ],
    },  { validators: this.dateValidator });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  submissionDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = selectedDate.getTime() - currentDate.getTime();
    const minimumDifference = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (timeDifference < minimumDifference) {
      return { 'minSubmissionDate': true };
    }

    return null;
  }


  dateValidator(group: FormGroup): ValidationErrors | null {
    const fromCtrl = group.get('submissionDate');
    const toCtrl = group.get('resultDate');

    // Check if both dates are selected
    if (!fromCtrl?.value || !toCtrl?.value) {
      return null; // No validation error if either date is not selected
    }

    const fromDate = new Date(fromCtrl.value);
    const toDate = new Date(toCtrl.value);

    return fromDate > toDate
      ? { issueDateGreater: 'Submission should be less than result date' }
      : null;
  }
 
  checkForm() {
    const deliveryMethod = this.form.get('delivery')?.value;
  
    let isFormValid = !(
      this.form.get('submissionDate')?.hasError('required') ||
      this.form.get('submissionDate')?.hasError('minSubmissionDate') ||
      this.form.get('resultDate')?.hasError('required') ||
      this.form.get('prizeAmount')?.hasError('required') ||
      this.nameList?.length === 0
    );
  
    if (deliveryMethod === 'EMAIL') {
      isFormValid = isFormValid && this.form.get('email')?.value !== null && this.form.get('email')?.value !== '';
    } else if (deliveryMethod === 'POST_OFFICE') {
      isFormValid = isFormValid && this.form.get('postOfficeNumber')?.value !== null && this.form.get('postOfficeNumber')?.value !== '';
    } else if (deliveryMethod === 'ON_SITE') {
      isFormValid = isFormValid && this.form.get('address')?.value !== null && this.form.get('address')?.value !== '';
    }
  
    return isFormValid;
  }

  get delivery(){
    return this.form.get('delivery') as FormControl
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
