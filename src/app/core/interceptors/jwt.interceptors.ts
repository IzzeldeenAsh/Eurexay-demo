import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/appconfig';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private apiUrl = `${API_BASE_URL}`;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');

    if (req.url.indexOf(`${this.apiUrl}/api/`) !== -1 && token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(req);
  }
}
