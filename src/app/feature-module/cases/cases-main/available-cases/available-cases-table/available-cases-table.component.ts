import { Component,OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IAvailableCases } from 'src/app/core/models/availableCases';
import { IParticipantData } from 'src/app/core/models/participants.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { GetCasesService } from 'src/app/core/services/cases/get-cases.service';
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
  selector: 'app-available-cases-table',
  templateUrl: './available-cases-table.component.html',
  styleUrls: ['./available-cases-table.component.scss'],
})
export class AvailableCasesTableComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  availableCases: IAvailableCases[] = [];
  participantsList: IParticipantData[] = [];
  combinedResults: CombinedCase[] = [];
  showDropdown: boolean = false;
  filterCases:IAvailableCases[]=[];
  loading:boolean=true;
  constructor(
    private _getCases: GetCasesService,
    private _alert: AlertsService,
    private _sharedService: SharedService,
    private router:Router,
    private ActivatedRoute:ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.getAvailableCase();
    this.refreshCaes();
    this.getQueryParams()


  }

  getQueryParams() {
    this.ActivatedRoute.queryParams.subscribe(params => {
        let filteredCases = this.availableCases;
        // Apply filters
        if (params['status']) {
          console.log('params',params['status'])
          filteredCases = filteredCases.filter(cas => {
            switch (params['status']) {
                case 'SUBMITTED':
                    return cas.caseOffer?.offerStatus === 'SUBMITTED' || 
                    cas.caseOffer?.offerStatus === 'CONTRACT_GENERATED';
                case 'UNSUBMITTED':
                    return cas.caseOffer === null;
                case 'TAKEN':
                    return cas.caseOffer?.offerStatus === 'TAKEN';
                case 'REJECTED':
                    return cas.caseOffer?.offerStatus === 'REJECTED';
                default:
                    return true; // If no status filter is specified, include all cases
            }
        });
        }
        // Store a copy of filtered cases for sorting
        let sortedCases = [...filteredCases];
        // Apply sorting
        if (params['budget']) {
            const sortOrder = params['budget'] === 'Accending' ? 1 : -1;
            sortedCases.sort((a, b) => (a.budget - b.budget) * sortOrder);
        }
        if (params['expiryDate']) {
            const sortOrderDate = params['expiryDate'] === 'earliest' ? 1 : -1;
            sortedCases.sort((a, b) => {
                let dateA = new Date(a.expiryDate).getTime();
                let dateB = new Date(b.expiryDate).getTime();
                return (dateA - dateB) * sortOrderDate;
            });
        }

        if (params['reset']) {
            this.sortCaseByModificationDate();
            sortedCases = this.availableCases;
        }

        this.filterCases = sortedCases;
    });
}




  refreshCaes(){
    this._sharedService.refreshMyCases$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getAvailableCase();
      });
  }

  searchFilter(searchTerm:any, list= this.filterCases){
    if (searchTerm) {
      this.filterCases = this.filterCases.filter(
        (caseItem) =>
          caseItem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          caseItem.nickname
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    } else {
      this.getQueryParams()
    }
  }


  toggleDropdown(){
    this.showDropdown = !this.showDropdown;
  }
  viewprofile(event:Event,userName:string | null){
    event.stopPropagation();
    if (userName){
      const user=userName
    window.open(`/profile/${user}/up-overview/`, '_blank');
    }
  }


  getAvailableCase() {
    this._getCases.getAvailableCases().subscribe((res) => {
      if (res.status.code === '0' && res['result']) {
        this.availableCases = res['result'];
        this.filterCases=this.availableCases
        this.sortCaseByModificationDate();
        this.loading=false
        this.getQueryParams();
      } else {
        this._alert.error('', `${res.status.description}`);
        this.loading=false
        return;
       
      }
    });
  }
  sortCaseByDate() {
    this.availableCases.sort((a: any, b: any) => {
      let dateA = new Date(a.expiryDate).getTime();
      let dateB = new Date(b.expiryDate).getTime();
      return dateA - dateB;
    });
  }
  sortCaseByModificationDate() {
    
    this.availableCases.sort((a: any, b: any) => {
      let dateA = new Date(a.modifiedDate).getTime();
      let dateB = new Date(b.modifiedDate).getTime();
      return dateB - dateA;
    });
  }
  sortCaseByDateStart() {
    this.availableCases.sort((a: any, b: any) => {
      let dateA = new Date(a.startDate).getTime();
      let dateB = new Date(b.startDate).getTime();
      return dateB - dateA;
    });
  }

  viewProfile(event:Event,username:any){
    event.stopPropagation();
    event.preventDefault();
    this.router.navigate([`/profile/${username}/up-overview`])
    
  }
  view(caseUUID: string) {
    this.router.navigate([ `/summary/summary/${caseUUID}`] , {
      queryParams: { available: 'true' }
    })
  }
}
