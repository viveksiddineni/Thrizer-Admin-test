import { Injectable } from '@angular/core';
import { HttpService } from 'projects/thrizer-admin-app/src/app/services/http.service';
import { Router } from '@angular/router';

@Injectable()
export class LayoutService {

  constructor(private _http:HttpService,private _router: Router,) { }
}
