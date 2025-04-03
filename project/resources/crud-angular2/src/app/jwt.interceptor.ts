import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';
import { inject } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

export function jwtInterceptor(request: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
  const authService = inject(AuthService);
  const token = authService.getToken();

  console.log('Interceptor exécuté pour :', request.url, 'Méthode :', request.method);
  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(request).pipe(
    tap(event => console.log('Réponse reçue pour :', request.url, 'Statut :', (event as any).status)),
    catchError(error => {
      console.error('Erreur HTTP pour :', request.url, 'Statut :', error.status);
      throw error;
    })
  );
}
