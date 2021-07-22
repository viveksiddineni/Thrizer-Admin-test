import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPopupData, IPopupResponse } from 'projects/thrizer-admin-app/src/app/models/common-models';
import { POPUP_MESSAGES } from 'projects/thrizer-admin-app/src/app/constants/messages';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  modalData: IPopupData = {
    title: POPUP_MESSAGES.confrim,
    message: '',
    confirmButtonText: POPUP_MESSAGES.yes,
    cancelButtonText: POPUP_MESSAGES.no
  };
  reason: string;
  responseData: IPopupResponse = {
    note: 'yes'
  };

  constructor(
    private dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data: IPopupData
  ) {
    this.modalData = { ...this.modalData, ...this.data };
  }

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm() {
    if (this.modalData && this.reason && this.reason.trim() == '')
      return;
  }

}
