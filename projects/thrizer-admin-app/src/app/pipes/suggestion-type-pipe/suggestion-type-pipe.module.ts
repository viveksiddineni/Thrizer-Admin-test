import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { SuggestionTypePipe } from './suggestion-type.pipe';



@NgModule({
  declarations: [SuggestionTypePipe],
  imports: [
    CommonModule
  ],
  exports: [SuggestionTypePipe],
  providers: [TitleCasePipe]
})
export class SuggestionTypePipeModule { }
