import { Pipe, PipeTransform } from "@angular/core";
// import { CATEGORY_TYPE_CONST } from "projects/thrizer-admin-app/src/app/constants/constants";
@Pipe({
  name: "categoryType",
})
export class CategoryTypePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): any {
    // const result = CATEGORY_TYPE_CONST.find((item) => item.value == value);
    // return result ? result.viewValue : "NA";
  }
}
