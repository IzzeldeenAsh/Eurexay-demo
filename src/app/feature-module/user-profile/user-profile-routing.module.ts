import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileOverviewComponent } from './user-profile/user-profile-overview/user-profile-overview.component';
import { UserProfileDocumentsComponent } from './user-profile/user-profile-documents/user-profile-documents.component';
import { AccountDetailsComponent } from './user-profile/account-details/account-details.component';
import { SettingsComponent } from './user-profile/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: UserProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'up-overview',
        pathMatch: 'full',
      },
      {
        path: 'up-overview',
        component: UserProfileOverviewComponent,
      },
      {
        path: 'up-overview/:email',
        component: UserProfileOverviewComponent,
      },
      {
        path: 'up-documents',
        component: UserProfileDocumentsComponent,
      },
      {
        path: 'account-details',
        component: AccountDetailsComponent,
      },
      {
        path: 'account-settings',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserProfileRoutingModule {}
