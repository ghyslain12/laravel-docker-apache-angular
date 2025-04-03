import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('--- authGuard appelé pour :', state.url, '---');
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();
  const isAuth = authService.isAuthenticated();

  console.log('Token :', token);
  console.log('isAuthenticated :', isAuth);
  console.log('Route demandée :', route.url.map(segment => segment.path));
  console.log('État de la navigation :', state.url);

  if (isAuth) {
    console.log('Accès autorisé');
    return true;
  } else {
    console.log('Redirection vers /login');
    router.navigate(['/login']);
    return false;
  }
};
