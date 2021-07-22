import { Pipe, PipeTransform } from '@angular/core';
import { SUBCRIPTION_STATUS } from 'projects/thrizer-admin-app/src/app/constants/enums';

@Pipe({
  name: 'subscriptionStatus'
})
export class SubscriptionStatusPipe implements PipeTransform {

  transform(value: number,freeTrial:number=0): string {
    // console.log(value,freeTrial);
    if(value===SUBCRIPTION_STATUS.SUBSCRIBED)
    {
      return 'Subscribed';
    }
    else if(value===SUBCRIPTION_STATUS.NON_SUBSCRIBED)
    {
      let remainingdays = ( +new Date() - freeTrial) / (1000*60*60*24);
      return  remainingdays>7?'Non-Subscribed':'Free Trial'
    }
  return 'NA';
  }
}
