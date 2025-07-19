import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanAppRoutingModule } from './loan-app-routing-module';
import { LoanAppForm } from './components/loan-app-form/loan-app-form';
import { LoanAppList } from './components/loan-app-list/loan-app-list';
import { LoanAppDetails } from './components/loan-app-details/loan-app-details';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KycForm } from './components/kyc-form/kyc-form';
import { BasicForm } from './components/basic-form/basic-form';
import { SecurityDetailsForm } from './components/security-details-form/security-details-form';
import { CreditAppraisal } from './components/credit-appraisal/credit-appraisal';


@NgModule({
  declarations: [
    LoanAppForm, LoanAppList, LoanAppDetails, KycForm, BasicForm, SecurityDetailsForm, CreditAppraisal
  ],
  imports: [
    CommonModule,
    LoanAppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoanAppModule { }
