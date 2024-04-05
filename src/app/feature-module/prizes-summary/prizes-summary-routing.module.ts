import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrizeSummaryComponent } from './prize-summary/prize-summary.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'prizeSummary/:prizeUUID',
  pathMatch: 'full'
},
{
  path:'prizeSummary/:prizeUUID',
  component: PrizeSummaryComponent
}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrizesSummaryRoutingModule { }
