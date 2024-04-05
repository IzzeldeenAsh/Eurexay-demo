import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { IUser } from 'src/app/core/models/userInfo.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
import { ParticipantsService } from 'src/app/core/services/participants/participants.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();
  canEditProfile: boolean = false;
  navLinks!: any[];
  userName!:string | null;
  activeLinkIndex = -1;
  userData!: IUser;
  loading: boolean = true;
  constructor(
    private router: Router,
    private _alert: AlertsService,
    private _userData:CurrentUserService,
    private route:ActivatedRoute,
    private _getParticipant:ParticipantsService,
    private _notifications:NotificationsService,
    private _sharedService:SharedService
  ) {
  
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
 

  ngOnInit(): void {
    this.navLinksArray();
    this.getUsernameFromURL();
    this.navLinks=[]
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
    this.getUserNotifications();
    this.refreshProfilePicture()
  }

  refreshProfilePicture(){
    this._sharedService.refreshMyProfilePic$.subscribe(data=>{
      if(this.userName){
        this.getParticipant(this.userName)
       }
    })
  }

  getUsernameFromURL(){
    this.route.paramMap.subscribe((params) => {
      if(params.get('userName')){
        this.userName=params.get('userName');
       if(this.userName){
        this.getParticipant(this.userName)
       }
      
      } 
    });
  }

  getUserNotifications(){
    this._notifications.getNotificaitons().pipe(take(1))
    .subscribe({
      next: (data) => {
        if (data.status.code === '0' && data.result) {
          this._sharedService.setNotificationData(data['result'])
          this._sharedService.updateTopBarNotify()
        }
      },
      error: (err) => {
      },
    });
  }

  getParticipant(username:string){
    this.loading = true;
    this._getParticipant.getParticipantByUsername(username).pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (res.status.code === '0' && res['result']) {
          this.userData = res['result'];
          this.getUserInfo();
          
          this.loading = false;
      } else {
        this._alert.error('', `${res.status.description}`);
        this.loading = false;
        return;
      }
    });
  }

  navLinksArray(){
    this.navLinks = [
      {
        label: 'Overview',
        link: './up-overview',
        index: 0,
      },
      {
        label: 'Documents',
        link: './up-documents',
        index: 1,
      },
      {
        label: 'Account Details',
        link: './account-details',
        index: 2,
      },
    ];
    

  }

  getUserInfo() {
   if(this.userName){
    this._userData
    .currentUserName$
    .pipe(take(1))
    .subscribe((username:string) => {
    this.canEditProfile = this.userName === username;
   
    })
  }

  }
}       
