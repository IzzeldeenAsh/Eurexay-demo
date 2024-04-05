import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrizesMainComponent } from './prizes-main/prizes-main.component';
import { PrizesComponent } from './prizes/prizes.component';
import { CreatePrizeComponent } from './create-prize/create-prize.component';
import { AvailablePrizesComponent } from './prizes-main/available-prizes/available-prizes.component';

const routes: Routes = [
  {
    path: '',
    component: PrizesMainComponent,
    children: [
      {
        path: '',
        redirectTo: 'available-prizes',
        pathMatch: 'full',
      },
     
      {
        path: 'available-prizes',
       component:AvailablePrizesComponent
      }
    ],
  },
  {
    path:'create-prize',
    component:CreatePrizeComponent
  },
  {
    path:'edit-prize/:prizeUUID',
    component:CreatePrizeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrizesRoutingModule {}
