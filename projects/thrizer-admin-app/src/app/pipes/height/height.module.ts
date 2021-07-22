import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeightPipe } from './height.pipe';



@NgModule({
  declarations: [HeightPipe],
  imports: [
    CommonModule
  ],
  exports:[HeightPipe]
})
export class HeightModule { }
