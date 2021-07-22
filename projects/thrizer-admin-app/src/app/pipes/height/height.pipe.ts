import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: {}): unknown {
    // console.log(value);
    let res='';
    if(value && value.hasOwnProperty('height'))
    {
      if(value['unitSetting']=='ft')
      {
        // let integerPart=Math.floor(value['height']);
        // let decimalPart=value['height']-integerPart;
        let integerPart=(value['height']+"").split('.')[0];
        let decimalPart=+(value['height']+"").split('.')[1];
         res=decimalPart?`${integerPart} ft ${decimalPart} in`: `${integerPart} ft`;
      }
      else if(value['unitSetting']=='cm')
      {
        res=`value['height'] cm`;
      }
      else{
        res=value['height'];
      }
    }
    return res;
  }

}
