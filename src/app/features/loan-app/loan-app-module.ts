import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanAppRoutingModule } from './loan-app-routing-module';
import { LoanAppForm } from './components/loan-app-form/loan-app-form';
import { LoanAppList } from './components/loan-app-list/loan-app-list';
import { LoanAppDetails } from './components/loan-app-details/loan-app-details';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoanAppForm,LoanAppList,LoanAppDetails],
  imports: [
    CommonModule,
    LoanAppRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoanAppModule { }
