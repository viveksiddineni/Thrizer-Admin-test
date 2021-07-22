import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { SUGGESTIONS_TYPE } from '../../../app/constants/constants'

@Pipe({
  name: 'suggestionType'
})
export class SuggestionTypePipe implements PipeTransform {
  constructor(private titlecasePipe:TitleCasePipe) {  
  }
  transform(value: number, ...args: unknown[]): unknown {
    const suggestionType = SUGGESTIONS_TYPE;  
    if (Object.values(suggestionType).includes((value) as any)) {
      return  this.titlecasePipe.transform(suggestionType[value].toLowerCase());
    } else {
      return undefined;
    }
  }

}
