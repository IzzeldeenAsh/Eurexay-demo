import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsMainComponent } from './contracts-main/contracts-main.component';

const routes: Routes = [
  {
    path: 'contract/:caseUUID',
    component: ContractsMainComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractsRoutingModule {}
