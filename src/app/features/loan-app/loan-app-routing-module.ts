import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanAppList } from './components/loan-app-list/loan-app-list';
import { LoanAppForm } from './components/loan-app-form/loan-app-form';
import { LoanAppDetails } from './components/loan-app-details/loan-app-details';
import { KycForm } from './components/kyc-form/kyc-form';
import { BasicForm } from './components/basic-form/basic-form';
import { SecurityDetailsForm } from './components/security-details-form/security-details-form';
import { CreditAppraisal } from './components/credit-appraisal/credit-appraisal';

const routes: Routes = [
  {
    path:'',
    component:LoanAppList
  },
  {
    path:'create',
    children:[
      { path:'',component:KycForm},
      {path:'basic', component:BasicForm},
      {path:'security', component:SecurityDetailsForm},
      {path:'appraisal',component:CreditAppraisal}
    ]
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
