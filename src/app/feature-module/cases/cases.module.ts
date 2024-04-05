import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasesRoutingModule } from './cases-routing.module';
import { CasesMainComponent } from './cases-main/cases-main.component';
import { MyCasesComponent } from './cases-main/my-cases/my-cases.component';
import { AvailableCasesComponent } from './cases-main/available-cases/available-cases.component';
import { ParticipatedInCasesComponent } from './cases-main/participated-in-cases/participated-in-cases.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { MyCasesTableComponent } from './cases-main/my-cases/my-cases-table/my-cases-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AvailableCasesTableComponent } from './cases-main/available-cases/available-cases-table/available-cases-table.component';
import { TruncateWordsModule } from 'src/app/core/pipes/truncate-words/truncate-words.module';
import { FilterDropdownComponent } from './cases-main/available-cases/available-cases-table/filter-dropdown/filter-dropdown.component';
import { OffersComponent } from './cases-main/offers/offers.component';
import { OffersListComponent } from './cases-main/offers/offers-list/offers-list.component';
import { ContractsComponent } from './cases-main/contracts/contracts.component';
import { MyContractsComponent } from './cases-main/contracts/my-contracts/my-contracts.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SafeHtmlModule } from 'src/app/core/pipes/safe-html/safe-html.module';
import { RejecttOfferComponent } from './cases-main/offers/offers-list/rejectt-offer/rejectt-offer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PariticipatedInCasesTableComponent } from './cases-main/participated-in-cases/pariticipated-in-cases-table/pariticipated-in-cases-table.component';
import { CaseManagementListComponent } from './cases-main/case-management-list/case-management-list.component';
import { CaseManagementRecordsComponent } from './cases-main/case-management-list/case-management-records/case-management-records.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    CasesMainComponent,
    MyCasesComponent,
    AvailableCasesComponent,
    ParticipatedInCasesComponent,
    MyCasesTableComponent,
    AvailableCasesTableComponent,
    FilterDropdownComponent,
    OffersComponent,
    OffersListComponent,
    ContractsComponent,
    MyContractsComponent,
    RejecttOfferComponent,
    PariticipatedInCasesTableComponent,
    CaseManagementListComponent,
    CaseManagementRecordsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    InlineSVGModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    CasesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TruncateWordsModule,
    NgbTooltipModule,
    TableModule,
    ButtonModule,
    SafeHtmlModule,

  ],
})
export class CasesModule {}
