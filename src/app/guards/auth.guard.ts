// guards/auth.guard.ts
// A functional CanActivateFn guard (Angular 14+ style).
// Simulates authentication check using localStorage.
// In production, replace with a real AuthService.

import { inject }               from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EmployeeService } from '../services/employee-service';

export const authGuard: CanActivateFn = ( route,  state) => {
  const employeeService = inject(EmployeeService)
  const router = inject(Router);
  const isLoggedIn = false;

  // 🔐 Check simulated login state
  //const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  if (employeeService.isAuthenticated()) {
    return true;                    // ✅ Access granted
  }

  return isLoggedIn
    ? true
    : router.createUrlTree(['home'], {
        queryParams: { returnUrl: state.url }
      });
};
  // Block navigation and redirect to /users with a query param
  // so the login prompt can explain why the user was redirected
  //return router.createUrlTree(['/users']), {
   //queryParams: {returnUrl: state.url }
  //}
  //return router.createUrlTree(['/users'], {
 //   queryParams: { returnUrl: state.url }
  //});
//};

