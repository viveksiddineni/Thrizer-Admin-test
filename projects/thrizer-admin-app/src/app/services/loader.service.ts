import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  loading$ = new Subject<boolean>();
  constructor() {
    this.loading$.next(false);
  }

  showLoader(state: boolean) {
    this.loading$.next(state);
  }
}
