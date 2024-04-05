import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { NotificationsComponent } from './dashboard-main/notifications/notifications.component';
import { WidgetsComponent } from './dashboard-main/widgets/widgets.component';
import { SpinnerModule } from 'src/app/core/loader/spinner/spinner.module';
import { DashboardHeaderComponent } from './dashboard-main/dashboard-header/dashboard-header.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MyCasesChartComponent } from './dashboard-main/my-cases-chart/my-cases-chart.component';
import { MyCasesChartTwoComponent } from './dashboard-main/my-cases-chart-two/my-cases-chart-two.component';
import { OnHandCaseComponent } from './dashboard-main/on-hand-case/on-hand-case.component';
import { OnHandPrizesComponent } from './dashboard-main/on-hand-prizes/on-hand-prizes.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CaseCreateComponent } from './dashboard-main/case-create/case-create.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainComponent,
    NotificationsComponent,
    WidgetsComponent,
    DashboardHeaderComponent,
    MyCasesChartComponent,
    MyCasesChartTwoComponent,
    OnHandCaseComponent,
    OnHandPrizesComponent,
    CaseCreateComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InlineSVGModule,
    SpinnerModule,
    NgbTooltipModule,
    NgApexchartsModule,
  ],
})
export class DashboardModule {}
