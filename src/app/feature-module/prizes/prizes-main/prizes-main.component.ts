import {  Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { INotifiactions } from 'src/app/core/models/noticiations';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { NotificationsService } from 'src/app/core/services/notifications/notifications.service';
@Component({
  selector: 'app-prizes-main',
  templateUrl: './prizes-main.component.html',
  styleUrls: ['./prizes-main.component.scss']
})
export class PrizesMainComponent implements OnInit  , OnDestroy {
  private readonly destroy$ = new Subject<void>();
  offersList: any;
  offersCount: any;
  // ownerCases:ICase[]=[]
  navLinks: any[];
  activeLinkIndex = -1;
  notifications!:INotifiactions;


constructor(private router: Router, private _notifications:NotificationsService,   private sanitizer: DomSanitizer,private _sharedService:SharedService ){
  this.navLinks = [
   
    {
      label: 'Available Prizes',
      link: './available-prizes',
      index: 1,
      icon:this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks" viewBox="0 0 16 16">
      <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
    </svg>`)
    },
   
  ];
}
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
ngOnInit(): void {
  this.router.events.subscribe((res) => {
    this.activeLinkIndex = this.navLinks.indexOf(
      this.navLinks.find((tab) => tab.link === '.' + this.router.url)
    );
  });
  this.getUserNotifications()
 
}
clearOffersNotification() {
  if (this.offersCount > 0) {
    this.offersCount = 0;
  }
  
}

getUserNotifications(){
  this._notifications.getNotificaitons().pipe(takeUntil(this.destroy$))
  .subscribe({
    next: (data) => {
      if (data.status.code === '0' && data.result) {
        this.notifications = data['result']
        this._sharedService.updateTopBarNotify()
      }
    },
    error: (err) => {
    },
  });
}




clearNotification(label: string) {
  // Assuming you have notifications object
  if (label === 'Available Prizes') {
    this.notifications.unseenNotificationsCount.AVAILABLE_PRIZE = 0;
  }
}

}
