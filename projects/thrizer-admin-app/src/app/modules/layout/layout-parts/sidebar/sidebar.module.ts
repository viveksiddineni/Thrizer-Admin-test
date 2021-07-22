import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar.component";
import { AbsoluteRoutingModule } from "projects/thrizer-admin-app/src/app/pipes/absolute-routing/absolute-routing.module";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { AccessModule } from "projects/thrizer-admin-app/src/app/pipes/access/access.module";

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatListModule,
    AbsoluteRoutingModule,
    RouterModule,
    AccessModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
