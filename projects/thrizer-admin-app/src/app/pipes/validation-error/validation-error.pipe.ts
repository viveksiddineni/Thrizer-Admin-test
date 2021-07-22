import { FormControl } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { PATTERN_ERRORS } from '../../constants/error';
import { VALIDATION_MESSAGES, toTitleCase } from '../../constants/messages';
@Pipe({
  name: 'validate',
  pure: false,
})
export class ValidationErrorPipe implements PipeTransform {
  constructor() {}
  transform(control: FormControl, name: string): any {
    // console.log('validate ',control," ",control.errors)
    return control && control.errors
      ? this.getValidationError(control, name)
      : '';
  }
  getValidationError(control: FormControl, name) {
    if (control.hasError('required')) {
      return `${toTitleCase(name)} is required`;
    }
    if (control.hasError('pattern')) {
      let pattern = control.errors.pattern.requiredPattern;
      return PATTERN_ERRORS(pattern, name);
    }
    if (control.hasError('minlength')) {
      return `${toTitleCase(name)} must be at least ${
        control.errors.minlength.requiredLength
      } characters long`;
    }
    if (control.hasError('minMatch')) {
      return `${toTitleCase(name)} must be at least ${
        control.errors.minMatch.requiredLength
      } digit long`;
    }
    if (control.hasError('min')) {
      return `${toTitleCase(name)} must be at least ${
        control.errors.min.min
      } `;
    }
    if (control.hasError('maxlength')) {
      return `${toTitleCase(name)} can not be more than ${
        control.errors.maxlength.requiredLength
      } characters long`;
    }
    if (control.hasError('maxMatch')) {
      return `${toTitleCase(name)} can not be more than ${
        control.errors.maxMatch.requiredLength
      } digit long`;
    }
    if (control.hasError('max')) {
      return `${toTitleCase(name)} can not be more than ${
        control.errors.max.max
      } `;
    }
    if (control.hasError('maxError')) {
      return `Maximum ${toTitleCase(
        name
      )} can not be less than minimum ${toTitleCase(name)}`;
    }
    if (control.hasError('matchPassword')) {
      console.log(name);
      return VALIDATION_MESSAGES[name]['matchPassword'] || '';
    }
  }
}
