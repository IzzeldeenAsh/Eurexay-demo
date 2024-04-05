import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, take, takeUntil } from 'rxjs';
import {  ICase, ICaseRequirement, ICreateCase, inits } from 'src/app/core/models/createCase.interface';
import { CreateCaseService } from 'src/app/core/services/cases/create-case.service';
import { v4 as uuidv4 } from 'uuid';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import Swal from 'sweetalert2';
import { ParticipantsService } from 'src/app/core/services/participants/participants.service';
import { PaymentsService } from 'src/app/core/services/payments/payments.service';
import { Payment } from 'src/app/core/models/perodicPayments';
import { Deliverable, IDelivarblePayment } from 'src/app/core/models/deliverablePayments';
import { ActivatedRoute } from '@angular/router';
import { GetCasesService } from 'src/app/core/services/cases/get-cases.service';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
export class CaseInfoGenerate {
  uuid!: string;
  name!: string;
  caseAbstract!: string;
  budget!: number | null;
  startDate!: string | null;
  expiryDate!: string | null;
  duration!: number | null;
  durationType!: "MONTH" | "DAY" | "YEAR" ;
  caseType!:"DESCRIPTIVE" | "ILLUSTRATIVE" | "CUMULATIVE" | "CRITICAL_INSTANCE";
  nickname!: string | null;
}

class Requirements {
  uuid!: string;
  caseRequirements!: any;
}

class Deliverabls{
  caseUUID!: string;
  deliverables!: Deliverable[];
  
}
class PerodicPayments {
  caseUUID!: string;
  planningMethod!:any;
  payments!: Payment[];
}

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.scss'],
})
export class CreateCaseComponent implements OnInit  , OnDestroy{
  private readonly destroy$ = new Subject<void>();
  
  formsCount = 5;
  newCaseUUID:string='';
  newCase:boolean=true;
  saving:boolean=false;
  currentCaseEdit!:ICase;
  loading:boolean=false;
  account$: BehaviorSubject<ICreateCase> =
    new BehaviorSubject<ICreateCase>(inits);
  currentStep$: BehaviorSubject<number> = new BehaviorSubject(1);
  isCurrentFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private unsubscribe: Subscription[] = [];

  constructor(
    private _caseService:CreateCaseService,
    private _participants:ParticipantsService,
    private snackBar: MatSnackBar,
    private _payment: PaymentsService,
    private _alert:AlertsService,
    private route:ActivatedRoute,
    private _notifications:NotificationsService,
    private _getCases:GetCasesService,
    private _sharedService:SharedService
  ) {}

  ngOnInit(): void {
   this.checkUUID()
   this.getUserNotifications()
  }

  checkUUID(){
    this.route.paramMap.subscribe((param:any)=>{
      if(param.get('caseUUID')){
        this.newCaseUUID= param.get('caseUUID');
        this.newCase=false;
        this.getCaseById()
       }else{
        this.newCaseUUID = uuidv4();
        this.account$.next({
          uuid: '',
          name: '',
          caseAbstract: null,
          budget: null,
          startDate: null,
          expiryDate: null,
          duration: 1,
          durationType: 'MONTH' ,
          caseType: 'DESCRIPTIVE',
          nickname: '',
          caseRequirements:[],
          paymentPlanningMethod: 'MONTHLY',
          paymentPlanning: null,
          ownerUsername:'',
          participantUsername: null,
          allowedParticipants: null,
        })
       }
    })
  }

  getCaseById(){
    this.loading=true
    this._getCases.getCaseByID(this.newCaseUUID).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res:any) => {
        if (res.status.code === '0' && res['result']) {
          this.currentCaseEdit = res['result'];
          this.setEditDate()
          this.loading=false
        } else {
          this._alert.error('', `${res.status.message}`);
          this.loading=false
        }
      },
      error: (error:any) => {
        this._alert.error('', 'An error occurred.');
        this.loading=false
      }
    });
  }
  
  setEditDate(){
  //  this.account$.next()
  inits.name = this.currentCaseEdit.name
  inits.uuid = this.currentCaseEdit.uuid
  inits.caseAbstract = this.currentCaseEdit.caseAbstract
  inits.budget = this.currentCaseEdit.budget
  inits.startDate = this.currentCaseEdit.startDate
  inits.expiryDate = this.currentCaseEdit.expiryDate
  inits.duration = this.currentCaseEdit.duration
  inits.durationType = this.currentCaseEdit.durationType
  inits.caseType = this.currentCaseEdit.caseType
  inits.nickname = this.currentCaseEdit.nickname
  inits.caseRequirements = this.currentCaseEdit.caseRequirements
  inits.paymentPlanningMethod = this.currentCaseEdit.paymentPlanningMethod
  inits.paymentPlanning = this.currentCaseEdit.paymentPlanning
  inits.ownerUsername = this.currentCaseEdit.ownerUsername
  inits.participantUsername = this.currentCaseEdit.participantUsername
  inits.allowedParticipants = this.currentCaseEdit.allowedParticipants
  if(inits.paymentPlanningMethod === 'MONTHLY' || inits.paymentPlanningMethod === 'QUARTERLY'){
    inits.paymentPlanning = inits.paymentPlanning.map((obj:any) => ({ ...obj, isValid: true }));
  }
  this.account$.next(inits);
  }

  updateAccount = (part: Partial<ICreateCase>, isFormValid: boolean) => {
    const currentAccount = this.account$.value;
    const updatedAccount = { ...currentAccount, ...part };
    this.account$.next(updatedAccount);
    this.isCurrentFormValid$.next(isFormValid);
  };

  nextStep() {
    if(this.currentStep$.value === 1){
      this.createCaseInfo(false);
    } else if (this.currentStep$.value  === 2 ){
      if (this.account$.value.caseRequirements?.length === 0) {
        Swal.fire({
          title: 'No Requirements Added',
          text: 'Do you want to proceed ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#bebebe',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Next Step',
        }).then((result) => {
          if (result.isConfirmed) {
            this.goToNextStep()
          }
        });
      }else{
        this.caseCreateAPI(false);
      }
    } else if (this.currentStep$.value  === 3 ){
      this.saveParticipants(false)
    }else if (this.currentStep$.value  === 4 ){
      if ( this.account$.value.paymentPlanningMethod === 'QUARTERLY' || this.account$.value.paymentPlanningMethod === "MONTHLY"){
        this.savePerodicPayments(false);
      }else{
        this.saveDeliverablesPayment(false)
      }
    }
   
  }

  goToNextStep(){
    const nextStep = this.currentStep$.value + 1;
    if (nextStep > this.formsCount) {
      return;
    }
    this.currentStep$.next(nextStep);
  }

  prevStep() {
    const prevStep = this.currentStep$.value - 1;
    if (prevStep === 0) {
      return;
    }
    this.currentStep$.next(prevStep);
  }
  save(){
    if(this.currentStep$.value === 1){
      this.createCaseInfo(true)
    } else if (this.currentStep$.value  === 2 ){
      this.caseCreateAPI(true)
    } else if (this.currentStep$.value  === 3 ){
      this.saveParticipants(true)
    }else if (this.currentStep$.value  === 4 ){
      if ( this.account$.value.paymentPlanningMethod === 'QUARTERLY' || this.account$.value.paymentPlanningMethod === "MONTHLY"){
        this.savePerodicPayments(true);
      } else {
          this.saveDeliverablesPayment(true)
      }
    } 
  }

  getUserNotifications(){
    this._notifications.getNotificaitons().pipe(take(1))
    .subscribe({
      next: (data) => {
        if (data.status.code === '0' && data.result) {
          this._sharedService.setNotificationData(data['result'])
        }
      },
      error: (err) => {
      },
    });
  }

  createCaseInfo(isDraft:boolean){
    this.saving=true
    const caseInfo = new CaseInfoGenerate();
      caseInfo.uuid = this.newCaseUUID;
    caseInfo.name = this.account$.value.name
    caseInfo.budget = this.account$.value.budget
    caseInfo.startDate =this.account$.value.startDate
    caseInfo.nickname = this.account$.value.nickname
    caseInfo.expiryDate =this.account$.value.expiryDate
    caseInfo.durationType = this.account$.value.durationType
    caseInfo.duration = this.account$.value.duration
    caseInfo.caseType = this.account$.value.caseType
    caseInfo.caseAbstract =this.account$.value.caseAbstract
    this._caseService.createCaseInfo(caseInfo).subscribe({
      next: (res) => {
        if (res.status.code === '0') {
          if (isDraft) {
            this.snackBar.open('Draft saved successfully', '', {
              duration: 3000,
              panelClass: ['green-snackbar'],
            });
          }else{
            this.goToNextStep()
          }
          this.saving = false;
        } else {
          this._alert.error('', `${res.status.description}`);
          this.saving = false;
        }
      },
      error: (error) => {
        this.saving = false;
        // Handle error, you may want to log it or perform additional actions.
      },
    });
  }

  caseCreateAPI(isDraft: boolean) {
    this.saving=true
    if (isDraft) {
      this.snackBar.open('Draft saved successfully', '', {
        duration: 3000,
        panelClass: ['green-snackbar'],
      });
      this.saving=false
    }else{
      this.saving=false
      this.goToNextStep()
    }
  }
  saveParticipants(isDraft:boolean) {
    this.saving=true
    // Extract selected usernames from the participants
    const caseUUID =  this.newCaseUUID;
    // Determine the case UUID to use based on whether newCaseUUID is available
  
      this._participants.choosenParticipants({ caseUUID, usernames: this.account$.value.allowedParticipants }).subscribe({
        next: (res:any) => {
          if (res.status.code === '0') {
            if (isDraft) {
              this.snackBar.open('Draft saved successfully', '', {
                duration: 3000,
                panelClass: ['green-snackbar'],
              });
            }else{
      this.goToNextStep()

            }
            this.saving=false
          } else {
            this._alert.error('', `${res.status.description}`);
            this.saving=false
            return;
          }
        },
        error: (error:any) => {
          this._alert.error('', 'An error occurred.');
          this.saving=false
        }
      })
    
  }
  savePerodicPayments(isDraft:boolean){
    this.saving=true
    const perodicPayment = new PerodicPayments()
    perodicPayment.caseUUID = this.newCaseUUID;
    perodicPayment.planningMethod = this.account$.value.paymentPlanningMethod
    const newArray = this.account$.value.paymentPlanning.map(({ isValid, ...rest }:any) => rest);
    perodicPayment.payments = newArray
    this._payment.postPeriodicPayment(perodicPayment).subscribe({
      next: (res: any) => {
        if (res.status.code === '0') {
          if (isDraft) {
            this.snackBar.open('Draft saved successfully', '', {
              duration: 3000, // Duration in milliseconds
              panelClass: ['green-snackbar'],
            });
            this.saving=false
          } else {
        this.goToNextStep()
          }
          this.saving=false
        } else {
          this.saving=false
          this._alert.error('', `${res.status.description}`);
          return;
        }
      },
      error: (error: any) => {
        this.saving=false
        this._alert.error('', 'An error occurred.');
      },
    });
  }
  saveDeliverablesPayment(isDraft:boolean){
    this.saving =true;
    const deliverablesPayments:IDelivarblePayment = new Deliverabls();
    deliverablesPayments.caseUUID = this.newCaseUUID
    deliverablesPayments.deliverables = this.account$.value.paymentPlanning
    this._payment.postDeliverablePayment(deliverablesPayments).subscribe({
      next: (res: any) => {
        if (res.status.code === '0') {
          if (isDraft) {
            this.snackBar.open('Draft saved successfully', '', {
              duration: 3000, // Duration in milliseconds
              panelClass: ['green-snackbar'],
            });
            this.saving =false;
          } else {
            this.goToNextStep()
          }
          this.saving =false;
        } else {
          this._alert.error('', `${res.status.description}`);
          this.saving =false;
          return;
        }
      },
      error: (error: any) => {
        this._alert.error('', 'An error occurred.');
        this.saving =false;
      },
    });
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
