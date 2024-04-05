import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersMainComponent } from './offers-main/offers-main.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  {
    path: '',
    component: OffersMainComponent,
    children: [{ path: 'userProfile', component: OffersComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersRoutingModule {}
