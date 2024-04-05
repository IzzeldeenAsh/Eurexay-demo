import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnotherizedRoutingModule } from './unotherized-routing.module';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { InlineSVGModule } from 'ng-inline-svg';


@NgModule({
  declarations: [
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    UnotherizedRoutingModule,
    InlineSVGModule
  ]
})
export class UnotherizedModule { }
