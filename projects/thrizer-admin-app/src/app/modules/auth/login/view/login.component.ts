import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { ToastService } from 'projects/thrizer-admin-app/src/app/shared/toast-notification/toast.service';
import { StorageService } from 'projects/thrizer-admin-app/src/app/services/storage.service';
import { FormService } from 'projects/thrizer-admin-app/src/app/services/form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm:FormGroup;
  constructor(
    private _fb:FormBuilder, 
    private _loginService: LoginService,
    private _storageService: StorageService,
    private _toast: ToastService,
    private _formService: FormService,
    private _router: Router
     ) { }

  ngOnInit(): void {
    this.cerateForm();
  }

  cerateForm(){
    this.loginForm = this._fb.group({
      email: this._formService.getControl('email'),
      password: this._formService.getControl('password')
    });
  }

  getControl(control) {
    return this.loginForm.controls[control] as FormControl;
  };

  onSubmit(){

    if (this.loginForm.invalid || this.loginForm.disabled){
      return;
    }
    this.loginForm.disable();
    this._loginService.login({...this.loginForm.value}).subscribe(responce => {
      if (responce['data']){
        this._storageService.setAuthToken(responce.data['authToken']);
      }
      this._router.navigate(['/']);
     }, err => {
       this.loginForm.enable();
    });
  }
}
