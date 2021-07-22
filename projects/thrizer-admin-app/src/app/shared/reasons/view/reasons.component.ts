import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { REJECT_REASON } from 'projects/thrizer-admin-app/src/app/constants/constants';
import { VALIDATION } from '../../error-message/forms.validator';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.scss']
})
export class ReasonsComponent implements OnInit {
  rejectReasons= REJECT_REASON; 
  selectedReason:Array<string>=[];
  constructor(private dialogRef: MatDialogRef<ReasonsComponent>) { }

  ngOnInit(): void {
  }

  onChangeReason(flag:boolean,reason:string){
    if(flag){
      this.selectedReason.push(reason);
    }else{
      const index = this.selectedReason.indexOf(reason);
      if(index!=-1){
        this.selectedReason.splice(index,1)
      }
    }
  }

  onReject(){
    this.dialogRef.close(this.selectedReason);
  }
}
