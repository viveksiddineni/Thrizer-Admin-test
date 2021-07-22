import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { LoaderService } from "../services/loader.service";
import { LOGIN } from "../constants/routes";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { NO_INTERNET_CONNECTION } from "../constants/messages";
import { ApiConfig } from "../models/api.interface";
import { UtilityService } from "../shared/utility/utility.service";

@Injectable({
  providedIn: "root",
})
export class InterceptorService implements HttpInterceptor {
  constructor(
    private router: Router,
    private _utilityService: UtilityService,
    private _loaderService: LoaderService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers = {};
    headers["ip"] = "dummy ip";
    const token = this._utilityService.getAuthToken();

    let config: ApiConfig;
    config = JSON.parse(request.headers.get("config"));
    if (token) {
      headers["authorization"] = "Bearer " + token;
    }

    if (!navigator.onLine) {
      const error = new HttpErrorResponse({
        error: {
          httpCode: 510,
          statusCode: 510,
          message: NO_INTERNET_CONNECTION,
        },
      });
      if (!config.skipErrorPopup) {
        this._utilityService.errorAlert(error);
      }
      return throwError(error);
    }

    request.headers.delete("config");
    request.headers.delete("skipHeaders");
    request = request.clone({
      setHeaders: headers,
    });

    if (config && config.showLoader) {
      this._loaderService.loading$.next(true);
    }

    return next.handle(request).pipe(
      tap(
        (data) => {
          if (data instanceof HttpResponse) {
            if (config && config.showLoader) {
              this._loaderService.loading$.next(false);
            }
          }
        },
        (err: any) => {
          if (config && config.showLoader) {
            this._loaderService.loading$.next(false);
          }
          if (err instanceof HttpErrorResponse) {
            if (config && !config.skipErrorPopup) {
              this._utilityService.errorAlert(err);
            }
            if (
              err.status === 401 ||
              err.status === 440 ||
              err.status === 403
            ) {
              this._utilityService.clearStorage();
              this.router.navigate([LOGIN.fullUrl]);
            }
          }
        }
      )
    );
  }
}
