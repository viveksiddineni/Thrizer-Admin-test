import { Component, OnInit } from "@angular/core";
import { LoaderService } from "./services/loader.service";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  showLoader = false;
  constructor(
    private loaderService: LoaderService,
    private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) 
        {
        this.showLoader = false;
      }
    });
  }

  ngOnInit(): void {
    this.loaderService.loading$.subscribe((data) => {
      setTimeout(() => {
        this.showLoader = data;
      }, 0);
    });
  }
}
