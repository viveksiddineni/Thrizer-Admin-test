import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ForgotPasswordService } from '../service/forgot-password.service';
import { Router } from '@angular/router';
import { LOGIN } from 'projects/thrizer-admin-app/src/app/constants/routes';
import { ToastService } from 'projects/thrizer-admin-app/src/app/shared/toast-notification/toast.service';
import { FormService } from 'projects/thrizer-admin-app/src/app/services/form.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm:FormGroup;
  constructor(
    private _fb:FormBuilder,
    private _router: Router,
    private _toast: ToastService,
    private _forgotPasswordService:ForgotPasswordService,
    private _formService: FormService) {
     }

  ngOnInit(): void {
    this.creatrForm();
  }

  creatrForm(){
    this.forgotForm = this._fb.group(
      { email: this._formService.getControl('email') }
    );
  }

  getControl(control) {
    return this.forgotForm.controls[control] as FormControl;
  }

  onSubmit(){
    if(this.forgotForm.invalid || this.forgotForm.disabled){
      return;
    }
    this.forgotForm.disable();
    this._forgotPasswordService.forgetPassword(this.forgotForm.value).then(responce =>{
      if(responce['statusCode']== 200){
        this._router.navigate([LOGIN.fullUrl]);
        this._toast.success(responce['message']);
      }
    }).catch( err => {
      this.forgotForm.enable();
    })
  }
}
