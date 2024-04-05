import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesManagementRoutingModule } from './cases-management-routing.module';

import { ManagementMainComponent } from './management-main/management-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentProcessModule } from 'src/app/core/reusable-components/payment-process/payment-process.module';
import { AboutCaseComponent } from './management-main/about-case/about-case.component';
import { SafeHtmlModule } from 'src/app/core/pipes/safe-html/safe-html.module';
import { CaseDetailsComponent } from './management-main/case-details/case-details.component';
import { CaseMessagesComponent } from './management-main/case-messages/case-messages.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { ParticipantCardComponent } from './management-main/participant-card/participant-card.component';
import { TruncateLettersModule } from 'src/app/core/pipes/truncate-letters/truncate-letters.module';

@NgModule({
  declarations: [

    ManagementMainComponent,
     AboutCaseComponent,
     CaseDetailsComponent,
     CaseMessagesComponent,
     ParticipantCardComponent
  ],
  imports: [
    CommonModule,
    CasesManagementRoutingModule,
    SharedModule,
    PaymentProcessModule,
    SafeHtmlModule,
    TruncateLettersModule,
    InlineSVGModule,
  ]
})
export class CasesManagementModule { }
