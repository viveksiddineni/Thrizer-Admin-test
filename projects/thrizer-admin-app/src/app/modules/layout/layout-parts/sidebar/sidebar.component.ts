import { Component, OnInit } from "@angular/core";
import {
  WORKOUT,
  GOAL,
  CATEGORY,
  TAGS,
  EQUIPMENT,
  DIFFICULTY_LEVEL,
  FOCUS_AREA,
  EXERCISE,
  COMMON_NUTRITION,
  COMMON_INGREDIENTS,
  POPULAR_WORKOUT,
  TRENDING_RECIPE,
  KITCHEN_EQUIPMENT,
  RECIPE_TYPE,
  RECIPE,
  LANGUAGE,
  SUB_ADMIN,
} from "projects/thrizer-admin-app/src/app/constants/routes";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";
import { ROLES } from "projects/thrizer-admin-app/src/app/constants/enums";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  show = false;
  MODULE_NAME = ROLES;
  routes = [
    WORKOUT.path,
    GOAL.path,
    CATEGORY.path,
    TAGS.path,
    EQUIPMENT.path,
    DIFFICULTY_LEVEL.path,
    FOCUS_AREA.path,
    EXERCISE.path,
    TRENDING_RECIPE.path,
    KITCHEN_EQUIPMENT.path,
    RECIPE_TYPE.path,
    COMMON_NUTRITION.path,
    COMMON_INGREDIENTS.path,
    POPULAR_WORKOUT.path,
    RECIPE.path,
    LANGUAGE.path,
  ];
  constructor(private router: Router) {
    this.shoLibraryChilds();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.shoLibraryChilds();
      } else if (event instanceof NavigationStart) {
        this.shoLibraryChilds();
      }
    });
  }

  shoLibraryChilds() {
    const parentRoute = this.router.url.split("/")[1];
    console.log(parentRoute);

    console.log(
      this.routes,
      parentRoute,
      this.routes.indexOf(parentRoute) > -1,
      this.router.url,
      parentRoute
    );

    if (this.routes.indexOf(parentRoute) > -1) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
