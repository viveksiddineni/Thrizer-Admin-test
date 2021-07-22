import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewRatingComponent } from './component/review-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ReviewRatingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ReviewRatingComponent]
})
export class ReviewRatingModule { }
