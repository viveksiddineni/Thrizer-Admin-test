import { Pipe, PipeTransform } from "@angular/core";
// import { USER_TYPE, DATE_FORMATS } from "../../constants/constants";
import { DatePipe } from "@angular/common";
@Pipe({
  name: "constantParser",
})
export class ConstantParserPipe extends DatePipe implements PipeTransform {
  transform(data: any, type: string): any {
    // if (data) {
    //   switch (type) {
    //     case "USER_TYPE":
    //       const user = USER_TYPE.find((user) => user.value == data);
    //       return user.name;
    //     case "ROLE":
    //       const role: boolean = data == 1 || data == 3 ? true : false;
    //       return role;
    //     case "MOBILE":
    //       const mobile= data.phoneNo? `${data.countryCode} ${data.phoneNo}`:`N/A`;
    //       return mobile;
    //     case "MEDIUM_DATE":
    //       const mediumDate = `${super.transform(data, DATE_FORMATS.MEDIUM_DATE)}`;
    //       return mediumDate;
    //     case "DATE_SORT":
    //       const dateWithAt = `${super.transform(data, DATE_FORMATS.ONLY_DATE)}`;
    //       return dateWithAt;
    //     case "STATUS":
    //       let status = '';
    //       if (data == 'block') {
    //         status = 'Blocked'
    //       } else if (data == 'active') {
    //         status = 'Approved'
    //       } else {
    //         status = data;
    //       }
    //       return status;
    //     case "PERCENT":
    //       const percent = `${data} %`;
    //       return percent;
    //     default:
    //       return null;
    //   }
    // }
  }
}
