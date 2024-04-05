import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarModule } from 'src/app/core/reusable-components/navbar/navbar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NavbarModule, HomeRoutingModule],
})
export class HomeModule {}
