import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { SummaryHeaderComponent } from './summary-header/summary-header.component';
import { SpinnerModule } from 'src/app/core/loader/spinner/spinner.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { SafeHtmlModule } from 'src/app/core/pipes/safe-html/safe-html.module';
import { TruncateLettersModule } from 'src/app/core/pipes/truncate-letters/truncate-letters.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SummaryComponent,
    SummaryHeaderComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SpinnerModule,
    InlineSVGModule,
    TruncateLettersModule,
    SharedModule,
    SafeHtmlModule
  ],
  exports:[SummaryComponent]
})
export class SummaryModule { }
