import { Injectable } from '@angular/core';
import { HttpService } from 'projects/thrizer-admin-app/src/app/services/http.service';
import { RESET_PASSWORD_API } from 'projects/thrizer-admin-app/src/app/constants/urls';

@Injectable()
export class ResetPasswordService {
  isRequested:boolean=false;
  constructor(private _http: HttpService) { }

  resetPassword(body){
    console.log(body);
    return this._http.patch(`${RESET_PASSWORD_API}`, body).toPromise();
  }
}
