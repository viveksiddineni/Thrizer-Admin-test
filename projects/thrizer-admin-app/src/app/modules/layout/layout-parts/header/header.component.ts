import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'projects/thrizer-admin-app/src/app/services/data-transfer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dataServiceSubscription: Subscription;
  profileDetail:any;

  constructor( private _dataService: DataTransferService,) {
    this.getProfileDetail();
   }

  ngOnInit(): void {
     this.dataServiceSubscription =this._dataService.profileDetail.subscribe(data => {
      if(data) {
        this.profileDetail = data;
      }}
    )
  }

   getProfileDetail() {
    this.dataServiceSubscription =this._dataService.getProfileDetail().subscribe(data => {
      if(data) {
        this.profileDetail = data;
        console.log(this.profileDetail, "this.profileDetail");
      }}
    )
  }

  
  ngOnDestroy(){
    this.dataServiceSubscription.unsubscribe();
  }

}
