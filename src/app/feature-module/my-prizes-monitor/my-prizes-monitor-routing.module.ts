import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPrizeMonitorComponent } from './my-prize-monitor/my-prize-monitor.component';

const routes: Routes = [
  {
    path:'prize-monitor/:prizeUUID',
    component: MyPrizeMonitorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPrizesMonitorRoutingModule { }
