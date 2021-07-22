import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './view/forgot-password.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AbsoluteRoutingModule } from '../../../pipes/absolute-routing/absolute-routing.module';
import { ForgotPasswordService } from './service/forgot-password.service';
import { ValidationErrorPipeModule } from 'projects/thrizer-admin-app/src/app/pipes/validation-error/validation-error-pipe.module';
import { AuthGuard } from 'projects/thrizer-admin-app/src/app/guards/auth/auth.guard';

const routes: Routes = [
  {path: '', component: ForgotPasswordComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [ForgotPasswordComponent],
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
  providers:[ForgotPasswordService]
})
export class ForgotPasswordModule { }
