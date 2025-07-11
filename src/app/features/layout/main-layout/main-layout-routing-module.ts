import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLoyoutComponent } from './main-loyout-component/main-loyout-component';

const routes: Routes = [
  {
    path:'',
    component:MainLoyoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
