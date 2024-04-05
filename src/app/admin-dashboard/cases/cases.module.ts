import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { MainCasesComponent } from './main-cases/main-cases.component';
import { CasesListComponent } from './main-cases/cases-list/cases-list.component';
import { CaseListTableComponent } from './main-cases/cases-list/case-list-table/case-list-table.component';
import { SearchAndFilterComponent } from './main-cases/cases-list/search-and-filter/search-and-filter.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'src/app/core/directives/click-outside/click-outside.module';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { CasesClaimsComponent } from './main-cases/cases-claims/cases-claims.component';
import { CasesStatisticsComponent } from './main-cases/cases-statistics/cases-statistics.component';
import { DeletedCasesComponent } from './main-cases/deleted-cases/deleted-cases.component';
import { CaseManageComponent } from './main-cases/case-manage/case-manage.component';
import { PaymentProgressComponent } from './main-cases/case-manage/payment-progress/payment-progress.component';
import { PaymentProcessModule } from 'src/app/core/reusable-components/payment-process/payment-process.module';
import { OwnerParticipantCardComponent } from './main-cases/case-manage/owner-participant-card/owner-participant-card.component';
@NgModule({
  declarations: [
    MainCasesComponent,
    CasesListComponent,
    CaseListTableComponent,
    SearchAndFilterComponent,
    CasesClaimsComponent,
    CasesStatisticsComponent,
    DeletedCasesComponent,
    CaseManageComponent,
    PaymentProgressComponent,
    OwnerParticipantCardComponent
  ],
  imports: [
    CommonModule,
    CasesRoutingModule,
    InlineSVGModule,
    ClickOutsideModule,
    MultiSelectModule,
    FormsModule,
    TableModule,
    ListboxModule,
    PaymentProcessModule,
  ]
})
export class CasesModule { }
