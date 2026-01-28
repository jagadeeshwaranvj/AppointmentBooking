import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from './authservice';
export const authguardGuard=(role:'admin' | 'provider' | 'customer'): CanActivateFn => {
  return () => {
    const authService = inject(Authservice);
    const router = inject(Router);
    const currentRole = authService.getRole();
    if (currentRole === role) {
      return true;
    }
    router.navigate(['/']);
    return false;
  }

};
