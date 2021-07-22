import { Component, OnInit, Inject, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ImageCroppedEvent } from '../image-cropper/interfaces';
import { ToastService } from '../../toast-notification/toast.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'ps-upload-popup',
  templateUrl: './upload-popup.component.html',
  styleUrls: ['./upload-popup.component.scss']
})

export class UploadPopupComponent implements OnInit {
  @Output() myEvent = new EventEmitter();
  @ViewChild('img') imageRef:ElementRef;
  croppedImageFile: any;
  aspectRatio: any = 4 / 4;
  resizeToWidth: any = 350;
  realImage: any = "";
  cropperarea = false;
  imageChangedEvent: any = "";
  croppedImage: any = "";
  constructor(
    private dialogRef: MatDialogRef<UploadPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toast: ToastService) { }

  ngOnInit() {
    if (this.data && this.data.inputRatio !== null) {
      this.aspectRatio = this.data.inputRatio;
      this.resizeToWidth = this.data.inputWidth;
    }
  }

  /* image cropping functions */

  fileChangeEvent(event: any): void {    
    if (event.target.files.length <= 0) {
      this.imageRef.nativeElement.value = '';
      return;
    }
    
    if (event.target.files[0].size > 5242880) {
      this.imageRef.nativeElement.value = '';
      this.toast.warning("Please select image of less than 5 MB.");
      return;
    }
    let typesOfImages = [];
    if (event.target.files[0].type !== "") {
      typesOfImages = event.target.files[0].type.split("/");
    }
    if (this.data && this.data.format === 'png') {
      if (typesOfImages.length !== 0 && (typesOfImages[1].toLowerCase() === "png")) {
        this.realImage = event.target.files[0];
        this.imageChangedEvent = event;
      } else {
        this.imageRef.nativeElement.value = '';
        this.toast.warning("Uploaded file is not a valid image. Only PNG file are allowed");
      }
    }
    else {
      if (typesOfImages.length !== 0 && (typesOfImages[1].toLowerCase() === "png" || typesOfImages[1].toLowerCase() === "jpg" || typesOfImages[1].toLowerCase() === "jpeg")) {
        this.realImage = event.target.files[0];
        this.imageChangedEvent = event;
      } else {
        this.imageRef.nativeElement.value = '';
        this.toast.warning("Uploaded file is not a valid image. Only JPG, PNG & JPEG files are allowed");
      }
    }

  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.croppedImageFile = event.file;
  }

  cancel() {
    this.dialogRef.close(false);
  }

  dataURLtoFile(dataurl, filename = new Date().getTime() + ".png") {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  cropped() {
    if (!this.croppedImage) {
      this.toast.warning("Please upload image (Only JPG, PNG & JPEG)");
      return;
    }
    this.croppedImageFile = this.dataURLtoFile(this.croppedImage, this.realImage.name);
    this.dialogRef.close({ cropFile: this.croppedImageFile, cropBase64: this.croppedImage, real: this.realImage });
  }

}

