import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementMainComponent } from './management-main/management-main.component';
import { CaseDetailsComponent } from './management-main/case-details/case-details.component';
import { CaseMessagesComponent } from './management-main/case-messages/case-messages.component';

const routes: Routes = [
  {
    path: 'case-management/:caseUUID',
    component: ManagementMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasesManagementRoutingModule {}
