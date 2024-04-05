import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesMainComponent } from './cases-main/cases-main.component';

import { MyCasesComponent } from './cases-main/my-cases/my-cases.component';
import { AvailableCasesComponent } from './cases-main/available-cases/available-cases.component';
import { ParticipatedInCasesComponent } from './cases-main/participated-in-cases/participated-in-cases.component';
import { OffersComponent } from './cases-main/offers/offers.component';
import { ContractsComponent } from './cases-main/contracts/contracts.component';
import { CaseManagementListComponent } from './cases-main/case-management-list/case-management-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CasesMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'available-Cases',
        pathMatch: 'full',
      },
      {
        path: 'my-cases',
        component: MyCasesComponent,
      },
      {
        path: 'available-Cases',
        component: AvailableCasesComponent,
      },
      {
        path: 'participated-in-cases',
        component: ParticipatedInCasesComponent,
      },
      {
        path: 'offers',
        component: OffersComponent,
      },
      {
        path: 'contracts',
        component: ContractsComponent,
      },
      {
        path: 'case-management-list',
        component: CaseManagementListComponent,
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesRoutingModule {}
