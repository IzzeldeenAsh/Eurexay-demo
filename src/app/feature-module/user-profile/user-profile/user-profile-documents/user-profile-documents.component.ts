import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddDocumentComponent } from './add-document/add-document.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject, take, takeUntil } from 'rxjs';
import { IUser } from 'src/app/core/models/userInfo.interface';
import { FilesUploadService } from 'src/app/core/services/filesUpload/files-upload.service';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from 'src/app/core/services/user-info/user-info.service';
import { CurrentUserService } from 'src/app/core/services/user-info/current-user.service';
interface IDocument {
  id: number;
  label: string;
  name: string;
  extraInfo1: null | string;
  extraInfo2: null | string;
  content: string;
}
const dummy = {
  "status": {
      "code": "0",
      "description": "Success",
      "reason": "Success"
  },
  "result": {
      "username": "Demo@eurekxay.com",
      "participantType": "BUSINESS",
      "fullName": "Demo User",
      "instituteName": "Demo Soft",
      "country": "Germany",
      "city": "Berlin",
      "continent": "Europe",
      "phoneNumber": "+493423423432",
      "faxNumber": "113123",
      "poBox": "23213",
      "registrationNumber": "34243424",
      "certificateNumber": "1231232",
      "academicNumber": "21312412",
      "sector": "private",
      "websiteUrl": "POPa",
      "addressLine": "12ASD",
      "zipCode": "0",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "domains": ['Health'],
      "bankName": "BAK",
      "iban": "2312d",
      "bankCountry": "JAVAP",
      "profilePicBase64": "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"

  }
};
@Component({
  selector: 'app-user-profile-documents',
  templateUrl: './user-profile-documents.component.html',
  styleUrls: ['./user-profile-documents.component.scss'],
})
export class UserProfileDocumentsComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$ = new Subject();
  certificates: any[] = [];
  displayedCertificates: IDocument[] = [];
  showAllCertificates = false;
  awards: any[] = [];
  displayedAwards: any[] = [];
  showAllAwards = false;
  accreditations: any[] = [];
  displayedAccreditation: any[] = [];
  showAllAccreditation = false;
  userDate!: IUser;
  canEdit: boolean = false;
  documentList: IDocument[] = [];
  certificatesList: IDocument[] = [];
  awardsList: IDocument[] = [];
  accreditationList: IDocument[] = [];
  loading: boolean = true;
  currentProfile!: string | null;
  constructor(
    public dialog: MatDialog,
    private _userDocuments: FilesUploadService,
    private _currentUser: CurrentUserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getDocuments(username: string) {
    this.loading = true;
    this._userDocuments
      .getDocuments(username)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (res: any) => {
          if (res.status.code === '0') {
            this.documentList = res['result'];
            this.certificatesList = this.documentList.filter(
              (cert) => cert.label === 'CERTIFICATE'
            );
            this.awardsList = this.documentList.filter(
              (cert) => cert.label === 'AWARD'
            );
            this.accreditationList = this.documentList.filter(
              (cert) => cert.label === 'ACCREDITATION'
            );
            this.displayedCertificates = this.certificatesList;
            this.displayedAwards = this.awardsList;
            this.displayedAccreditation = this.accreditationList;
            this.loading = false;
          } else {
            this.loading = false;
          }
        },
        error: (err: any) => {
          this.loading = false;
        },
      });
  }

  getUserData() {
    this.canEdit=true
  }

  showAll() {
    this.displayedCertificates = this.certificatesList;
    this.showAllCertificates = true;
  }
  hideCertificates() {
    this.displayedCertificates = this.certificatesList.slice(0, 4);
    this.showAllCertificates = false;
  }
  showAllAwardsFiles() {
    this.displayedAwards = this.awardsList;
    this.showAllAwards = true;
  }
  hideAwards() {
    this.displayedAwards = this.awardsList.slice(0, 4);
    this.showAllAwards = false;
  }
  showAllAccreditationFiles() {
    this.displayedAccreditation = this.accreditationList;
    this.showAllAccreditation = true;
  }
  hideAccreditationFiles() {
    this.displayedAccreditation = this.accreditationList.slice(0, 4);
    this.showAllAccreditation = false;
  }

  openAddDocumentDialog(dataType: string): void {
    const dialogRef: MatDialogRef<AddDocumentComponent> = this.dialog.open(
      AddDocumentComponent,
      {
        data: dataType,
        width: '500px',
      }
    );

    // Subscribe to the afterClosed event to call getDocuments after dialog close.
    dialogRef.afterClosed().subscribe((result) => {
      this.getDocuments(this.userDate.username);
    });
  }

  addCertificate(): void {
    this.openAddDocumentDialog('certificate');
  }

  addAward(): void {
    this.openAddDocumentDialog('Award');
  }

  addAccreditation(): void {
    this.openAddDocumentDialog('Accreditation');
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
