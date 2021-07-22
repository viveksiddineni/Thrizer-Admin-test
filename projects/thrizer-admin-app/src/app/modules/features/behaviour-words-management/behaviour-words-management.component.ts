import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PAGE_OPTIONS, STATUS, SUGGESTIONS_TYPE, SUGGESTIONS_TYPES } from '../../../constants/constants';
import { ACTION_NAME, ELEMENT_STATUS, ROLES } from '../../../constants/enums';
import { COMMON_MESSAGES, POPUP_MESSAGES } from '../../../constants/messages';
import { SUGGESTIONS } from '../../../constants/routes';
import { IPopupData } from '../../../models/common-models';
import { UtilityService } from '../../../shared/utility/utility.service';
import { Config } from '../../common/commonTable/listing/listing.types';
import { Table } from '../../common/commonTable/table/table.types';
import { BehavioursTableDataSource, BEHAVIOURS_WORDS_LIST_CONFIG } from "../behaviour-words-management/behaviour-words-management.model";
import { BehaviourWordsManagementService } from '../behaviour-words-management/services/behaviour-words-management.service';
import { AddSuggestionsComponent } from './add-suggestions/add-suggestions.component';


@Component({
  selector: 'app-behaviour-words-management',
  templateUrl: './behaviour-words-management.component.html',
  styleUrls: ['./behaviour-words-management.component.scss']
})
export class BehaviourWordsManagementComponent implements OnInit, OnDestroy {

  ACTION_NAME = ACTION_NAME;
  MODULE_NAME = ROLES;
  pageOptions = { ...PAGE_OPTIONS };

  sub: Subscription = new Subscription();
  tableSource: Table.Source<any> = new BehavioursTableDataSource([]);
  filterCount = 0;
  listingConfig: Config = BEHAVIOURS_WORDS_LIST_CONFIG;
  suggestionTypes = SUGGESTIONS_TYPES;
  suggestionType: number;
  suggestionStatus = STATUS;

  constructor(private behaviourWordsManagementService: BehaviourWordsManagementService,
    private route:Router,
    public dialog: MatDialog,
    private acRoute: ActivatedRoute, private utility: UtilityService) {
    
   }

  ngOnInit(): void {
    this.tabsInitializer();
  }

  getSuggestions() {
    const params = {...this.pageOptions};
    delete params['page'];
    if (params.where['type'] === 0 && this.filterCount == 0) {
      delete params.where.type;
      params.where['status'] = -1;
    } else if (this.filterCount == 0)  {
      delete params.where['status'];
    }
    this.sub.add(
      this.behaviourWordsManagementService.getSuggestionsListing(({filter: JSON.stringify({...params})})).subscribe(({ data: { results, page, limit, total, skip } }) => {
        console.log(results);
        console.log(this.pageOptions.skip)
        if (results.length === 0) {
          this.listingConfig.noRecord = true;
        };
        const initialIndex = ((this.pageOptions.page) - 1) * this.pageOptions.limit + 1;
        this.listingConfig.total = total;
        this.tableSource = new BehavioursTableDataSource(
          results.map((item, index) => ({ ...item, sn: initialIndex + index }))
        );
      },err => {
        
      })
    )
  }

  tabHandler(link) {
    console.log(link);
    this.pageOptions.where.type = link.value;
    this.getSuggestions();
  }

  async markStatus(item, status, index?) {
    try {
      let action;
      console.log(status);
      switch (status.value) {
        case 1:
          action = "ACCEPT";
          break;
        case 2:
          action = "REJECT";
          break;
        case 3:
          action = "ACTIVE";
          break;
        case 4:
          action = "INACTIVE";
          break;
        case 5:
          action = "DELETE";
          break;
        default:
          break;
      }
      const dialogdata: IPopupData = {
        message: COMMON_MESSAGES[action].confirm("suggestion"),
        cancelButtonText: POPUP_MESSAGES.no,
        confirmButtonText: POPUP_MESSAGES.yes,
      };
      this.utility.openDialog(dialogdata).subscribe((res) => {
        console.log(res);
        if (!!res) {
          this.behaviourWordsManagementService.markStatus({status: status.value == 1 ? 3 : status.value}, item._id).subscribe((data) => {
            this.utility.showAlert(
              COMMON_MESSAGES[action].success("suggestion")
            );
            console.log(this.suggestionType, status)
            if (this.suggestionType == 0 && (status.value == 1 || status.value == 2)) {
              this.updateTableData(item._id, index);
              return;
            }
            this.setStatusOnAction(item._id, index);
          });
        }
      });
    } catch(err) {
      console.log(err);
      this.utility.errorAlert(err);
    }

  }

  addSuggestion(data = null): void {
    const dialogRef = this.dialog
      .open(AddSuggestionsComponent, {
        width: "460px",
        data,
      })
      .afterClosed()
      .subscribe((resp) => {
        if (resp) {
          this.getSuggestions();
        }
      });
  }

  async editSuggestion(row) {
    this.addSuggestion(row);
  }

  setStatusOnAction(id, status) {
    // let value = this.tableSource["data"];
    // const i = value.findIndex((value) => value._id == id);
    // this.tableSource["data"][i]["status"] = status;
    this.getSuggestions();
  }

  updateTableData(id, index) {
    //updating table data
    console.log(this.tableSource["data"], index);
    let elementIndex;
    this.tableSource["data"].map((el, index) => {
      if (el._id === id) {
        this.tableSource["data"].splice(index, 1);
        elementIndex = index;
      }
    });
    // this.tableSource["data"].splice(index, 1); //remove selected row
    console.log(this.tableSource["data"]);
    this.listingConfig.total = this.listingConfig.total - 1; //update total
    for (let i = elementIndex; i < this.tableSource["data"].length; i++) {
      //updating sn after the given index
      console.log(this.tableSource["data"][i]["sn"]);
      this.tableSource["data"][i]["sn"]--;
    }
  }

  tabsInitializer() {
    this.suggestionTypes.unshift({value: 0, viewValue: 'New Added'});
    this.suggestionType = Number(this.acRoute.snapshot.paramMap.get('id'));
    this.pageOptions.where.type = Number(this.suggestionType);
    this.getSuggestions();
  }

  onTableEventChange(event) {
    console.log(event);
    this.pageOptions = {...event.mainOption, where: {...event.mainOption.where, type: this.suggestionType}};
    console.log(this.pageOptions);
    this.pageOptions.skip = (this.pageOptions.page-1)*this.pageOptions.limit;
    if (event.filters && Object.keys(event.filters).length > 0) {
      this.filterCount = Object.keys(event.filters).length;
    } else {
      this.filterCount = 0;
    }
    console.log(this.pageOptions);
    this.getSuggestions();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
