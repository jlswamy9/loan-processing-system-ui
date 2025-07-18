import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './features/auth/services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService);
   const router = inject(Router);

  if(authService.isUserLoggedin()){
    return true;
  }
  else{
    return router.createUrlTree(['/login']);
  }
};
