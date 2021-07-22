import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LOGIN, DASHBOARD, RESET_PASSWORD } from 'projects/thrizer-admin-app/src/app/constants/routes';
import { HttpService } from 'projects/thrizer-admin-app/src/app/services/http.service';
import { VALIDATE_TOKEN_API } from 'projects/thrizer-admin-app/src/app/constants/urls';
import { StorageService } from 'projects/thrizer-admin-app/src/app/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _storageService:StorageService,
    private _http: HttpService,
     private _router: Router){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = next.params.token;
      if (!this._storageService.getAuthToken()) {
        if (token) {
          return this.validateResetPasswordToken(token);
        }else {
          return true;
        }
      }
      else{
        // This will clear the local storage or logout from application to reset ths password
        if(token){
          this._storageService.clearStorage();
          const body = { token }
          this._router.navigate([`${RESET_PASSWORD.fullUrl}`, token]);
          return false;
        }
      }
      return this.navigation();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
     if (!this._storageService.getAuthToken()) {
      return true;
    }
    return this.navigation();
  }

  navigation():boolean{
    this._router.navigate([DASHBOARD.fullUrl]);
    return false;
  }

  validateResetPasswordToken(token) {
    return new Observable<boolean>((observer) => {
      this._http.get(`${VALIDATE_TOKEN_API}`, {token}).subscribe(
        response => {
          observer.next(true);
          observer.complete();
        }, err => {
          this._router.navigate([LOGIN.fullUrl]);
          observer.next(false);
          observer.complete();
        }
      )
    });
  }
}
