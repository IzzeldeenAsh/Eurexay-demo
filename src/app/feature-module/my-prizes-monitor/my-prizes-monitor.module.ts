import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPrizesMonitorRoutingModule } from './my-prizes-monitor-routing.module';
import { MyPrizeMonitorComponent } from './my-prize-monitor/my-prize-monitor.component';
import { PrizeSummaryHeaderComponent } from './prize-summary-header/prize-summary-header.component';
import { PrizeBodyComponent } from './my-prize-monitor/prize-body/prize-body.component';
import { ParticipantsListComponent } from './my-prize-monitor/participants-list/participants-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MyPrizeMonitorComponent,
    PrizeSummaryHeaderComponent,
    PrizeBodyComponent,
    ParticipantsListComponent
  ],
  imports: [
    CommonModule,
    MyPrizesMonitorRoutingModule,
    SharedModule
  ]
})
export class MyPrizesMonitorModule { }
