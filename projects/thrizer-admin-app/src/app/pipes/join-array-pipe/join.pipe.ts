import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: Array<any>,objtypeKey?:string,nodataText:string='-', sep=', '): string {
    // console.log(value,objtypeKey);
    if(objtypeKey)
    {
      // console.log(value.length);
      if(value && value.length==0)
      {
        return nodataText;
      } 
      return value ?value.map(val => val[objtypeKey]).join(sep):'NA';
    }
    return value?value.join(sep):'NA';
  }

}
