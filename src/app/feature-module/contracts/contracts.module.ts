import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsMainComponent } from './contracts-main/contracts-main.component';
import { SpinnerModule } from 'src/app/core/loader/spinner/spinner.module';
import { ToWordsModule } from 'src/app/core/pipes/to-words/to-words.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { SafeHtmlModule } from 'src/app/core/pipes/safe-html/safe-html.module';
import { ContractBodyComponent } from './contracts-main/contract-body/contract-body.component';
import { OwnerCardComponent } from './contracts-main/owner-card/owner-card.component';
import { ParticipantCardComponent } from './contracts-main/participant-card/participant-card.component';
import { TruncateLettersModule } from 'src/app/core/pipes/truncate-letters/truncate-letters.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentStepComponent } from './contracts-main/payment-step/payment-step.component';


@NgModule({
  declarations: [
    ContractsMainComponent,
    ContractBodyComponent,
    OwnerCardComponent,
    ParticipantCardComponent,
    PaymentStepComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    SpinnerModule,
    InlineSVGModule,
    ToWordsModule,
    SharedModule,
    TruncateLettersModule,
    SafeHtmlModule,
  ]
})
export class ContractsModule { }
