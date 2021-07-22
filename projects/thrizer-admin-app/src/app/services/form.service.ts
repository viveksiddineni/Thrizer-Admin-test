import { Injectable } from "@angular/core";
import {
  Validators,
  AbstractControl,
  FormGroup,
  FormArray,
  ValidatorFn,
} from "@angular/forms";
import { PATTERN } from "../constants/patterns";
import { VALIDATION_CRITERIA } from "../constants/validation-criteria";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor() {}
  VALIDATION = {
    name: [
      Validators.pattern(PATTERN.name),
      Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength),
    ],
    smallName: [
      Validators.pattern(PATTERN.name),
      Validators.minLength(VALIDATION_CRITERIA.smallNameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.smallNameMaxLength),
    ],
    price: [
      Validators.pattern(PATTERN.price),
      MIN_LENGTH_MATCH(VALIDATION_CRITERIA.priceMinLength),
      MAX_LENGTH_MATCH(VALIDATION_CRITERIA.priceMaxLength),
      Validators.min(0),
    ],
    point:[
      // Validators.pattern(PATTERN.price),
      Validators.min(VALIDATION_CRITERIA.MinPoint),
      Validators.max(VALIDATION_CRITERIA.MaxPoint)
    ],
    nonZero:[
      // Validators.pattern(PATTERN.price),
      // Validators.min(1),
      // Validators.max(VALIDATION_CRITERIA.MaxPoint)
    ],
    time: [
      Validators.pattern(PATTERN.time),
      MIN_LENGTH_MATCH(VALIDATION_CRITERIA.minTime),
      MAX_LENGTH_MATCH(VALIDATION_CRITERIA.maxTime),
      Validators.min(0),
    ],
    email: [
      Validators.pattern(PATTERN.email),
      Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength),
    ],
    emptyControl: [],
    description: [
      Validators.pattern(PATTERN.name),
      Validators.minLength(VALIDATION_CRITERIA.locationMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.locationMaxLength),
    ],
    password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    phone: [
      Validators.required,
      Validators.pattern(PATTERN.phone),
      MIN_LENGTH_MATCH(VALIDATION_CRITERIA.phoneMinLength),
      MAX_LENGTH_MATCH(VALIDATION_CRITERIA.phoneMaxLength),
    ],
    caloriesMin: [
      Validators.required,
      Validators.minLength(VALIDATION_CRITERIA.calorieMinLength),
      // Validators.maxLength(VALIDATION_CRITERIA.calorieMaxLength),
    ],
    caloriesMax: [
      Validators.required,
      Validators.maxLength(VALIDATION_CRITERIA.calorieMaxLength),
      // Validators.maxLength(VALIDATION_CRITERIA.calorieMaxLength),
    ],
    workoutCode: [
      Validators.pattern(PATTERN.name),
      Validators.minLength(VALIDATION_CRITERIA.workoutCodeMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.workoutCodeMaxLength),
    ],
    noofworkouts: [
      Validators.required,
      Validators.min(VALIDATION_CRITERIA.MinNoOfworkouts),
      Validators.max(VALIDATION_CRITERIA.MaxNoOfworkouts),
    ],
    dropdown: [
      Validators.required
    ],
  
    

    checkbox: [],
    iconImage: [],
    categoryId: [],
    subCategoryId: [],
    cityName: [],
    isFeatured: [],
    language: [],
    question: [],
    answer: [],
    cmsDesc: [],
    zipCodes: [
      Validators.required,
      MIN_LENGTH_MATCH(VALIDATION_CRITERIA.zipCodeMinLength),
      MAX_LENGTH_MATCH(VALIDATION_CRITERIA.zipCodeMaxLength),
    ],
    regStartDate: [],
    regEndDate: [],
    minRange: [Validators.max(VALIDATION_CRITERIA.maxRange)],
    maxRange: [Validators.max(VALIDATION_CRITERIA.maxRange)],
    status: [],
    accountStatus: [],
    cityId: [],
    type: [],
    panel: [],
    rating: [],
    colorCode: [],
    bookingStatus: [],
    paymentStatus: [],
    title: [],
    subTitle: [],
    users: [],
    sendTo: [],
    subcription: [],
    url: [Validators.required, Validators.pattern(PATTERN.url)],
    count: [],
  };

  getControlFn(
    path: string[],
    parentGroup: FormGroup
  ): AbstractControl | FormArray {
    return path.reduce((fg: AbstractControl, name: string) => {
      return fg.get(`${name}`);
    }, parentGroup);
  }
  matchPassword(form: AbstractControl) {
    let password = form.get("password").value;
    let confirmPassword = form.get("confirmPassword").value;
    if (password !== confirmPassword) {
      form.get("confirmPassword").setErrors({ matchPassword: true });
    } else {
      if (password === confirmPassword) {
        if (form.get("confirmPassword").errors) {
          delete form.get("confirmPassword").errors["matchPassword"];
          let keys = Object.keys(form.get("confirmPassword").errors);
          if (keys.length === 0) {
            form.get("confirmPassword").setErrors(null);
          }
        }
      }
    }
  }

  minMaxRangeValidator(min: string, max: string) {
    return (fg: FormGroup) => {
      // console.log(
      //   { fg },
      //   min,
      //   max,
      //   fg.controls[min].value,
      //   fg.controls[max].value
      // );

      const minValue = Number(fg.controls[min].value) || 0;
      const maxValue = Number(fg.controls[max].value) || 0;
      if (maxValue === null || maxValue === undefined) {
        return fg.controls[max].setErrors(null);
      }
      if (maxValue < minValue) {
        return fg.controls[max].setErrors({ maxError: true });
      }
      return fg.controls[max].setErrors(null);
    };
  }

  getControl(name, required = true, prefilled?) {
    if (prefilled === undefined) {
      prefilled = "";
    }

    const compose = [...this.VALIDATION[name]];
    if (required) {
      if (name === "checkbox") {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    return [prefilled, Validators.compose(compose)];
  }

  getFilterFormControls(keys: string[]) {
    let form = {};
    for (let key of keys) {
      form[key] = [null];
    }
    return form;
  }
}

export const MIN_LENGTH_MATCH = (
  requiredLength: number,
  unit = "Digit"
): ValidatorFn => {
  return (control: AbstractControl) => {
    if (control.value && control.value.length < requiredLength) {
      return {
        minMatch: {
          requiredLength,
          unit,
        },
      };
    }
  };
};
export const MAX_LENGTH_MATCH = (
  requiredLength: number,
  unit = "Digit"
): ValidatorFn => {
  return (control: AbstractControl) => {
    if (control.value && control.value.length > requiredLength) {
      return {
        maxMatch: {
          requiredLength,
          unit,
        },
      };
    }
  };
};
