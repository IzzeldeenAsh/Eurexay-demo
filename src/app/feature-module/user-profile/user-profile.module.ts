import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HeaderComponent } from './user-profile/header/header.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { UserProfileOverviewComponent } from './user-profile/user-profile-overview/user-profile-overview.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { InstituteImagesComponent } from './user-profile/user-profile-overview/institute-images/institute-images.component';
import { BioComponent } from './user-profile/user-profile-overview/bio/bio.component';
import { UserProfileDocumentsComponent } from './user-profile/user-profile-documents/user-profile-documents.component';
import { AccountDetailsComponent } from './user-profile/account-details/account-details.component';
import { AddDocumentComponent } from './user-profile/user-profile-documents/add-document/add-document.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SettingsComponent } from './user-profile/settings/settings.component';
import { SpinnerModule } from 'src/app/core/loader/spinner/spinner.module';
import { UploadInstituteImagesComponent } from './user-profile/user-profile-overview/institute-images/upload-institute-images/upload-institute-images.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TruncateLettersModule } from 'src/app/core/pipes/truncate-letters/truncate-letters.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileComponentComponent } from './user-profile/user-profile-documents/file-component/file-component.component';
import { SafeHtmlModule } from 'src/app/core/pipes/safe-html/safe-html.module';
@NgModule({
  declarations: [
    UserProfileComponent,
    HeaderComponent,
    UserProfileOverviewComponent,
    InstituteImagesComponent,
    BioComponent,
    UserProfileDocumentsComponent,
    AccountDetailsComponent,
    AddDocumentComponent,
    SettingsComponent,
    UploadInstituteImagesComponent,
    FileComponentComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    SpinnerModule,
    MatTabsModule,
    TruncateLettersModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    SafeHtmlModule,
    SharedModule,
    UserProfileRoutingModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class UserProfileModule {}
