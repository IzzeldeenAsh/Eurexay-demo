import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCasesComponent } from './main-cases/main-cases.component';
import { CasesListComponent } from './main-cases/cases-list/cases-list.component';
import { CasesClaimsComponent } from './main-cases/cases-claims/cases-claims.component';
import { CasesStatisticsComponent } from './main-cases/cases-statistics/cases-statistics.component';
import { DeletedCasesComponent } from './main-cases/deleted-cases/deleted-cases.component';
import { CaseManageComponent } from './main-cases/case-manage/case-manage.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'main-cases',
    pathMatch:'full'
  },
  {
    path:'main-cases',
    component:MainCasesComponent,
    children:[
      {
        path:'',
        redirectTo:'cases-list',
        pathMatch:'full'
      },
      {
      path:'cases-list',
      component:CasesListComponent
      }
      ,
      {
      path:'cases-claims',
      component:CasesClaimsComponent
      }
      ,
      {
      path:'cases-statistics',
      component:CasesStatisticsComponent,
      }
      ,
      {
      path:'deleted-cases',
      component:DeletedCasesComponent,
      }
      ,
      {
      path:'cases-manage/:caseUUID',
      component:CaseManageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }
