import { Injectable } from '@angular/core';
import { HttpService } from 'projects/thrizer-admin-app/src/app/services/http.service';
import { FORGOT_PASSWORD_API } from 'projects/thrizer-admin-app/src/app/constants/urls';

@Injectable()
export class ForgotPasswordService {
  isRequested:boolean=false;
  constructor(private _http:HttpService) { }

  forgetPassword(body:any){
    return this._http.patch(FORGOT_PASSWORD_API, body).toPromise();
  }
}
