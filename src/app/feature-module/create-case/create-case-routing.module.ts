import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCaseComponent } from './create-case/create-case.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'create-case',
    pathMatch:'full'
  },
  {
    path:'create-case',
    component:CreateCaseComponent
  },
  {
    path:'edit-case/:caseUUID',
    component:CreateCaseComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCaseRoutingModule { }
