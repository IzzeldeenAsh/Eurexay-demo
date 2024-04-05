import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, take, takeUntil } from 'rxjs';
import { IUser } from 'src/app/core/models/userInfo.interface';
import { ParticipantsService } from 'src/app/core/services/participants/participants.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  private readonly unsubscribe$ = new Subject();
  loading: boolean = true;
  currentProfile!: string | null;
  constructor(
    private _profileData: ParticipantsService,
    private route: ActivatedRoute,
    private _sharedService: SharedService,
    private _updateProfileService: UserInfoService,
  ) {}
  userdata!: IUser;
  loggedUserName!: string;
  userName!: string | null;
  canEdit: boolean = false;
  showForm = false;
  Iban = '';
  IbanCountry = '';
  ngOnInit(): void {
    this.getUsernameFromURL();
    this.getLoggedUserData();
    this.getParticipantData();
  }

  toggleForm() {
    // this.showForm = !this.showForm;
  }
  onSave() {

    this._updateProfileService.updateProfile({
      iban : this.Iban ,
      bankCountry:this.IbanCountry
    }).subscribe((data)=>{
      this.getParticipantData()
    })
  }
  getParticipantData() {
    this.route.parent?.params.subscribe((params) => {
      this.currentProfile = params['userName'];
    });

    if (this.currentProfile) {
      this._profileData
        .getParticipantByUsername(this.currentProfile)
        .pipe(take(1))
        .subscribe((data) => {
          this.userdata = data['result'];

          this.canEdit = this.loggedUserName === this.currentProfile;
          this.loading = false;

        });
    }
  }
  getLoggedUserData() {
    this._sharedService.userDataShared$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data: IUser) => {
        this.loggedUserName = data.username;
      });
  }
  getUsernameFromURL() {
    this.route.paramMap.subscribe((params) => {
      if (params.get('userName')) {
        this.userName = params.get('userName');
      
      }
    });
  }
}
