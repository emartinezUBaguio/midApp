// guards/auth.guard.ts
// A functional CanActivateFn guard (Angular 14+ style).
// Simulates authentication check using localStorage.
// In production, replace with a real AuthService.

import { inject }               from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // 🔐 Check simulated login state
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  if (isAuthenticated) {
    return true;                    // ✅ Access granted
  }

  router.navigate(['/users']);      // 🚫 Redirect if not authenticated
  return false;
};
