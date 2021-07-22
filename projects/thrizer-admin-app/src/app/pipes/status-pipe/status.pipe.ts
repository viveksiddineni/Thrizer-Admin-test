import { Pipe, PipeTransform } from '@angular/core';
import { STATUS } from '../../constants/constants';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const status = STATUS;
    if (status && value) {
      const obj = status.find(item => item['value'] == value);
      if (obj) {
        return obj['viewValue'];
      }
    }
  }

}
