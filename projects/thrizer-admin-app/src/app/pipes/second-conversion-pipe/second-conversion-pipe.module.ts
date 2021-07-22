import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondConversionPipe } from './second-conversion.pipe';



@NgModule({
  declarations: [SecondConversionPipe],
  imports: [
    CommonModule
  ],
  exports:[SecondConversionPipe]
})
export class SecondConversionPipeModule { }
