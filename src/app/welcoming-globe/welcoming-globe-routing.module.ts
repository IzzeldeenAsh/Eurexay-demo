import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeGlobeComponent } from './welcome-globe/welcome-globe.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeGlobeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomingGlobeRoutingModule { }
