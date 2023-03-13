import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { LocalStorageService } from './services/local-storage.service';
import { AuthServiceService } from './services/auth-service.service';
import { AuthGuard } from './authGuard/auth.guard';

@Injectable()
export class Interceptor implements HttpInterceptor {

  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  isRefreshing: boolean = false;

  constructor(private localStorage: LocalStorageService, private authService: AuthServiceService, private authGuard: AuthGuard) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): any {         
    const idToken = this.localStorage.get("idToken");
    if (idToken !==  null) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${idToken}` } });
    }
    
    return next.handle(request).pipe(
      catchError((error) => {  
        if(error instanceof HttpErrorResponse && error.status === 401){
          return this.handle401Error(request, next);
        }
        return throwError(() => new Error(error));
      }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if(!this.isRefreshing){
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      
      const refreshToken = this.localStorage.get("refreshToken");
      if(refreshToken){
        return this.authService.refreshIDToken(refreshToken).pipe(
          switchMap((token: any) => {            
            this.isRefreshing = false;
            this.localStorage.set("accessToken", token.response.accessToken);
            this.localStorage.set("idToken", token.response.idToken);
            this.refreshTokenSubject.next(token.response.idToken);
            request = request.clone({ setHeaders: { Authorization: `Bearer ${token.response.idToken}` } });
            return next.handle(request);
          }), catchError((err) => {
            this.isRefreshing = false;        
            this.authGuard.logOut();
            return throwError(() => new Error(err));
          })
        );
      }      
    }
    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((idToken) => {     
        this.localStorage.set("idToken", idToken);
        request = request.clone({ setHeaders: { Authorization: `Bearer ${idToken}` } });
        return next.handle(request);
      })
    );
  }
}
