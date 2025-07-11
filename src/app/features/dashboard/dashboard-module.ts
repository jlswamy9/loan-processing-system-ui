import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { SharedModule } from '../shared/shared-module';
import { Dashboard } from './components/dashboard/dashboard';


@NgModule({
  declarations: [Dashboard],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
