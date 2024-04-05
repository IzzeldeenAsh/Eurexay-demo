import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomingGlobeRoutingModule } from './welcoming-globe-routing.module';
import { WelcomeGlobeComponent } from './welcome-globe/welcome-globe.component';


@NgModule({
  declarations: [
    WelcomeGlobeComponent
  ],
  imports: [
    CommonModule,
    WelcomingGlobeRoutingModule
  ]
})
export class WelcomingGlobeModule { }
