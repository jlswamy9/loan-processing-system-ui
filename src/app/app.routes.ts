import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    {
        path:'login',
        loadChildren:()=>import('./features/auth/auth-module').then((m)=>m.AuthModule)
    },
    {
        path:'dashboard',
        canActivate:[authGuard],
        loadChildren:()=>import('./features/dashboard/dashboard-module').then((m)=>m.DashboardModule)
    }
];
