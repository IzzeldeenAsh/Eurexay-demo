import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizesRoutingModule } from './prizes-routing.module';
import { PrizesComponent } from './prizes/prizes.component';
import { PrizesMainComponent } from './prizes-main/prizes-main.component';
import { AvailablePrizesComponent } from './prizes-main/available-prizes/available-prizes.component';
import { CreatePrizeComponent } from './create-prize/create-prize.component';
import { Step1Component } from './create-prize/step1/step1.component';
import { Step2Component } from './create-prize/step2/step2.component';
import { Step3Component } from './create-prize/step3/step3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpinnerModule } from 'src/app/core/loader/spinner/spinner.module';
import { AvailablePrizesTableComponent } from './prizes-main/available-prizes/available-prizes-table/available-prizes-table.component';
import { FilterDropdownComponent } from './prizes-main/available-prizes/available-prizes-table/filter-dropdown/filter-dropdown.component';
import { TruncateWordsModule } from 'src/app/core/pipes/truncate-words/truncate-words.module';
import { SafeHtmlModule } from 'src/app/core/pipes/safe-html/safe-html.module';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from 'src/app/shared/shared.module';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    PrizesComponent,
    PrizesMainComponent,
    AvailablePrizesComponent,
    CreatePrizeComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    AvailablePrizesTableComponent,
    FilterDropdownComponent,
  ],
  imports: [
    CommonModule,
    PrizesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SpinnerModule,
    SharedModule,
    InlineSVGModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
    TruncateWordsModule,
    SafeHtmlModule,
    NgbTooltipModule,
    MultiSelectModule,
  ]
})
export class PrizesModule { }
