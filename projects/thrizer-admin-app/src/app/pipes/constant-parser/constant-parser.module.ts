import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstantParserPipe } from './constant-parser.pipe';
import { ConstantCurrencyPipe } from './constant-currency.pipe';



@NgModule({
  declarations: [ConstantParserPipe, ConstantCurrencyPipe],
  imports: [
    CommonModule
  ],
  exports:[ConstantParserPipe, ConstantCurrencyPipe]
})
export class ConstantParserModule { }
