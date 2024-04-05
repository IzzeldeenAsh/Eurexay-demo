import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { GetCasesService } from 'src/app/core/services/cases/get-cases.service';
import Swal from 'sweetalert2';
import { OffersService } from 'src/app/core/services/offers/offers.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  @ViewChild('timeline', { static: true }) timelineContainer!: ElementRef;

  loading: boolean = true;
  caseUUID: string = '';
  currentCase!: any;
  // timeline!: Timeline;
  viewSumamry: boolean = false;
  data: any;
  options: any;

  availableCaseMode: boolean = false;
  isSubmitted = false;
  isProcessing = false;
  buttonText = 'Submit Offer';

  constructor(
    private _caseService: GetCasesService,
    private _alert: AlertsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _offer: OffersService,
    private _sharedService: SharedService,
    private _notifications: NotificationsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      if (param.get('caseUUID')) {
        this.caseUUID = param.get('caseUUID');
        console.log('CaseUUID', this.caseUUID);
        this.viewSumamry = true;
      }
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['available'] === 'true') {
        this.getAvailableCase();
      } else {
        this.getCases();
      }
    });

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['print'] === 'true') {
        window.print();
      }
    });
  }

  downloadFile(data: any) {
    const splittedName = data.attachmentName.split('.');
    const extension = splittedName[splittedName.length - 1];
    const name = splittedName[0];
    let mimeType = '';

    // Define MIME types based on file extensions
    switch (extension.toLowerCase()) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'json':
        mimeType = 'application/json';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      case 'jpg':
      case 'jpeg':
        mimeType = 'image/jpeg';
        break;
      default:
        mimeType = 'application/octet-stream'; // Default to binary data
    }

    const src = `data:text/csv;base64,${data.attachmentContent}`;
    const link = document.createElement('a');
    link.href = src;
    link.download = `${name}.${extension}`;
    link.click();
    link.remove();
  }

  private initializeTimeline(): void {
    this.getTimelineData();
    this.getOptions();
    // this.timeline = new Timeline(
    //   this.timelineContainer.nativeElement,
    //   this.data,
    //   this.options
    // );
  }
  getTimelineData() {
    const timelineData = this.currentCase.paymentPlanning.map((task: any) => ({
      id: task.id,
      content: task.name,
      start: task.startDate,
      end: task.endDate,
    }));
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
  getCases() {
    this._caseService
      .getCaseByID(this.caseUUID)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.status.code === '0' && res['result']) {
            this.currentCase = res['result'];
            this.loading = false;
            if (this.currentCase.paymentPlanningMethod === 'DELIVERABLES') {
              this.initializeTimeline();
            }
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
  getAvailableCase() {
    this._caseService
      .getAvailableCaseByID(this.caseUUID)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.status.code === '0' && res['result']) {
            this.currentCase = res['result'];
            this.availableCaseMode = true;
            this.loading = false;
            //  if(this.currentCase.paymentPlanningMethod === 'DELIVERABLES'){
            //   this.initializeTimeline();

            //  }
            if (this.currentCase.caseOffer) {
              if(  this.currentCase.caseOffer.offerStatus ==='CONTRACT_GENERATED' ||this.currentCase.caseOffer.offerStatus === 'SUBMITTED'){
                this.isSubmitted = true;
                this.buttonText = 'Submitted';
              }
             
            }
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
      Swal.fire({
        title: 'Confirm Submission?',
        text: 'Please review all details carefully before proceeding. Do you wish to continue?',
        showCancelButton: true,
        confirmButtonColor: '#009042',
        cancelButtonColor: '#d6d6d6',
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          this.isProcessing = true;
          // Simulate an asynchronous action (like an API call)
          this._offer
            .submitOffer(this.caseUUID)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: (res: any) => {
                if (res.status.code === '0') {
                  this.isProcessing = false;
                  this.isSubmitted = true;
                  this.buttonText = 'Submitted';
                  this._sharedService.notifyAvailableCasesTable();
                } else {
                  this._alert.error('', `${res.status.description}`);
                  this.isProcessing = false;
                  this.isSubmitted = false;
                  this.buttonText = 'Submit Offer';
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

  getUserNotifications() {
    this._notifications
      .getNotificaitons()
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          if (data.status.code === '0' && data.result) {
            this._sharedService.setNotificationData(data['result']);
          }
        },
        error: (err) => {},
      });
  }
}
