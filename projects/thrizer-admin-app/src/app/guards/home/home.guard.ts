import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "projects/thrizer-admin-app/src/app/services/storage.service";
import { LOGIN } from "projects/thrizer-admin-app/src/app/constants/routes";
import { UtilityService } from "projects/thrizer-admin-app/src/app/shared/utility/utility.service";

@Injectable({
  providedIn: "root",
})
export class HomeGuard implements CanActivate, CanLoad {
  constructor(
    private _router: Router,
    private _storageService: StorageService,
    private utilityService: UtilityService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this._storageService.getAuthToken()) {
      return this.tokenVerify();
    }
    return this.navigate();
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (this._storageService.getAuthToken()) {
      return this.tokenVerify();
    }
    return this.navigate();
  }
  async tokenVerify() {
    await this.utilityService.getprofileDetail();
    return true;
  }

  navigate() {
    this._storageService.clearStorage();
    this._router.navigate([LOGIN.fullUrl]);
    return false;
  }
}
