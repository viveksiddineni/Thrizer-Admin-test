import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'getControl',
})
export class GetControlPipe implements PipeTransform {
  transform(control: AbstractControl, paths: string[]): null | FormControl {
    return paths.reduce((fg: AbstractControl, name: string) => {
      return fg.get(`${name}`);
    }, control) as FormControl;
  }
}
