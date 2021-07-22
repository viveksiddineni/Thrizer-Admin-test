import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionStatusPipe } from './subscription-status.pipe';



@NgModule({
  declarations: [SubscriptionStatusPipe],
  imports: [
    CommonModule
  ],
  exports:[SubscriptionStatusPipe]
})
export class SubscriptionStatusModule { }
