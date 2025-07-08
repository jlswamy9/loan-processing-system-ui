import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { authGuard } from '../../auth-guard';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path:'',
    component:Dashboard,
  }
];

@NgModule({
  declarations:[Dashboard],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
