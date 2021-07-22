import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './view/reset-password.component';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordService } from './service/reset-password.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AbsoluteRoutingModule } from '../../../pipes/absolute-routing/absolute-routing.module';
import { ValidationErrorPipeModule } from 'projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module';
import { AuthGuard } from 'projects/thrizer-admin-app/src/app/guards/auth/auth.guard';

const routes: Routes = [
  {path: '', component: ResetPasswordComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    AbsoluteRoutingModule,
    ValidationErrorPipeModule
  ],
  providers:[ResetPasswordService]
})
export class ResetPasswordModule { }
