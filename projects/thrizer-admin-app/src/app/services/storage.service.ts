import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "projects/thrizer-admin-app/src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private menuData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor() {}
  clearStorage() {
    localStorage.removeItem(environment.tokenKey);
  }
  getAuthToken() {
    return localStorage.getItem(environment.tokenKey);
  }
  setAuthToken(token) {
    localStorage.setItem(environment.tokenKey, token);
  }

  get menuDataArray(): Observable<any> {
    return this.menuData.asObservable();
  }

  unsetMenuData() {
    this.menuData.next(null);
  }
  setMenuData(menuData) {
    this.menuData.next(menuData);
  }

  trim(data) {
    for (const item in data) {
      if (typeof data[item] === "string") {
        data[item] = data[item].trim();
      }
    }
    return data;
  }

  offset() {
    try {
      return new Date().getTimezoneOffset();
    } catch (error) {
      return -300;
    }
  }

  parseDateToTimeStamp(obj: any) {
    const newValueInstance = Object.assign({}, obj);
    (function isEmpty(data: any): boolean {
      if (typeof data === "object" && data !== null) {
        if (Array.isArray(data)) {
          data.forEach((item: any, index: number) => {
            if (isEmpty(item)) {
              data.splice(index, 1);
            }
          });
        } else {
          Object.keys(data).map((key, index) => {
            if (data[key] instanceof Date) {
              // data[key] = new Date(data[key]).toISOString();
              let ddd = new Date(
                Date.UTC(
                  data[key].getUTCFullYear(),
                  data[key].getUTCMonth(),
                  data[key].getUTCDate() + 1
                )
              );
              data[key] = ddd.toISOString();
            }
          });
        }
      }
      return data;
    })(newValueInstance);

    return newValueInstance;
  }
}
