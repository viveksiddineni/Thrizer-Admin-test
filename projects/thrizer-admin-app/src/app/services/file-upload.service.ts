import { Injectable } from "@angular/core";
import * as S3 from "aws-sdk/clients/s3";
import { environment } from "projects/thrizer-admin-app/src/environments/environment";
import { LoaderService } from "./loader.service";
import { UtilityService } from "projects/thrizer-admin-app/src/app/shared/utility/utility.service";
import { SOMETHING_WENT_WRONG } from "projects/thrizer-admin-app/src/app/constants/messages";

@Injectable({
  providedIn: "root",
})
export class FileUploadService {
  bucket: S3;
  constructor(
    private _loaderService: LoaderService,
    private _utilityService: UtilityService
  ) {
    this.bucket = new S3({
      accessKeyId: environment.config.AWS_ACCESS_KEY,
      secretAccessKey: environment.config.AWS_SECRET_KEY,
      region: environment.config.AWS_REGION,
    });
  }
  async uploadFile(fileToUpload: File, loader = true) {
    try {
      const params = {
        Bucket: environment.config.AWS_BUCKET,
        Key: fileToUpload.name || new Date().getTime() + ".png",
        Body: fileToUpload,
        ACL: "public-read",
      };
      if (loader) {
        this._loaderService.loading$.next(true);
      }
      return new Promise((resolve, reject) => {
        this.bucket
          .upload(params, (err, data) => {
            if (err) {
              if (loader) {
                this._loaderService.loading$.next(false);
              }
              this._utilityService.showAlert(SOMETHING_WENT_WRONG);
              reject(err);
            } else {
              if (loader) {
                this._loaderService.loading$.next(false);
              }
              resolve(data);
            }
          })
          .on("httpUploadProgress", (progress) => {});
      });
    } catch (err) {
      this._loaderService.loading$.next(false);
      console.error(err.message);
    }
  }
  async uploadMultipleFiles(files) {
    try {
      this._loaderService.loading$.next(true);
      let data = [];
      for (let i = 0; i < files.length; i++) {
        data.push(this.uploadFile(files[i], false));
      }
      let result = await Promise.all(data);
      this._loaderService.loading$.next(false);
      return Promise.resolve(result);
    } catch (err) {
      this._loaderService.loading$.next(false);
      return Promise.reject(err);
    }
  }

  isFile = (input) => "File" in window && input instanceof File;

  async uploadMultipleFilesWithExistingUrls(files: Array<any>) {
    try {
      this._loaderService.loading$.next(true);
      let data = [];
      for (let i = 0; i < files.length; i++) {
        if (this.isFile(files[i])) {
          data.push(this.uploadFile(files[i], false));
        } else {
          data.push(files[i]);
        }
      }
      let result = await Promise.all(data);
      this._loaderService.loading$.next(false);
      return Promise.resolve(result);
    } catch (err) {
      this._loaderService.loading$.next(false);
      return Promise.reject(err);
    }
  }
}
