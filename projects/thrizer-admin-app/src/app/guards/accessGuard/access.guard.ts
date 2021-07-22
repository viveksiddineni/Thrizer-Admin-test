import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanLoad,
  Route,
  UrlSegment,
} from "@angular/router";
import { AccessPipe } from "../../pipes/access/access.pipe";
import { StorageService } from "projects/thrizer-admin-app/src/app/services/storage.service";
import { UtilityService } from "projects/thrizer-admin-app/src/app/shared/utility/utility.service";
import { TOAST_MESSAGES } from "projects/thrizer-admin-app/src/app/constants/messages";
import { IPopupData } from "projects/thrizer-admin-app/src/app/models/common-models";
import { ACTION_NAME } from "projects/thrizer-admin-app/src/app/constants/enums";
import { Observable } from 'rxjs';
import { DASHBOARD } from 'projects/thrizer-admin-app/src/app/constants/routes';
@Injectable({
  providedIn: "root",
})
export class AccessGuard implements CanActivate,CanLoad {
  access: any = {};
  path: any;
  constructor(
    private storage: StorageService,
    private router: Router,
    private utiltityService: UtilityService
  ) {
    this.storage.menuDataArray.subscribe((accessModules) => {
      this.access = accessModules;
    });
  }
  canLoad(route: Route,
     segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
      //  console.log(route.data);
       const accessPipe = new AccessPipe(this.storage,this.utiltityService);
      //  console.log('route', route);
   
       const module = route.data["module"];
       const action = route.data["action"];
   
      //  console.log('guard module', module, accessPipe.transform(module, action));
   
       if (
         action
           ? accessPipe.transform(module, action)
           : accessPipe.transform(module)
       ) {
         return true;
       } else {
         if (action) {
           const data: IPopupData = {
             title: "Access",
             message: TOAST_MESSAGES.NO_ACCESS(module, action),
             hideCancelButton: true,
             confirmButtonText:"OK"
           };
           this.utiltityService.openDialog(data);
         } else {
           const data: IPopupData = {
             title: "Access",
             message: TOAST_MESSAGES.NO_ACCESS(module, ACTION_NAME.list),
             hideCancelButton: true,
             confirmButtonText:"OK"
           };
           this.utiltityService.openDialog(data);
         }
         this.router.navigate([DASHBOARD.fullUrl]);
         return false;
       }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const accessPipe = new AccessPipe(this.storage,this.utiltityService);
    // console.log('route', route);

    const module = route.data["module"];
    const action = route.data["action"];

    // console.log('guard module', module, accessPipe.transform(module, action));

    if (
      action
        ? accessPipe.transform(module, action)
        : accessPipe.transform(module)
    ) {
      return true;
    } else {
      if (action) {
        const data: IPopupData = {
          title: "Access",
          message: TOAST_MESSAGES.NO_ACCESS(module, action),
          hideCancelButton: true,
          confirmButtonText:"OK"
        };
        this.utiltityService.openDialog(data);
      } else {
        const data: IPopupData = {
          title: "Access",
          message: TOAST_MESSAGES.NO_ACCESS(module, ACTION_NAME.list),
          hideCancelButton: true,
          confirmButtonText:"OK"
        };
        this.utiltityService.openDialog(data);
      }
      this.router.navigate([DASHBOARD.fullUrl]);
      return false;
    }
  }
  // canLoad(route: Route): Promise<boolean> {
  //   const accessPipe = new AccessPipe(this.storage);
  //   console.log('route', route);
  //   // return Promise.resolve(false);
  //   const module = route.data['module'];
  //   const action = route.data['action'];

  //   console.log('guard module', module);

  //   if (
  //     action
  //       ? accessPipe.transform(module, action)
  //       : accessPipe.transform(module)
  //   ) {
  //     return Promise.resolve(true);
  //   } else {
  //     this._utiltityService.showAlert(TOAST_MESSAGES.NO_ACCESS);
  //     this.router.navigate([DASHBOARD.fullUrl()]);
  //     return Promise.reject();
  //   }
  // }
}
