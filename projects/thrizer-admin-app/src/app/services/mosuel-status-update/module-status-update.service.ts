import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";
import { UPDATE_STATUS_PATCH } from "projects/thrizer-admin-app/src/app/constants/urls";
import { MODULE_NAME, ELEMENT_STATUS } from "projects/thrizer-admin-app/src/app/constants/enums";
import { UtilityService } from "projects/thrizer-admin-app/src/app/shared/utility/utility.service";
import { COMMON_MESSAGES } from "projects/thrizer-admin-app/src/app/constants/messages";
import { IPopupData } from "projects/thrizer-admin-app/src/app/models/common-models";

@Injectable({
  providedIn: "root",
})
export class ModuleStatusUpdateService {
  constructor(
    private http: HttpService,
    private utilityService: UtilityService
  ) {}

  updateMOduleStatus(body) {
    return this.http.patch(UPDATE_STATUS_PATCH, body, { showLoader: true });
  }

  async updateStatus(moduleName, status, id, title) {
    const body = {
      status,
      _id: id,
      moduleName,
    };
    console.log({ body });

    switch (body.status) {
      case ELEMENT_STATUS.ACTIVE:
        const dialogData1: IPopupData = {
          message: COMMON_MESSAGES.ACTIVE.confirm(title),
          title,
        };
        const resp1 = await this.utilityService
          .openDialog(dialogData1)
          .toPromise();

        if (resp1) {
          const result1 = await this.update(body, title);
          return result1;
        }

        break;
      case ELEMENT_STATUS.BLOCKED:
        const dialogData2: IPopupData = {
          message: COMMON_MESSAGES.BLOCKED.confirm(title),
          title,
        };
        const resp2 = await this.utilityService
          .openDialog(dialogData2)
          .toPromise();
        if (resp2) {
          const result1 = await this.update(body, title);
          return result1;
        }
        break;
      case ELEMENT_STATUS.DELETED:
        const dialogData3: IPopupData = {
          message: COMMON_MESSAGES.DELETED.confirm(title),
          title,
        };

        const resp3 = await this.utilityService
          .openDialog(dialogData3)
          .toPromise();
        if (resp3) {
          const result1 = await this.update(body, title);
          return result1;
        }
        break;

      default:
        break;
    }
  }

  async update(body, title) {
    try {
      const resp = await this.updateMOduleStatus(body).toPromise();
      switch (body.status) {
        case ELEMENT_STATUS.ACTIVE:
          this.utilityService.showAlert(COMMON_MESSAGES.ACTIVE.success(title));

          break;
        case ELEMENT_STATUS.BLOCKED:
          this.utilityService.showAlert(COMMON_MESSAGES.BLOCKED.success(title));

          break;
        case ELEMENT_STATUS.DELETED:
          this.utilityService.showAlert(COMMON_MESSAGES.DELETED.success(title));

          break;

        default:
          break;
      }
      return true;
    } catch (error) {}
  }
}
