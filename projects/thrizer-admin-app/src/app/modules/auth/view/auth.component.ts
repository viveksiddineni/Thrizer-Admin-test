import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../services/meta.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private _metaService: MetaService) { }

  ngOnInit(): void {
    // this._metaService.setTitle("TARA");
  }

}
