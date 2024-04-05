import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  take } from 'rxjs';
import { IUser } from 'src/app/core/models/userInfo.interface';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  userData!:IUser;
  emptyUserValues:string[]=[];
  constructor(private _userInfo:CurrentUserService , private router:Router,private _sharedService:SharedService) {}
  ngOnInit(): void {
    this.listenToUpdateProfile()
   this.getUserInfo();
  }

  getUserInfo(){
    this._userInfo
    .currentUserProfile$
    .pipe(take(1))
    .subscribe((user:IUser) => {
      this.userData = user;
      this.checkForNullValuesInUserData()
    })
  }

  listenToUpdateProfile(){
    this._sharedService.profileMissingInfoAlert$.subscribe(data=>this.getUserInfo())
  }

  navigateToProfile(){
    if(this.emptyUserValues.includes('bio')){
      this.router.navigate([`user-profile/${this.userData.username}/up-overview`])
    }else{
      this.router.navigate([`user-profile/${this.userData.username}/account-settings`])
    }

  }

   openCreatePrize(){
this.router.navigate(['prizes/create-prize'])
  }

  checkForNullValuesInUserData() {
    const propertiesToCheck= ['bankName','iban','bankCountry','faxNumber','poBox','addressLine','zipCode','bio']
    this.emptyUserValues=[]
        for (const key in this.userData) {
          if (this.userData.hasOwnProperty(key) && (this.userData[key] === null || this.userData[key] === '')  && propertiesToCheck.includes(key)) {
            this.emptyUserValues.push(key);
          }
        }
      }



}
