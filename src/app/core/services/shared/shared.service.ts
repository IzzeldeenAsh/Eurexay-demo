import { ICase } from './../../models/createCase.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUser } from '../../models/userInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private refreshMyCases = new Subject<void>();
  private refreshMyPrizes = new Subject<void>();
  private updateProfilePicture =new Subject<void>();
  private offersListSource = new BehaviorSubject<any[]>([])
  private ownerCasesList =new BehaviorSubject<any>([])
  private userDataShared =  new BehaviorSubject<any>(null);
  private notificationData =  new BehaviorSubject<any>(null);
  private prticipatedInPrizes = new BehaviorSubject<any>([])
  private showNotification = new BehaviorSubject<any>(false)
  private refreshOffers = new Subject<void>();
  private profileMissingInfoAlert = new Subject<void>();
  private updateTopbarNotification =new Subject<void>();

  profileMissingInfoAlert$ = this.profileMissingInfoAlert.asObservable();
  updateTopbarNotification$ = this.updateTopbarNotification.asObservable();
  refreshMyCases$ = this.refreshMyCases.asObservable();
  refreshOffers$ = this.refreshOffers.asObservable();
  refreshMyProfilePic$ = this.updateProfilePicture.asObservable();
  refreshMyPrizes$ = this.refreshMyPrizes.asObservable();
  offersListCurrent$ = this.offersListSource.asObservable()
  owenerCasesList$ = this.ownerCasesList.asObservable();
  userDataShared$ = this.userDataShared.asObservable();
  showNotification$ = this.showNotification.asObservable();
  notificationData$ = this.notificationData.asObservable();

  constructor() { }

  notifyMyCasesTable(){
    this.refreshMyCases.next()
  }
  refreshOffersList(){
    this.refreshOffers.next()
  }
  updateTopBarNotify(){
    this.updateTopbarNotification.next()
  }
  refreshMissingInfoProfile(){
    this.profileMissingInfoAlert.next()
  }
  refreshProfilePicture(){
    this.updateProfilePicture.next()
  }
  notifyAvailableCasesTable(){
    this.refreshMyCases.next()
  }
  notifyMyPrizesTable(){
    this.refreshMyCases.next()
  }
  setShowNotification(value:boolean){
    this.showNotification.next(value)
  }
  notifyAvailablePrizesTable(){
    this.refreshMyCases.next()
  }
  setNotificationData(data:any){
    this.notificationData.next(data)
  }
  setOffersList(offers:any[]){
    this.offersListSource.next(offers)
  }
  setOwnerCases(cases:ICase[]){
    this.ownerCasesList.next(cases);
  }
  setUserData(data:IUser){
    this.userDataShared.next(data);
  }

}
