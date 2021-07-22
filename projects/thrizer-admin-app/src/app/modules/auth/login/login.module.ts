import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./view/login.component";
import { Routes, RouterModule } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from "./service/login.service";
import { AbsoluteRoutingModule } from "../../../pipes/absolute-routing/absolute-routing.module";
import { UtilityService } from "projects/thrizer-admin-app/src/app/shared/utility/utility.service";
import { ValidationErrorPipeModule } from "projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module";
import { AuthGuard } from "projects/thrizer-admin-app/src/app/guards/auth/auth.guard";

const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    AbsoluteRoutingModule,
    ValidationErrorPipeModule,
  ],
  providers: [LoginService],
})
export class LoginModule {}
