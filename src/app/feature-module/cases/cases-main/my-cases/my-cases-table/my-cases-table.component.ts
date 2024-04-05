import { Component, OnDestroy, OnInit,ElementRef, ViewChild, HostListener } from '@angular/core';
import { ICase } from 'src/app/core/models/createCase.interface';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { GetCasesService } from 'src/app/core/services/cases/get-cases.service';

@Component({
  selector: 'app-my-cases-table',
  templateUrl: './my-cases-table.component.html',
  styleUrls: ['./my-cases-table.component.scss'],
})
export class MyCasesTableComponent implements OnInit, OnDestroy {


  private readonly destroy$ = new Subject<void>();
  ownerCases: ICase[] = [];
  displayedCases: ICase[] = [];
  itemsPerPage = 10; // Number of items to display per page
  currentPage = 1; // Current page number
  sortByBudgetAscending: boolean = false; // Default to descending
  sortByStatusAscending: boolean = false; // Default to descending
  sortByExpiryDateAscending: boolean = false;
  sortByStartDateAscending: boolean = false;
  searchTerm: string = '';
  filteredCases: any[] = [];
  statusArray:string[]=[]
  showFilter:boolean = false;
  statusList:string[] = [];
  loader:boolean=false;
  activeTab:any='ALL'
  constructor(
    private router: Router,
    private _getCases:GetCasesService,
  ) {}




  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnInit(): void {
    this.getOwnerCases();
  }

  setTab(tab:any) {
    this.activeTab = tab;
    if(tab && tab !=='ALL'){
      this.filteredCases= this.ownerCases.filter((c:ICase)=>c.status === tab)
     } else if (tab === 'ALL'){
      this.filteredCases= this.ownerCases;
      this.sortCaseByDate()
     }
  }

  activeClass(tab:any) {
    return tab === this.activeTab ? 'show active' : '';
  }

  getOwnerCases() {
    this.loader=true
    this._getCases.getOwnerCases()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.ownerCases = data['result'];
       this.getUniqueStatus()
        this.filteredCases = this.ownerCases;
        this.loader=false
        this.sortCaseByDate()
      });
  }

  getUniqueStatus(){
    this.ownerCases.forEach((c:ICase) => {
      if(!this.statusList.includes(c.status)){
        this.statusList.push(c.status);
      }
    })
  }

  sortCaseByDate() {
    this.filteredCases.sort((a, b) => {
      let dateA = new Date(a.modifiedDate).getTime();
      let dateB = new Date(b.modifiedDate).getTime();
      return dateA - dateB;
    });
  }

  viewProfile(event: Event, userName: string) {
    const user=userName
    window.open(`/user-profile/${user}/up-overview/`, '_blank');
    event.stopPropagation();
  }

  toggleSortCasesByBudget() {
    this.sortByBudgetAscending = !this.sortByBudgetAscending; // Toggle direction
    this.filteredCases.sort((a, b) => {
      if (this.sortByBudgetAscending) {
        return a.budget - b.budget; // Ascending order
      }
      return b.budget - a.budget; // Descending order
    });
  }

  toggleSortCasesByStatus() {
    this.sortByStatusAscending = !this.sortByStatusAscending; // Toggle direction
    this.filteredCases.sort((a, b) => {
      if (a.status === 'PUBLISHED' && b.status !== 'PUBLISHED') {
        return this.sortByStatusAscending ? 1 : -1;
      }
      if (b.status === 'PUBLISHED' && a.status !== 'PUBLISHED') {
        return this.sortByStatusAscending ? -1 : 1;
      }
      return 0; // If both have the same status, retain their positions
    });
  }
  toggleSortCasesByExpiryDate() {
    this.sortByExpiryDateAscending = !this.sortByExpiryDateAscending;
    this.filteredCases.sort((a, b) => {
      let dateA = new Date(a.expiryDate).getTime();
      let dateB = new Date(b.expiryDate).getTime();
      if (this.sortByExpiryDateAscending) {
        return dateA - dateB; // Ascending order
      }
      return dateB - dateA; // Descending order
    });
  }
  toggleSortCasesByPublishDate() {
    this.sortByStartDateAscending = !this.sortByStartDateAscending;
    this.filteredCases.sort((a, b) => {
      let dateA = new Date(a.startDate).getTime();
      let dateB = new Date(b.startDate).getTime();
      if (this.sortByStartDateAscending) {
        return dateA - dateB; // Ascending order
      }
      return dateB - dateA; // Descending order
    });
  }
  summary(uuid: string) {
    this.router.navigate([`/summary/summary/${uuid}`]);
  }


  applyFilter() {
    if (this.searchTerm) {
      this.filteredCases = this.ownerCases.filter(
        (caseItem) =>
          caseItem.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          caseItem.nickname
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCases = [...this.ownerCases];
    }
  }

  editCase(caseUUID:string){
    this.router.navigate(['/create-case/edit-case', caseUUID]);
  }

  toggleFilter(){
    this.showFilter=!this.showFilter;
  }
}
