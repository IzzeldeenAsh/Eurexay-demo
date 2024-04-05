import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { take, takeUntil } from 'rxjs';
import { ICaseManagementRecord } from 'src/app/core/models/case-managements-records.interface';
import { INavLinks } from 'src/app/core/models/navLinks.interface';
import { CaseManagementService } from 'src/app/core/services/case-management/case-management.service';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { Unsub } from 'src/app/core/services/unsub/unsub';

@Component({
  selector: 'app-management-main',
  templateUrl: './management-main.component.html',
  styleUrls: ['./management-main.component.scss']
})
export class ManagementMainComponent extends Unsub implements OnInit {
  caseUUID: string='';
  loading:boolean=false;
  navLinks: INavLinks[];
  currentCase!:ICaseManagementRecord;
  activeTab: any = 'Case Details';
  constructor(
    private _notifications:NotificationsService,
    private _sharedService:SharedService,
    private activatedRoute:ActivatedRoute,
    private sanitizer: DomSanitizer,
    private caseManage:CaseManagementService
    ){
      super();
      this.activatedRoute.params.subscribe(params=>{
        this.caseUUID = params['caseUUID'];
      })
      this.navLinks = [

        {
          label: 'Case Details',
          link: `case-details/${this.caseUUID}`,
          index: 0,
          icon: this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
          <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
        </svg>`)
        },
        {
          label: 'Messages',
          link: `messages/${this.caseUUID}`,
          index: 1,
          icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z" fill="#292D32"/>
          <path d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z" fill="#292D32"/>
          </svg>
          `)
        }

      ];
  }

  ngOnInit(): void {
    this.getUserNotifications();
    this.getCaseManageByUUID(this.caseUUID);
  }

  getCaseManageByUUID(uuid: string):void{
    this.caseManage.getCasesManagementById(this.caseUUID)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: res=>{
        this.currentCase = res
      },
      error: err=>{
        console.log('err',err)
      }
    })
  }

  getUserNotifications(){
    this._notifications.getNotificaitons().pipe(take(1))
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
  
  setActiveTab(index:number){
    this.activeTab = this.navLinks[index].label;
    // if(index === 1){
    //   setTimeout(()=>{
    //    this.notifications.unseenNotificationsCount['CONTRACT_SIGNED_BY_PARTICIPANT'] = 0
    //   },1500)
    //  }
  }

}
