import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ApiResponse, ApiConfig } from "../models/api.interface";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.url;
  }

  post<T = any>(url, data, config?: ApiConfig): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(
      this.apiUrl + url,
      data,
      this.getCustomHeader(config)
    );
  }

  put<T = any>(url, data, config?: ApiConfig): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(
      this.apiUrl + url,
      data,
      this.getCustomHeader(config)
    );
  }

  patch<T = any>(url, data, config?: ApiConfig): Observable<ApiResponse<T>> {
    return this.http.patch<ApiResponse<T>>(
      this.apiUrl + url,
      data,
      this.getCustomHeader(config)
    );
  }
  delete<T = any>(url, config?: ApiConfig): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(
      this.apiUrl + url,
      this.getCustomHeader(config)
    );
  }

  deleteWithQuery<T = any>(
    url,
    httpParams?: any,
    config?: ApiConfig
  ): Observable<ApiResponse<T>> {
    for (let item in httpParams) {
      if (
        httpParams[item] === "" ||
        httpParams[item] === undefined ||
        httpParams[item] === null
      ) {
        delete httpParams[item];
      }
    }
    const header = this.getCustomHeader(config);
    if (httpParams) {
      header["params"] = httpParams;
    }
    return this.http.delete<ApiResponse<T>>(this.apiUrl + url, header);
  }

  get<T = any>(
    url,
    httpParams?: any,
    config?: ApiConfig
  ): Observable<ApiResponse<T>> {
    for (let item in httpParams) {
      if (
        httpParams[item] === "" ||
        httpParams[item] === undefined ||
        httpParams[item] === null
      ) {
        delete httpParams[item];
      }
    }
    const header = this.getCustomHeader(config);
    if (httpParams) {
      header["params"] = httpParams;
    }
    return this.http.get<ApiResponse<T>>(this.apiUrl + url, header);
  }

  getCustomHeader(config) {
    if (config && config.customHeader) {
      return {
        headers: {
          config: JSON.stringify(config || {}),
          ...config.customHeader,
        },
      };
    }
    return {
      headers: {
        config: JSON.stringify(config || {}),
      },
    };
  }

  fetchLanguageData(url): Observable<any> {
    return this.http.get(url);
  }
}
