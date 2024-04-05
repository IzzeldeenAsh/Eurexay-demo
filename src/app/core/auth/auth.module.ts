import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CustomDropdownCountriesComponent } from './register-form/custom-dropdown-countries/custom-dropdown-countries.component';
import { EnumToArrayModule } from '../reusable-components/enum-to-array/enum-to-array.module';
import { EmailCodeVerificationComponent } from './email-code-verification/email-code-verification.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RegisterFormComponent,
    ForgotPasswordComponent,
    CustomDropdownCountriesComponent,
    EmailCodeVerificationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatNativeDateModule,
    MatFormFieldModule,
    EnumToArrayModule,
    MatSelectModule,
    HttpClientModule,
    InlineSVGModule,
    NgxMaskModule.forRoot(),
    MatRadioModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    DropdownModule,
    MatIconModule,
    SharedModule
    
  ],
})
export class AuthModule {}
