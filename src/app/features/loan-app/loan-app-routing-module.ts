import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanAppList } from './components/loan-app-list/loan-app-list';
import { LoanAppForm } from './components/loan-app-form/loan-app-form';
import { LoanAppDetails } from './components/loan-app-details/loan-app-details';

const routes: Routes = [
  {
    path:'',
    component:LoanAppList
  },
  {
    path:'create',
    component:LoanAppForm
  },
  {
    path:'details',
    component:LoanAppDetails
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanAppRoutingModule { }
