import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";
import { ViewImageComponent } from "../view-image/view-image.component";
import { FILE_TYPE } from "projects/thrizer-admin-app/src/app/constants/enums";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-shadow-image",
  templateUrl: "./shadow-image.component.html",
  styleUrls: ["./shadow-image.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ShadowImageComponent implements OnInit {
  image: string;
  type: any = FILE_TYPE.image;

  @Input() set fileType(type) {
    this.type = type;
  }
  @Input()
  set img(data) {
    this.image = data;
    if (this.image && this.type === FILE_TYPE.image) {
      const img = new Image();
      img.src = this.image;
      img.onload = () => {
        this.uploadImg = img.src;
      };
    } else {
      this.uploadImg = "./assets/images/img_avatar3.png";
    }
  }
  @Input() default: number;
  @Input() view: boolean = true;
  uploadImg: string = "./assets/images/img_avatar3.png";
  baseImg = {
    img2: "./assets/images/img_avatar3.png",
  };

  constructor(public _dialogRef: MatDialog) {}

  ngOnInit() {
    if (this.default === 2) {
      this.uploadImg = this.baseImg.img2;
    }
    // if (this.default === 3) {
    //   // this.uploadImg = this.baseImg.img2;
    //   document.querySelector('.ov').classList.add('inr_wrap');
    // }

    if (this.img) {
      const img = new Image();
      img.src = this.img;
      img.onload = () => {
        this.uploadImg = img.src;
      };
    }
    console.log(this.img);
  }

  viewShadowImage(uploadImg) {
    if (!this.view) {
      return;
    }
    const dialogRef = this._dialogRef.open(ViewImageComponent, {
      width: "70vw",
      height: "100%",
      panelClass: "--real1x5P",
      backdropClass: "_viewImgOverly",
      data: { img: uploadImg },
    });
  }
}
