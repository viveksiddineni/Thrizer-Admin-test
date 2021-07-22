import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { ADMIN, USER_DETAILS } from '../constants/urls';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class DataTransferService {
    profileDetail = new BehaviorSubject<any>(null);
    profileData:any;

    constructor(private _http: HttpService) {}

    clearStorage() {
        localStorage.removeItem(environment.tokenKey);
    }

    getAuthToken() {
        return localStorage.getItem(environment.tokenKey);
    }
    
    setAuthToken(token) {
        localStorage.setItem(environment.tokenKey, token);
    }

    trim(data) {
        for (const item in data) {
          if (typeof data[item] === "string") {
            data[item] = data[item].trim();
          }
        }
        return data;
    }

    getProfileDetail() {
        return new Observable((observer) => {
            if (this.profileData) {
                this.profileDetail.next(this.profileData)
                observer.next(this.profileData);
            } else {
                this._http.get(ADMIN).subscribe(response => {
                    
                    if (response['statusCode'] === 200) {
                        this.profileData = response['data'];
                        observer.next(this.profileData);
                        this.profileDetail.next(this.profileData);
                    } else {
                        this.profileDetail.next(null);
                        observer.next(null);
                    }
                    }, err => {
                        console.log(err.error.message);
                        observer.next(null);
                        this.profileDetail.next(null);
                    }
                );
            }
        });
    }
}
