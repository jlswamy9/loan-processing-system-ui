import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { MainLoyoutComponent } from './features/layout/main-layout/main-loyout-component/main-loyout-component';

export const routes: Routes = [
    {
        path:'',
        component:MainLoyoutComponent,
        canActivate:[authGuard],
        children:[
            {
                path:'',
                loadChildren:()=>import('./features/dashboard/dashboard-module').then((m)=>m.DashboardModule)
            },
            {
                path:'loans',
                loadChildren:()=>import('./features/loan-app/loan-app-module').then((m)=>m.LoanAppModule)
            }
        ],
        
    },
    {
        path:'login',
        loadChildren:()=>import('./features/auth/auth-module').then((m)=>m.AuthModule)
    },
   
];
