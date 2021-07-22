import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'constantCurrency'
})
export class ConstantCurrencyPipe extends CurrencyPipe implements PipeTransform {

  transform(data: any, type: string): any {
    if (data) {
      switch (type) {
        case 'CURRENCY':
          const name = `${super.transform(data, "EUR")}`
          return name;
        default:
          return null;
      }
    }
  }

}
