import { Injectable } from '@angular/core';
import { HttpService } from 'projects/thrizer-admin-app/src/app/services/http.service';
import { LOGIN_API } from 'projects/thrizer-admin-app/src/app/constants/urls';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from 'projects/thrizer-admin-app/src/app/shared/utility/utility.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
// import { LOGIN } from 'projects/thrizer-admin-app/src/app/constants/routes';

@Injectable()
export class LoginService {

  constructor(public http: HttpService,
              private utilityService: UtilityService,
              private router: Router, private _http: HttpClient) { }

  login(data) {
    data = this.utilityService.trim(data);
    console.log(data);
    return this.http.post(LOGIN_API, data).pipe(
        tap(
            response => this.loginSuccess(response.data)
        ),
        catchError(
            err => throwError(err)
        )
    );
}


/*
    Method For Login
*/
loginSuccess(data) {
    this.utilityService.setAuthToken(data['authToken']);
    this.router.navigate(['']);
}


}
