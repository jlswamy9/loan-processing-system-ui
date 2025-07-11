import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing-module';
import { MainLoyoutComponent } from './main-loyout-component/main-loyout-component';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [MainLoyoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainLayoutRoutingModule,
  ],
  exports:[MainLoyoutComponent]
})
export class MainLayoutModule { }
