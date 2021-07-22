import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IRadio } from 'projects/thrizer-admin-app/src/app/constants/interface';

@Component({
  selector: 'app-radio-filter',
  templateUrl: './radio-filter.component.html',
  styleUrls: ['./radio-filter.component.scss']
})
export class RadioFilterComponent implements OnInit {

  config:any;
  @ViewChildren("radiobtn") radiobtn: QueryList<any>;
  @Input() 
  set radioConfig(data: IRadio) {
    this.config = data;
    console.log(this.config);
    
    if (data && data.data && data.data.length > 0) {
      this.setData();
    }
  }
  setData() {
    

    setTimeout(() => {

      // console.log(this.config);
      if (this.config.control.value || this.config.control.value===0) {
        const selectedCheck = this.config.control.value;
        this.radiobtn.toArray().map((radiobtn) => {
          if (radiobtn.value===selectedCheck) {
            // console.log("checked");
            radiobtn.checked= true;
          }
        });
      }
      else{
        this.radiobtn.toArray().forEach((radiobtn)=>{
          radiobtn.checked=false;
        })
      }
    }, 500);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(event){
    const value=event.value;
    this.config.control.setValue(value);

  }

}
