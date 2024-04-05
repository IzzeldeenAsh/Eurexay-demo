import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import Swal, { SweetAlertResult } from 'sweetalert2';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { PrizesGetService } from 'src/app/core/services/prizes/prizes-get.service';
import { IPrize } from 'src/app/core/models/prizes.interface';
@Component({
  selector: 'app-prize-summary',
  templateUrl: './prize-summary.component.html',
  styleUrls: ['./prize-summary.component.scss'],
})
export class PrizeSummaryComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  selectedFileName: string = '';

  loading: boolean = true;
  prizeUUID: string = '';
  currentPrize!: IPrize;
  viewSumamry: boolean = false;
  data: any;
  options: any;
  availableCaseMode: boolean = false;
  isSubmitted = false;
  isProcessing = false;
  buttonText = 'Participate';
  participatedInPrizes: IPrize[] = [];
  whoParicipated: any;
  constructor(
    private _prizeGet: PrizesGetService,
    private _alert: AlertsService,
    private activatedRoute: ActivatedRoute,
    private _sharedService: SharedService
  ) {}
  ngOnInit(): void {
    this.getUUID();
    this.availablePrizeMode();
    this.printPrizeMode();
  }

  getUUID() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      if (param.get('prizeUUID')) {
        this.prizeUUID = param.get('prizeUUID');
        this.viewSumamry = true;
      }
    });
  }

  availablePrizeMode() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['available'] === 'true') {
        this.getAvailablePrize();
      } else {
        this.getPrizeByUUID();
      }
    });
  }

  printPrizeMode() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['print'] === 'true') {
        window.print();
      }
    });
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.selectedFileName = selectedFile.name;
    } else {
      this.selectedFileName = '';
    }
  }
  getPrizeByUUID() {
    this._prizeGet
      .getPrizeByID(this.prizeUUID)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.status.code === '0' && res['result']) {
            this.currentPrize = res['result'];
            this.loading = false;
          } else {
            this.loading = false;
            this._alert.error('', `${res.status.message}`);
          }
        },
        error: (error) => {
          this.loading = false;
          this._alert.error('', 'An error occurred.');
        },
      });
  }

  getAvailablePrize() {
    this._prizeGet
      .getPrizeByID(this.prizeUUID)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.status.code === '0' && res['result']) {
            this.currentPrize = res['result'];
            this.availableCaseMode = true;
            this.loading = false;
          } else {
            this.loading = false;
            this._alert.error('', `${res.status.message}`);
          }
        },
        error: (error) => {
          this._alert.error('', 'An error occurred.');
        },
      });
  }

  printPage() {
    window.print();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSubmit(event: Event): void {
    event.preventDefault();
    if (this.isSubmitted === false) {
      this.submiteAlert().then((result) => {
        if (result.isConfirmed) {
          this.isProcessing = true;
          // Simulate an asynchronous action (like an API call)
          this._prizeGet
            .participateForPrize(this.prizeUUID)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: (res: any) => {
                if (res.status.code === '0') {
                  this.isProcessing = false;
                  this.isSubmitted = true;
                  this.buttonText = 'Participated';
                  this._sharedService.notifyAvailablePrizesTable();
                } else {
                  this._alert.error('', `${res.status.description}`);
                  this.isProcessing = false;
                  this.isSubmitted = false;
                  this.buttonText = 'Participate';
                  return;
                }
              },
              error: (error: any) => {
                this._alert.error('', 'An error occurred.');
                this.isProcessing = false;
              },
            });
        }
      });
    } else {
      return;
    }
  }

  submiteAlert(): Promise<SweetAlertResult<any>> {
    return Swal.fire({
      title: 'Confirm Submission?',
      text: 'Please review all details carefully before proceeding. Do you wish to continue?',
      showCancelButton: true,
      confirmButtonColor: '#009042',
      cancelButtonColor: '#d6d6d6',
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
    });
  }
    //   checkParticipation(){
  //     let hasMatch = false;

  //   for (const prize of this.participatedInPrizes) {
  //   if (prize.name === this.currentPrize.name) {
  //     hasMatch = true;
  //     break;
  //   }
  // }

  // if (hasMatch) {
  //   this.isSubmitted=true;
  //   this.buttonText = 'Participated';
  // } else {
  // }
  //   }

  // getOptions() {
  //   this.options = {
  //     stack: true,
  //     editable: false,
  //     selectable: false,
  //     height: '350px',
  //     timeAxis: {
  //       step: 2,
  //       scale: 'day',
  //     },

  //   };
  // }


  // getWhoParicipatedInthisPrize(prizeUUID:string){
  // this._prizeGet.getWhoParicipatedInThisPrize(prizeUUID).pipe(takeUntil(this.destroy$)).subscribe(
  //   {
  //     next:res=>{
  //      if(res.status.code === '0' && res['result']){
  //       this.whoParicipated = res['result']
  //      }
  //     }
  //   }
  // )
  // }


}
