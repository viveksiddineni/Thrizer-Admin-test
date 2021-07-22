import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondConversion'
})
export class SecondConversionPipe implements PipeTransform {

  transform(value:number): string {
    console.log(value)
    if(value)
    {
      if(value<60) 
      {
        return value+" sec";
      }
      else if(value>=60 && value<3600)
      {
        const minutes:number=Math.floor(value/60);
        const seconds = value % 60;
        return `${minutes}min ${seconds}sec`
        // return minutes.toString().padStart(2, '0') + ':' + 
        //    (value - minutes * 60).toString().padStart(2, '0');
      }
      else{
        const hours = Math.floor(value / 60 / 60);
        const minutes = Math.floor(value / 60) - (hours * 60);
        const seconds = value % 60;
        return `${hours}h ${minutes}min ${seconds}sec`
      }
    }
  }

}
