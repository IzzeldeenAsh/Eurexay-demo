import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject,  take,  takeUntil } from 'rxjs';
import { IContract } from 'src/app/core/models/contract.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { ContractsService } from 'src/app/core/services/contracts/contracts.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import Swal from 'sweetalert2';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';
@Component({
  selector: 'app-contracts-main',
  templateUrl: './contracts-main.component.html',
  styleUrls: ['./contracts-main.component.scss'],
})
export class ContractsMainComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  loading: boolean = false;
  @ViewChild('timeline', { static: true }) timelineContainer!: ElementRef;
  caseUUID: string = '';
  currentContract!: IContract;
  // timeline!: Timeline;
  data: any;
  options: any;
  textToDisplay = '';
  fullText = '';
  typingSpeed = 100; // in milliseconds
  cursor = '|';
  showOwnerInfo: boolean = false;
  uasername!: string;
  showParticipantInfo: boolean = false;
  ownerSigned:boolean=false;
  participangSigned:boolean=false;
  ownerSignButtonText:string ='Sign Contract';
  ParticipantSignButtonText:string ='Sign Contract';
  isSignedOwner: boolean =false;
  isSignedParticipant: boolean =false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private _contracts: ContractsService,
    private _alert: AlertsService,
    private _sharedService: SharedService,
    private userData:CurrentUserService,
    private _notifications:NotificationsService,
  ) {}
  ngOnInit(): void {
    this.typeText(0);
    this.getUserNotifications()
    this.getUserName();
    this.activatedRoute.paramMap.subscribe((param: any) => {
      if (param.get('caseUUID')) {
        this.caseUUID = param.get('caseUUID');
        this.loading = true;
        this.getContractById();
        
      }
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['amParti44'] === 'true') {
        this.showParticipantInfo = false;
        this.showOwnerInfo = true;
        this.fullText = 'Sign Contract to begin';
      } else if (params['amOw44'] === 'true') {
        this.showOwnerInfo = false;
        this.showParticipantInfo = true;
        this.fullText = 'Sign the contract to be sent to participant.';
      }
    });
  }
  typeText(index: number) {
    if (index < this.fullText.length) {
      this.textToDisplay += this.fullText[index];
      setTimeout(() => {
        this.typeText(index + 1);
      }, this.typingSpeed);
    } else {
      this.cursor = '';
    }
  }

  getUserNotifications(){
    this._notifications.getNotificaitons().pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (data) => {
        if (data.status.code === '0' && data.result) {
          this._sharedService.updateTopBarNotify()
          this._sharedService.setNotificationData(data['result'])
        }
      },
      error: (err) => {
      },
    });
  }

  getUserName() {
    this.userData
    .currentUserName$
    .pipe(take(1))
    .subscribe((username:string)=>{
      this.uasername = username;
    })
  }


 
  // private initializeTimeline(): void {
  //   this.getTimelineData();
  //   this.getOptions();
  //   this.timeline = new Timeline(
  //     this.timelineContainer.nativeElement,
  //     this.data,
  //     this.options
  //   );
  // }
  getTimelineData() {
    const timelineData = this.currentContract.businessCase.paymentPlanning.map(
      (task: any) => ({
        id: task.id,
        content: task.name,
        start: task.startDate,
        end: task.endDate,
      })
    );
    // this.data = new DataSet(timelineData);
  }
  getOptions() {
    this.options = {
      stack: true,
      editable: false,
      selectable: false,
      height: '350px',
      timeAxis: {
        step: 2,
        scale: 'day',
      },
    };
  }

  isProcessing = false;

  signContractOwner(event: Event): void {
  
    event.preventDefault();
   if(this.ownerSigned === false){
    if (
      this.uasername === this.currentContract.businessCase.ownerUser.username
    ) {
      // I am owner of the business case
      Swal.fire({
        title: 'Sign Contract?',
        text: `By proceeding, the system will sign the contract and send it to selected participant to complete contracting. Do you wish to continue?`,
        showCancelButton: true,
        confirmButtonColor: '#009042',
        cancelButtonColor: '#d6d6d6',
        confirmButtonText: 'Sign',
        cancelButtonText: 'Cancel'
    }).then((result: any) => {
    if(result.isConfirmed){
      this.isProcessing = true;

      this._contracts
      .ownerContractSigning(
        this.currentContract.id,
        this.currentContract.uuid
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          if (res.status.code === '0') {
            this.isProcessing = false;
              this.isSignedOwner = true;
              this.ownerSignButtonText = 'Contract signed';
              this.getContractById()
          } else {
            this._alert.error('', `${res.status.description}`);
            this.isProcessing = false;
            this.isSignedOwner = false;
            this.ownerSignButtonText = 'Sign Contract';
            return;
          }
        },
        error: (error: any) => {
          this._alert.error('', 'An error occurred.');
          this.isProcessing = false;
        },
      });
    }
    })
    }
   }
  

   
  }
 

  signContractParticipant(event: Event): void {
    event.preventDefault();
    if(this.participangSigned === false){
      if (
        this.uasername === this.currentContract.participant.userDto.username
      ) {
        // I am owner of the business case
        Swal.fire({
          title: 'Sign Contract?',
          text: `By proceeding, you confirm your agreement to handle this case as outlined in the contract. Would you like to continue?`,
          showCancelButton: true,
          confirmButtonColor: '#009042',
          cancelButtonColor: '#d6d6d6',
          confirmButtonText: 'Sign',
          cancelButtonText: 'Cancel'
      }).then((result: any) => {
       if(result.isConfirmed){
    this.isProcessing = true;

        this._contracts
        .participantContractSigning(
          this.currentContract.id,
          this.currentContract.uuid
        )
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res: any) => {
            
            if (res.status.code === '0') {
              this.isProcessing = false;
                this.isSignedParticipant = true;
                this.ParticipantSignButtonText = 'Contract signed';
                this.getContractById();
                Swal.fire({
                 
                  icon: "success",
                  title: "Contract signed",
                  text:'Please wait for owner payment confirmation.',
                  confirmButtonColor: '#0778b9',
                  showConfirmButton: true,
              });
                // this.router.navigate(['/cases-main/contracts'], { queryParams: { index: 1 } });
            } else {
              this._alert.error('', `${res.status.description}`);
              this.isProcessing = false;
              this.isSignedParticipant = false;
              this.ParticipantSignButtonText = 'Sign Contract';
              return;
            }
          },
          error: (error: any) => {
            this._alert.error('', 'An error occurred.');
            this.isProcessing = false;
          },
        });
       }
      })
      }
     
    }
   
   
  }

  printPage() {
    // if (this.timeline !== undefined) {
    //   this.timeline.fit();
    //   this.timeline.redraw();
    // }
    setTimeout(() => {
      window.print();
    }, 500);
  }

  getContractById() {
    this._contracts
      .getContractByID(this.caseUUID)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          if (res.status.code === '0' && res['result']) {
            this.currentContract = res['result'];
            this.loading = false;
            switch(this.currentContract.status) {
              case "OWNER_ACCEPTANCE":
                this.ownerSigned = true;
                this.isSignedOwner = true;
                break;
              case "PENDING_OWNER_PAYMENT":
                this.participangSigned = true;
                this.isSignedParticipant = true;
                break;
              case "FINALIZED":
                this.ownerSigned = true;
                this.isSignedOwner = true;
                this.participangSigned = true;
                this.isSignedParticipant = true;
                break;
              default:
                // Handle other cases if needed
                break;
            }
            if(this.ownerSigned){
             this.ownerSignButtonText = 'Contract Singed'
            }
            if(this.participangSigned){
              this.ParticipantSignButtonText = 'Contract Singed'
             }
            if (
              this.currentContract.businessCase.paymentPlanningMethod ===
                'DELIVERABLES' &&
              this.loading === false
            ) {
              // this.initializeTimeline();
            }
          } else {
            this._alert.error('', `${res.status.message}`);
            this.loading = false;
          }
        },
        error: (error: any) => {
          this._alert.error('', 'An error occurred.');
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
