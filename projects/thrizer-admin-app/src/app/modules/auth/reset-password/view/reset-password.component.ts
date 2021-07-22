import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ResetPasswordService } from '../service/reset-password.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LOGIN } from 'projects/thrizer-admin-app/src/app/constants/routes';
import { ToastService } from 'projects/thrizer-admin-app/src/app/shared/toast-notification/toast.service';
import { FormService } from 'projects/thrizer-admin-app/src/app/services/form.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  resetForm:FormGroup;
  metaToken:string;
  constructor(
    private _fb:FormBuilder,
    private _activatedRoute:ActivatedRoute,
    private _resetService:ResetPasswordService,
    private _router:Router,
    private _toast:ToastService,
    private _formService: FormService
    ) { 
    }

  ngOnInit(): void {
    this.createForm();
    this.metaToken = this._activatedRoute.snapshot.params.token;
  }

  createForm(){
    this.resetForm = this._fb.group(
      {
          password: this._formService.getControl('password'),
          // confirmPassword: this._formService.getControl('password')
      },
  );
  }

  getControl(control) {
    return this.resetForm.controls[control] as FormControl;
  } 

  onSubmit(){
    if(this.resetForm.invalid || this.resetForm.disabled){
      return;
    }
    this.resetForm.disable();
    const data = { ...this.resetForm.value, token: this.metaToken }
    this._resetService.resetPassword(data).then(responce=>{
     this._toast.success(responce['message']);
     this._router.navigate([LOGIN.fullUrl]);
    }).catch(err => {
      this.resetForm.enable();
      this._router.navigate([LOGIN.fullUrl]);
    });
  }

}
