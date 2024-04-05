import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';

import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { PageTitleComponent } from './common/header/page-title/page-title.component';
import { HeaderMenuComponent } from './common/header/header-menu/header-menu.component';
import { ToolbarComponent } from './common/toolbar/toolbar.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { TopbarComponent } from './common/topbar/topbar.component';
import { NotificationsInnerComponent } from './common/header/notifications-inner/notifications-inner.component';
import { CasesSubMenuComponent } from './common/header/header-menu/cases-sub-menu/cases-sub-menu.component';
import { PrizesSubComponent } from './common/header/header-menu/prizes-sub/prizes-sub.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [FeatureModuleComponent,SidebarComponent,NotificationsInnerComponent,ToolbarComponent,HeaderComponent,PageTitleComponent,HeaderMenuComponent,TopbarComponent, CasesSubMenuComponent, PrizesSubComponent],
  imports: [CommonModule, FeatureModuleRoutingModule,InlineSVGModule,MatDialogModule],
 
})
export class FeatureModuleModule {}
