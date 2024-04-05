import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, takeUntil } from 'rxjs';
import { ICaseManagementRecord } from 'src/app/core/models/case-managements-records.interface';
import { CaseManagementService } from 'src/app/core/services/case-management/case-management.service';
import { Unsub } from 'src/app/core/services/unsub/unsub';

@Component({
  selector: 'app-case-management-list',
  templateUrl: './case-management-list.component.html',
  styleUrls: ['./case-management-list.component.scss']
})
export class CaseManagementListComponent extends Unsub implements OnInit{

  managementRecords:ICaseManagementRecord[] =[];
  loaderSubject= new BehaviorSubject<boolean>(false);
  errorMessage:string =''

  constructor(private _caseManagementRecordsService : CaseManagementService){super()}

  ngOnInit(): void {this.getCasesManagementRecords();}

  getCasesManagementRecords():ICaseManagementRecord[]{
    this.loaderSubject.next(true);
    this._caseManagementRecordsService.getAllCasesManagement()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      {
        next:( res:ICaseManagementRecord[])=>{
          if(res && res.length > 0){
            this.managementRecords = res;
            this.loaderSubject.next(false)
          }
        },
        error:(err)=>{
          this.errorMessage = "Error loading case management"
          this.loaderSubject.next(false);
        }
      }
    )
    return this.managementRecords;
  }

}
