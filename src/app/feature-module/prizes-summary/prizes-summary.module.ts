import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrizesSummaryRoutingModule } from './prizes-summary-routing.module';
import { PrizeSummaryComponent } from './prize-summary/prize-summary.component';
import { SpinnerModule } from 'src/app/core/loader/spinner/spinner.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { PrizePageComponent } from './prize-summary/prize-page/prize-page.component';
import { TruncateLettersModule } from 'src/app/core/pipes/truncate-letters/truncate-letters.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PrizeSummaryComponent,
    PrizePageComponent
  ],
  imports: [
    CommonModule,
    PrizesSummaryRoutingModule,
    SpinnerModule,
    SharedModule,
    InlineSVGModule,
    TruncateLettersModule
  ]
})
export class PrizesSummaryModule { }
