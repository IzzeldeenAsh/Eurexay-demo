import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { INotifiactions } from 'src/app/core/models/noticiations';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { OfferRejectionComponent } from './offer-rejection/offer-rejection.component';

export type NotificationsTabsType =
  | 'kt_topbar_notifications_1'
  | 'kt_topbar_notifications_2'
  | 'kt_topbar_notifications_3';

@Component({
  selector: 'app-notifications-inner',
  templateUrl: './notifications-inner.component.html',
})
export class NotificationsInnerComponent implements OnInit {
  @Input() notifications!:INotifiactions ;
  @HostBinding('class') class =
    '';

  alerts:any[] = [];
  activeTabId: NotificationsTabsType = 'kt_topbar_notifications_2';
  seenTrue:any[] = [];
  seenFalse:any[] = [];
  constructor(
    private router:Router,
    private _sharedService:SharedService,
    public dialog: MatDialog,
    ) {}

  ngOnInit(): void {

   this.alerts =  this.notifications.allNotifications;
   
   this.alerts.sort((a, b) => {
    if (a.timestamp && b.timestamp) {
        const timestampA = new Date(a.timestamp) as any;
        const timestampB = new Date(b.timestamp) as any;
        return timestampB - timestampA; // Compare timestamps in descending order
    } else if (a.timestamp) {
        return -1; // Put objects with a timestamp first
    } else if (b.timestamp) {
        return 1; // Put objects with b timestamp first
    }
    return 0; // No timestamp for both, keep order unchanged
});

    this.activeTabId = 'kt_topbar_notifications_1';

  }
  navigateNotification(alert:any, event:Event){
    event.stopPropagation();
    event.preventDefault();
    console.log('alert',alert)
    if(alert.itemType ==="BUSINESS_CASE"){
      this._sharedService.setShowNotification(false)
      this.router.navigate([`/summary/summary/${alert.itemUUID}`],{queryParams:{available :true}});
    } else if ( alert.itemType === "OFFER" && alert.title !== "OFFER WAS REJECTED"){
      this._sharedService.setShowNotification(false)
      this.router.navigate(['/cases-main/offers'])
    } else if(alert.label === "NEW_PRIZE_PARTICIPANT") {
      this._sharedService.setShowNotification(false)
      this.router.navigate(['/prizes/my-prizes'])
    } else if (alert.itemType === "CONTRACT" && alert.title === "YOUR OFFER WAS ACCEPTED"){
      this._sharedService.setShowNotification(false)
      this.router.navigate([`/contracts-main/contract/${alert.itemUUID}`],{queryParams:{amParti44:true}})
    } else if (alert.itemType === "CONTRACT" && alert.title === "PARTICIPANT HAS SIGNED THE CONTRACT"){
      this._sharedService.setShowNotification(false)
      this.router.navigate([`/contracts-main/contract/${alert.itemUUID}`],{queryParams:{amOw44:true}})
    }else if (alert.itemType === "OFFER" && alert.title === "OFFER WAS REJECTED"){
      this._sharedService.setShowNotification(false)
      this.openAddDocumentDialog(alert.description)
    }else if (alert.itemType === "PRIZE" && alert.label ==="AVAILABLE_PRIZE"){
      this._sharedService.setShowNotification(false)
      this.router.navigate([`/summary-prize/prizeSummary/${alert.itemUUID}`],{queryParams: {available:true}})
    }
    else if (alert.itemType === "CONTRACT" && alert.label ==="CONTRACT_FINALIZED"){
      this._sharedService.setShowNotification(false)
      this.router.navigate([`/contracts-main/contract/${alert.itemUUID}`],{queryParams:{amParti44:true}})
    }

  }

  openAddDocumentDialog(dataType: string): void {
    const dialogRef: MatDialogRef<OfferRejectionComponent> = this.dialog.open(
      OfferRejectionComponent,
      {
        data: dataType,
        width: '500px',
      }
    );
  }
  
  
}

