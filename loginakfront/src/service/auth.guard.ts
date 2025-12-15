import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'; // <--- Nueva forma de inyectar dependencias
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // 1. Inyectamos servicios dentro de la función (sin constructor)
  const authService = inject(AuthService);
  const router = inject(Router);

  // 2. Usamos tu lógica original
  if (!authService.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
