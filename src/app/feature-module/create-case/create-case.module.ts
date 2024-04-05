import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCaseRoutingModule } from './create-case-routing.module';
import { CreateCaseComponent } from './create-case/create-case.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CounterChartComponent } from './create-case/payment/counter-chart/counter-chart.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { MatIconModule } from '@angular/material/icon';
import { SafeHtmlModule } from 'src/app/core/pipes/safe-html/safe-html.module';
import { NgxMaskModule } from 'ngx-mask';
import { Step1Component } from './create-case/step1/step1.component';
import { Step2Component } from './create-case/step2/step2.component';
import { Step3Component } from './create-case/step3/step3.component';
import { Step4Component } from './create-case/step4/step4.component';
import { Step5Component } from './create-case/step5/step5.component';
import { MonthlyPaymentComponent } from './create-case/step4/monthly-payment/monthly-payment.component';
import { QuarterlyPaymentComponent } from './create-case/step4/quarterly-payment/quarterly-payment.component';
import { DeliverablesPaymentComponent } from './create-case/step4/deliverables-payment/deliverables-payment.component';
import { TruncateLettersModule } from 'src/app/core/pipes/truncate-letters/truncate-letters.module';
import { SharedModule } from 'src/app/shared/shared.module';
const MatModuels =[
  MatTabsModule,
  MatStepperModule,
  AccordionModule.forRoot(),
  MatTableModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSnackBarModule,
  MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
]
@NgModule({
  declarations: [
    CreateCaseComponent,
    CounterChartComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    MonthlyPaymentComponent,
    QuarterlyPaymentComponent,
    DeliverablesPaymentComponent,

  ],
  imports: [
    CommonModule,
    CreateCaseRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    TruncateLettersModule,
    SafeHtmlModule,
    ...MatModuels,
    SharedModule,
    InlineSVGModule,
  ]
})
export class CreateCaseModule { }
