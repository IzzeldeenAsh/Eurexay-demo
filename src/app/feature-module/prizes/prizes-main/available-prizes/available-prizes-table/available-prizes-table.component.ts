import { Component,OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IavailablePrizes } from 'src/app/core/models/availabelPrize';
import { IParticipantData } from 'src/app/core/models/participants.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { GetCasesService } from 'src/app/core/services/cases/get-cases.service';
import { PrizesGetService } from 'src/app/core/services/prizes/prizes-get.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
interface CombinedCase {
  budget: number;
  expiryDate: string;
  name: string;
  nickname: string;
  offerStatus: string;
  profilePicBase64: string;
  instituteName: string;
}

@Component({
  selector: 'app-available-prizes-table',
  templateUrl: './available-prizes-table.component.html',
  styleUrls: ['./available-prizes-table.component.scss']
})
export class AvailablePrizesTableComponent implements OnInit, OnDestroy {
  dummy = [
    {
      id: 1,
      name: "First Prize",
      uuid: "123e4567-e89b-12d3-a456-426614174000",
      prizeAbstract: "Description of the first prize",
      requirements: "Some requirements for winning the first prize",
      amount: 1000,
      announcementDate: "2024-05-01",
      submissionEndDate: "2024-04-30",
      status: "Open",
      judges: "Judge 1, Judge 2",
      deliveryMethod: "Mail",
      deliveryInfo: "Address to send the prize",
      publicPrize: true,
      limited: false,
      allowedParticipantNumber: 100,
      participantsNumber: 50,
      externalUrl: "https://example.com/first-prize",
      ownerParticipant: {
        id: 123,
        name: "John Doe",
        email: "john@example.com",
        profilePicBase64: ""
      },
      prizeFiles: [
        { name: "Rules.pdf", url: "https://example.com/rules.pdf" },
        { name: "Image.jpg", url: "https://example.com/image.jpg" }
      ],
      allowedCountries: ["USA", "Canada", "UK"]
    },
    {
      id: 2,
      name: "Second Prize",
      uuid: "223e4567-e89b-12d3-a456-426614174001",
      prizeAbstract: "Description of the second prize",
      requirements: "Some requirements for winning the second prize",
      amount: 500,
      announcementDate: "2024-06-01",
      submissionEndDate: "2024-05-31",
      status: "Closed",
      judges: "Judge 3, Judge 4",
      deliveryMethod: "Email",
      deliveryInfo: "Email address to send the prize",
      publicPrize: true,
      limited: true,
      allowedParticipantNumber: 50,
      participantsNumber: 30,
      externalUrl: "https://example.com/second-prize",
      ownerParticipant: {
        id: 456,
        name: "Jane Smith",
        email: "jane@example.com"
      },
      prizeFiles: [
        { name: "Rules.pdf", url: "https://example.com/rules.pdf" }
      ],
      allowedCountries: ["Australia", "Germany"]
    }
  ]
  private readonly destroy$ = new Subject<void>();
  availablePrizes: any[] = [];
  participantsList: IParticipantData[] = [];
  combinedResults: CombinedCase[] = [];
  showDropdown: boolean = false;
  filterPrizes:IavailablePrizes[]=[];
  loading:boolean=true;

  constructor(
    private _getPrizes: PrizesGetService,
    private _alert: AlertsService,
    private _sharedService: SharedService,
    private router:Router
  ) {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.getAvailablePrizes();
    this._sharedService.refreshMyPrizes$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getAvailablePrizes();
      });
  }
  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }
  viewprofile(event:Event,userName:string | null){
    event.stopPropagation();
    if (userName){
      const user=userName
    window.open(`/user-profile/${user}/up-overview/`, '_blank');
    }
  }
  handelFilter(event: any) {
    this.showDropdown = event.showDropDown;

    this.filterPrizes = this.availablePrizes.filter((cas) => {
        switch (event.status) {
            case 'SUBMITTED':
                return cas.status === 'SUBMITTED';
            case 'UNSUBMITTED':
                return cas.status === 'UNSUBMITTED';
            case 'TAKEN':
                return cas.status === 'TAKEN';
            default:
                return true; // If no status filter is specified, include all cases
        }
    });

    if (event.amount === 'Accending') {
        this.filterPrizes.sort((a: IavailablePrizes, b: IavailablePrizes) => {
            return a.amount - b.amount;
        });
    } else {
        this.filterPrizes.sort((a: IavailablePrizes, b: IavailablePrizes) => {
            return b.amount - a.amount;
        });
    }

    // Add logic for expiryDate filtering
    if (event.announcementDate) {
        switch (event.announcementDate) {
            case 'latest':
                this.filterPrizes.sort((a: any, b: any) => {
                    let dateA = new Date(a.announcementDate).getTime();
                    let dateB = new Date(b.announcementDate).getTime();
                    return dateB - dateA; // sort by descending
                });
                break;
            case 'earlest':
                this.filterPrizes.sort((a: any, b: any) => {
                    let dateA = new Date(a.announcementDate).getTime();
                    let dateB = new Date(b.announcementDate).getTime();
                    return dateA - dateB; // sort by ascending
                });
                break;
        }
    }
}

getAvailablePrizes() {
      this.availablePrizes = this.dummy
        this.filterPrizes=this.availablePrizes
        this.sortCaseByDateStart();
    // this._getPrizes.getAvailablePrizes().subscribe((res) => {
    //   if (res.status.code === '0' && res['result']) {
    //     this.availablePrizes = res['result'];
    //     this.filterPrizes=this.availablePrizes
    //     this.sortCaseByDateStart();
    //     this.loading=false
    //   } else {
    //     this._alert.error('', `${res.status.description}`);
    //     this.loading=false
    //     return;
       
    //   }
    // });
  }
  sortCaseByDate() {
    this.availablePrizes.sort((a: any, b: any) => {
      let dateA = new Date(a.announcementDate).getTime();
      let dateB = new Date(b.announcementDate).getTime();
      return dateA - dateB;
    });
  }
  sortCaseByDateStart() {
    this.availablePrizes.sort((a: any, b: any) => {
      let dateA = new Date(a.submissionEndDate).getTime();
      let dateB = new Date(b.submissionEndDate).getTime();
      return dateB - dateA;
    });
  }
  view(caseUUID: string) {
    this.router.navigateByUrl(`summary-prize/prizeSummary/${caseUUID}?available=true`)
  }
  viewProfile(event:Event,username:any){
    event.stopPropagation();
    event.preventDefault();
    this.router.navigate([`/profile/${username}/up-overview`])
    
  }
}
