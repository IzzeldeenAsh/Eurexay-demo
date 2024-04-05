import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddDocumentComponent } from 'src/app/feature-module/user-profile/user-profile/user-profile-documents/add-document/add-document.component';

@Component({
  selector: 'app-offer-rejection',
  templateUrl: './offer-rejection.component.html',
  styleUrls: ['./offer-rejection.component.scss']
})
export class OfferRejectionComponent {
constructor(
  public dialogRef: MatDialogRef<AddDocumentComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
){

}
}
