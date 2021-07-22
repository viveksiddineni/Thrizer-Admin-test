import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberMaskDirective } from './number-mask.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NumberMaskDirective],
  exports: [NumberMaskDirective]
})
export class NumberMaskModule { }
