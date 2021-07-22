import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioFilterComponent } from './radio-filter.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [RadioFilterComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports:[RadioFilterComponent]
})
export class RadioFilterModule { }
