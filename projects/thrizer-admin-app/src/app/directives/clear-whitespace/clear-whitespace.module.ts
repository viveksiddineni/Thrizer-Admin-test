import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClearWhitespaceDirective } from './clear-whitespace.directive';



@NgModule({
  declarations: [ClearWhitespaceDirective],
  imports: [
    CommonModule
  ],
  exports:[ClearWhitespaceDirective]
})
export class ClearWhitespaceModule { }
