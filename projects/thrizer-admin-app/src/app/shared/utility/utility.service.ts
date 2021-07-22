import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";
import { IPopupResponse, IPopupData } from "../../models/common-models";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SOMETHING_WENT_WRONG, POPUP_MESSAGES } from "../../constants/messages";
import { HttpService } from "projects/thrizer-admin-app/src/app/services/http.service";
import { ADMIN } from "projects/thrizer-admin-app/src/app/constants/urls";
import { StorageService } from "projects/thrizer-admin-app/src/app/services/storage.service";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  profileSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  profileData: any;
  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private http: HttpService,
    private storageService: StorageService
  ) {}

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

  errorAlert(error) {
    let data: IPopupData = {
      title: "",
      message:
        error && error.error && error.error.message
          ? error.error.message
          : SOMETHING_WENT_WRONG,
      confirmButtonText: POPUP_MESSAGES.close,
      hideCancelButton: true,
    };
    this.openDialog(data).subscribe((success) => {});
  }
  showFormError() {
    let data: IPopupData = {
      title: "",
      message: POPUP_MESSAGES.FORM_ERROR,
      confirmButtonText: POPUP_MESSAGES.close,
      hideCancelButton: true,
    };
    this.openDialog(data).subscribe((success) => {});
  }
  showAlert(message, duration = 3000) {
    this._snackBar.open(message, "Close", {
      duration,
    });
  }

  openDialog(data: IPopupData): Observable<IPopupResponse> {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: "391px",
      data: data,
    });
    return dialogRef.afterClosed();
  }
  async getprofileDetail() {
    try {
      if (this.profileData) {
        return this.profileData;
      }

      const resp = await this.http.get(ADMIN).toPromise();
      this.profileSubject$.next(resp.data);
      this.profileData = resp.data;
      this.storageService.setMenuData(resp.data.roles);
      console.log(resp);
      return this.profileData;
    } catch (error) {}
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
            // console.log(data[key] instanceof Date);
            if (data[key] instanceof Date) {
              data[key] = new Date(data[key]).toISOString();
            }
          });
        }
      }
      return data;
    })(newValueInstance);

    return newValueInstance;
  }
}
