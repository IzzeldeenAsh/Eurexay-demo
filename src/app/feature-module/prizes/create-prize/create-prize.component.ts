import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';
import { ICreatePrize, inits } from 'src/app/core/models/create-prize';
import { PrizeCreateService } from 'src/app/core/services/prizes/prize-create.service';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { PrizesGetService } from 'src/app/core/services/prizes/prizes-get.service';
import { IPrize } from 'src/app/core/models/prizes.interface';
class PrizeInfo {
  name!: string;
  uuid!: string;
  prizeAbstract!: string;
  requirements!: string;
  amount!: number;
  announcementDate!: string;
  submissionEndDate!: string;
  judges: any=[];
  deliveryMethod!: string;
  deliveryInfo!: string;
  publicPrize!: boolean;
  limited!: boolean;
  allowedParticipantNumber!: number| null;
  externalUrl!: string;
  allowedCountries!: string[] | null;

}
@Component({
  selector: 'app-create-prize',
  templateUrl: './create-prize.component.html',
  styleUrls: ['./create-prize.component.scss'],
})
export class CreatePrizeComponent implements OnInit {
  @Input() caseById!: any;

  private readonly destroy$ = new Subject<void>();

  formsCount = 4;
  prizeUUID: string = '';
  DialogTitle: string='Create Prize';
  currentPrize!:IPrize;
  isNewPrize = true;
  loading:boolean=false;
  generatingLoading:boolean=false;
  newCaseUid: string = '';
  EditMode:boolean=false;
  savedSucessfully:boolean=false;
  account$: BehaviorSubject<ICreatePrize> = new BehaviorSubject<ICreatePrize>(
    inits
  );
  currentStep$: BehaviorSubject<number> = new BehaviorSubject(1);
  isCurrentFormValid$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private unsubscribe: Subscription[] = [];
  savingPrize: boolean=false;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private _prizeCreate: PrizeCreateService,
    private _alert: AlertsService,
    private router: Router,
    private _getPrize:PrizesGetService
  ) {}

  ngOnInit(): void {
    this.checkUUID();
    if (this.prizeUUID) {
      this.EditMode=true
      this.getPrizeByID();
      this.DialogTitle = 'Edit Prize';
    } else {
      this.account$.next(inits)
      this.EditMode=false
      this.prizeUUID = uuidv4();
    }
  }


  patchEditValues(){
   this.account$.value.judges = this.currentPrize.judges.split(',');
   this.account$.value.prizeAmount = this.currentPrize.amount;
    this.account$.value.resultDate = this.currentPrize.announcementDate;
    this.account$.value.submissionDate = this.currentPrize.submissionEndDate;
    this.account$.value.delivery = this.currentPrize.deliveryMethod;
    if( this.account$.value.delivery === 'EMAIL'){
      this.account$.value.email = this.currentPrize.deliveryInfo
    }
    if( this.account$.value.delivery === 'ON_SITE'){
      this.account$.value.address = this.currentPrize.deliveryInfo
    }
    if( this.account$.value.delivery === 'POST_OFFICE'){
      this.account$.value.postOfficeNumber = this.currentPrize.deliveryInfo
    }

    this.account$.value.isPublic = this.currentPrize.publicPrize;
    this.account$.value.limitParticipants = this.currentPrize.limited;
    this.account$.value.countriesSelected=this.currentPrize.allowedCountries;
    this.account$.value.externalURL = this.currentPrize.externalUrl;
    this.account$.value.participantsNumber=this.currentPrize.allowedParticipantNumber;
  }


  checkUUID() {
    this.route.paramMap.subscribe((param: any) => {
      if (param.get('prizeUUID')) {
        this.prizeUUID = param.get('prizeUUID');
      }
    });
  }

  getPrizeByID() {
    this.loading = true;
    this._getPrize
      .getPrizeByID( this.prizeUUID)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          if (res.status.code === '0' && res['result']) {
            this.currentPrize = res['result'];
            this.patchEditValues();
            this.loading = false;
          } else {
            this._alert.error('', `${res.status.message}`);
            this.loading = false;
          }
        },
        error: (error: any) => {
          this._alert.error('', 'An error occurred.');
          this.loading = false;
        },
      });
  }

  updateAccount = (part: Partial<ICreatePrize>, isFormValid: boolean) => {
    const currentAccount = this.account$.value;
    const updatedAccount = { ...currentAccount, ...part };
    this.account$.next(updatedAccount);
    this.isCurrentFormValid$.next(isFormValid);
  };

  nextStep() {
    const nextStep = this.currentStep$.value + 1;
    if(this.EditMode) this.save()
    if (nextStep >= this.formsCount) {


      Swal.fire({
        title: 'Ready to Publish?',
        text: 'Once you publish, there is no way to edit the prize. Are you sure you want to proceed?',
        showCancelButton: true,
        confirmButtonColor: '#009042',
        cancelButtonColor: '#d6d6d6',
        confirmButtonText: 'Publish',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          this.generatePrize(true);
        }
      });

      return;
    }
    this.currentStep$.next(nextStep);
  }

  publishPrize(){
    this._prizeCreate.publishPrize(this.prizeUUID)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      {
        next : (res)=>{
          if( res.status.code === '0'){
            this.snackBar.open('Prize Publised Successfully', '', {
              duration: 3000,
              panelClass: ['green-snackbar'],
            });
            this.router.navigate(['prizes/my-prizes'])
          }else{
            this._alert.error('', `${res.status.description}`);
          }
        },
        error : (err)=>{
        }
      }
    )
  }

  postSavePrize(formData:any , isPublish:boolean){
    this._prizeCreate.createPrize(formData)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      {
        next : (res)=>{
          if( res.status.code === '0'){
            this.snackBar.open('Prize Saved Successfully', '', {
              duration: 3000,
              panelClass: ['green-snackbar'],
            });
            if(isPublish){
              this.publishPrize()
            }
            this.savingPrize =false;
            this.savedSucessfully=true;
          }else{
            this._alert.error('', `${res.status.description}`);
            this.savingPrize =false
          }
        },
        error : (err)=>{
          this.savingPrize =false
        }
      }
    )
  }

  generatePrize(isPublic:boolean){
    this.generatingLoading=true;
    this.savingPrize =true
    let judgesString = this.account$.value.judges.join(', ');
    console.log(' this.account$.value', this.account$.value)
    const prizeInfo = new PrizeInfo();
    console.log('prizeInfo',prizeInfo)
    prizeInfo.name = this.account$.value.prizeTitle;
    prizeInfo.uuid = this.prizeUUID;
    prizeInfo.prizeAbstract = this.account$.value.prizAbstract;
    prizeInfo.requirements = this.account$.value.prizeRequirements;
    prizeInfo.amount = this.account$.value.prizeAmount;
    prizeInfo.announcementDate = this.account$.value.resultDate;
    prizeInfo.submissionEndDate = this.account$.value.submissionDate;
    prizeInfo.judges = judgesString;
    prizeInfo.deliveryMethod = this.account$.value.delivery;
    prizeInfo.publicPrize = this.account$.value.isPublic;
    prizeInfo.limited = this.account$.value.limitParticipants;
    if(prizeInfo.limited === false){
      prizeInfo.allowedParticipantNumber = null
    }else{
      prizeInfo.allowedParticipantNumber = this.account$.value.participantsNumber;
    }
    if (prizeInfo.deliveryMethod === 'ON_SITE') {
      prizeInfo.deliveryInfo = this.account$.value.address;
    } else if (prizeInfo.deliveryMethod === 'POST_OFFICE') {
      prizeInfo.deliveryInfo = this.account$.value.postOfficeNumber;
    } else if (prizeInfo.deliveryMethod === 'EMAIL') {
      prizeInfo.deliveryInfo = this.account$.value.email;
    } else {
      prizeInfo.deliveryInfo = 'none';
    }



    prizeInfo.externalUrl = this.account$.value.externalURL;
    prizeInfo.allowedCountries = this.account$.value.countriesSelected;

    const formData = new FormData();

    formData.append('requestBody', JSON.stringify(prizeInfo));
    let prizeFilesInfo: any = {};
    let i = 0;

    for (const file of this.account$.value.attachments) {
      formData.append('prizeFiles', file);
      let certificatUniqueName = file.name;
      prizeFilesInfo[certificatUniqueName] = `Prize certificate ${i + 1}`;
    }

    if(this.account$.value.attachments.length > 0){
      formData.append('prizeFilesInfo', JSON.stringify(prizeFilesInfo));
    }

    this.postSavePrize(formData,isPublic)

  }


  prevStep() {
    const prevStep = this.currentStep$.value - 1;
    if( this.EditMode){
      this.getPrizeByID();
     }
    if (prevStep === 0) {
      return;
    }
    this.currentStep$.next(prevStep);
  }
  save() {
    this.generatePrize(false);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
