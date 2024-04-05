import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ICaseManagementRecord } from 'src/app/core/models/case-managements-records.interface';

@Component({
  selector: 'app-case-management-records',
  templateUrl: './case-management-records.component.html',
  styleUrls: ['./case-management-records.component.scss']
})
export class CaseManagementRecordsComponent {
  @Input() managementRecords:ICaseManagementRecord[]=[];
  @Input() loading:boolean = false;
  @ViewChild('dt1') dt1: Table | undefined;

  constructor(private router:Router){}

  clear(table: Table) {
    table.clear();
}
applyFilterGlobal($event: any, stringVal: any) {
  this.dt1!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}
navigateToDetails(itemUUID:string):void{
  this.router.navigate([`/finance/invoice-summary/${itemUUID}`])
}

navigateToParticipant(username:string):void{
  this.router.navigate([`/user-profile/${username}/up-overview`])
}

navigateTocaseManage(id:string):void{
  this.router.navigate([`/case-manage/case-management/${id}`])
}
}
