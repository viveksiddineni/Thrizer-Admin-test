import { Injectable } from '@angular/core';
import { HttpService } from '../../../../services/http.service';
import { UtilityService } from '../../../../shared/utility/utility.service';
import { IPopupData } from '../../../../models/common-models';
import { COMMON_MESSAGES } from '../../../../constants/messages';
import { CHANGE_STATUS, SUGGESTIONS, USERS_LIST_API } from '../../../../constants/urls';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class BehaviourWordsManagementService {

  constructor(
    private _http: HttpService,
    private utilityService: UtilityService
  ) { 

   }

  getSuggestionsListing(data) {
    console.log(data);
    return this._http.get<any>(SUGGESTIONS, data);
  };

  markStatus(data, id) {
    return this._http.put(`${SUGGESTIONS}/${CHANGE_STATUS}/${id}`, data);
  };

  addSuggestion(body) {
    return this._http.post(`${SUGGESTIONS}`, body, { showLoader: true });
  };

  editSuggestion(body) {
    return this._http.put(`${SUGGESTIONS}/${body._id}`, body, { showLoader: true });
  };


}
