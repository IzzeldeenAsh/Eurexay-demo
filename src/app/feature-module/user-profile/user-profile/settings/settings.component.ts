import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';
import { IUser } from 'src/app/core/models/userInfo.interface';
import { AlertsService } from 'src/app/core/services/alert/alerts.service';
import { SharedService } from 'src/app/core/services/shared/shared.service';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';
import Swal from 'sweetalert2';
class profileUpdateGenerator {
  fullName?: string;
  country?: string;
  city?: string;
  sector?: string;
  phoneNumber?: string;
  poBox?: string;
  addressLine?: string;
  websiteUrl?: string;
  continent?: string;
  zipCode?: string;
  iban?: string;
  bankCountry?: string;
  bankName?: string;
  domains?: string[];
  faxNumber?: string;
  bio?: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject();
  profileSettings!: FormGroup;
  imgURL: any =
    'https://image-cdn.essentiallysports.com/wp-content/uploads/robert-pattinson-the-batman-96x96.jpg';
  isInvalidImageFormat: boolean = false;
  isLoading:boolean=false;
  profileImage!: File;

  userdata!: IUser;
  constructor(
    private fb: FormBuilder,
    private _sharedService: SharedService,
    private _userData:CurrentUserService,
    private _userDataInfo:UserInfoService,
    private _alert: AlertsService
  ) {}

  ngOnInit(): void {
    this.getUserData();
    this.initSigninMethods();
  }
  getUserData() {
    this.isLoading=true
    this._userData
    .currentUserProfile$
    .pipe(take(1))
    .subscribe((user:IUser)=>{
      this.isLoading=false;
      this.userdata = user;
      this.profileSettingsForm();
      this.imgURL = `data:image/jpeg;base64,${this.userdata.profilePicBase64}`;
    })

  }
  profileSettingsForm() {
    this.profileSettings = this.fb.group({
      //the default data should be retrieved from the getProfileData
      fullName: { value: this.userdata.fullName, disabled: true },
      email: { value: this.userdata.username, disabled: true },
      accountType: { value: this.userdata.participantType, disabled: true },
      registrationNumber: {
        value: this.userdata.registrationNumber,
        disabled: true,
      },
      academicNumber: { value: this.userdata.academicNumber, disabled: true },
      sector: [this.userdata.sector === 'public' ? 'public' : 'private'],
      institute: { value: this.userdata.instituteName, disabled: true },

      phone: [this.userdata.phoneNumber],
      website: [this.userdata.websiteUrl ? this.userdata.websiteUrl : ''],
      PObox: [this.userdata.poBox ? this.userdata.poBox : ''],
      zipCode: [this.userdata.zipCode ? this.userdata.zipCode : 0],
      fax: [this.userdata.faxNumber ? this.userdata.faxNumber : ''],
      addressLine: [this.userdata.addressLine ? this.userdata.addressLine : ''],
      iban: [this.userdata.iban ? this.userdata.iban : ''],
      bankCountry: [this.userdata.bankCountry ? this.userdata.bankCountry : ''],
      bankName: [this.userdata.bankName ? this.userdata.bankName : ''],
    });
  }
  profilePicSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file && file.type.startsWith('image/')) {
      this.isInvalidImageFormat = false;
      this.previewImage(file);
      this.profileImage = file;
    } else {
      this.isInvalidImageFormat = true;
      this.imgURL = null;
    }
  }
  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imgURL = reader.result;
    };
    reader.readAsDataURL(file);
  }
  onSubmit() {
    if (this.profileSettings.valid) {
    }
  }

  private initSigninMethods(): void {
    const t = document.getElementById('kt_signin_email');
    const e = document.getElementById('kt_signin_email_edit');
    const n = document.getElementById('kt_signin_password');
    const o = document.getElementById('kt_signin_password_edit');
    const i = document.getElementById('kt_signin_email_button');
    const s = document.getElementById('kt_signin_cancel');
    const r = document.getElementById('kt_signin_password_button');
    const a = document.getElementById('kt_password_cancel');

    i?.querySelector('button')?.addEventListener('click', () => {
      this.toggleEmailForm();
    });

    s?.addEventListener('click', () => {
      this.toggleEmailForm();
    });

    r?.querySelector('button')?.addEventListener('click', () => {
      this.togglePasswordForm();
    });

    a?.addEventListener('click', () => {
      this.togglePasswordForm();
    });

    // ... FormValidation initialization and handling ...
  }

  updateProfile() {
    const updatedProfile = new profileUpdateGenerator();

    updatedProfile.addressLine = this.profileSettings.get('addressLine')?.value;
    updatedProfile.country =this.userdata.country
    updatedProfile.city = this.userdata.city
    updatedProfile.sector = this.profileSettings.get('sector')?.value;
    updatedProfile.phoneNumber = this.profileSettings.get('phone')?.value;
    updatedProfile.poBox = this.profileSettings.get('PObox')?.value;
    updatedProfile.websiteUrl = this.profileSettings.get('website')?.value;
    updatedProfile.zipCode = this.profileSettings.get('zipCode')?.value;
    updatedProfile.faxNumber = this.profileSettings.get('fax')?.value;
    updatedProfile.bankCountry =this.profileSettings.get('bankCountry')?.value
    // Set the remaining properties here
    updatedProfile.fullName = this.userdata.fullName
    updatedProfile.continent = this.userdata.continent
    updatedProfile.iban = this.profileSettings.get('iban')?.value;
    updatedProfile.bankName = this.profileSettings.get('bankName')?.value;
    updatedProfile.domains = this.profileSettings.get('domains')?.value;
    updatedProfile.bio = this.profileSettings.get('bio')?.value;
    updatedProfile.iban = this.profileSettings.get('iban')?.value;

    this._userDataInfo
      .updateProfile(updatedProfile)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          if (res.status.code === '0') {
            this._sharedService.refreshMissingInfoProfile()
            Swal.fire({
              icon: 'success',
              title: 'Profile Updated',
              text: 'Your profile has been successfully updated.',
              confirmButtonColor: '#0778b9',

            }).then(()=>{
              this._userData.getUserInfo().pipe(takeUntil(this.unsubscribe$)).subscribe({
                next: (res) => {
                  if (res.status.code === '0') {
                              this._sharedService.setUserData(this.userdata);
                              this.uploadImageProfile()
                            } else {
                              this._alert.error('', `${res.status.description}`);
                              return;
                            }
                }
              })
            })
          } else {
            this._alert.error('', `${res.status.description}`);
          }
        },
        error: (error: any) => {
          this._alert.error('', 'An error occurred.');
        },
      });


  }

  uploadImageProfile(){
    if(this.profileImage){
      const formData = new FormData();
      formData.append('profileImage',this.profileImage);
      this._userDataInfo.updateProfileImage(formData).pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res) => {
          location.reload();
          this.getUserData();
        },
        error: (error: any) => {

        },
      });
     }
  }

  private toggleEmailForm(): void {
    const emailForm = document.getElementById('kt_signin_email');
    const emailEdit = document.getElementById('kt_signin_email_edit');
    const emailButton = document.getElementById('kt_signin_email_button');
    emailForm?.classList.toggle('d-none');
    emailButton?.classList.toggle('d-none');
    emailEdit?.classList.toggle('d-none');
  }

  private togglePasswordForm(): void {
    const passwordForm = document.getElementById('kt_signin_password');
    const passwordEdit = document.getElementById('kt_signin_password_edit');
    const passwordButton = document.getElementById('kt_signin_password_button');
    passwordForm?.classList.toggle('d-none');
    passwordButton?.classList.toggle('d-none');
    passwordEdit?.classList.toggle('d-none');
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
