import { HttpInterceptorFn } from '@angular/common/http';

// CONSTANTE PARA INTERCEPTAR MIS TOKENS

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // 1. Obtenemos el token de acceso (el de vida corta)
  const accessToken = localStorage.getItem('access'); // O 'access_token' como prefieras llamarlo

  // Definimos rutas que NO deben llevar token (Login, Registro)
  // Nota: Si intentas enviar un token expirado al Refresh, fallará, así que mejor no enviarlo ahí tampoco.
  const isAuthRequest = req.url.includes('/api/auth/');

  // 2. Si hay token Y NO es una petición de autenticación
  if (accessToken && !isAuthRequest) {

    // Clonamos la petición para inyectar el Header
    const authReq = req.clone({
      setHeaders: {
        // CAMBIO CLAVE: En JWT se usa 'Bearer', no 'Token'
        Authorization: `Bearer ${accessToken}`,

      }
    });

    // Pasamos la petición clonada
    return next(authReq);
  }

  // Si no aplica nada, pasa la petición tal cual
  return next(req);
};
