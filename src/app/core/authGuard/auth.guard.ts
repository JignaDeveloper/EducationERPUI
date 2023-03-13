import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthServiceService, private router: Router, private localStorage: LocalStorageService){}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const url = state.url;
      return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const isAuthenticated = this.authService.getAuthStatus();
    if (!isAuthenticated) {
      if (url.indexOf('login') === -1 && url.indexOf('verification') === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    } else {
      if (url.indexOf('login') > -1 || url.indexOf('verification') > -1) {
        return false;
      }
      return true;
    }
  }

  logOut(){    
    this.localStorage.delete('accessToken');
    this.localStorage.delete('idToken');
    this.localStorage.delete('refreshToken');
    this.localStorage.delete('userDetails');
    this.router.navigate(['/']);
  }
  
}
