import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { Login } from './components/login/login';
import { AuthService } from './services/auth-service';
import {  provideHttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared-module';


@NgModule({
  declarations: [Login],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[AuthService,provideHttpClient()]
})
export class AuthModule { }
