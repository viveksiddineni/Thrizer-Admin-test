import { MatPaginator } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { FormUtils } from "../shared/utils/form.utils";

export class Pagination {
  API_EVENT = {
    ACTIVE: "UNBLOCK",
    INACTIVE: "BLOCK",
    DELETED: "DELETED",
  };
  limit: number;
  total: number;
  page: number;
  skip: number;
  where: Object;
  // pageSize: number;
  search: string;
  pageOptions: number[];
  filterOptions: { [key: string]: string | Date };
  sortKey: string;
  sortType: number;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {
    this.page = 1;
    this.limit = 10;
    this.pageOptions = [10, 25, 50, 100];
  }

  get pageParams() {
    return {
      page: this.page,
      limit: this.limit,
      skip: this.skip,
      where: {search: this.search}
    };
  }

  get searchFilter() {
    return this.pageParams.where['search'] = this.search;
  }

  get sortHeaders() {
    let obj: any = {};
    if (this.sortKey) {
      obj["sortKey"] = this.sortKey;
      obj["sortOrder"] = this.sortType;
    }
    return obj;
  }

  confirmPageReload() {}

  allPrams() {
    return {
      ...this.pageParams,
      // ...this.filterOptions,
      // ...this.sortHeaders,
    };
  }

  /**
   * @description This function checks if page needs to be decreased on row deletion
   */
  validateDeletion() {
    if (this.total !== 1 && this.total - (this.page - 1) * this.limit === 1) {
      this.page--;
      this.total--;
    }
  }

  get validPageOptions() {
    const dataObj = this.allPrams();
    const mainOption = {};
    for (const i of Object.keys(dataObj)) {
      if (dataObj[i] || dataObj[i] === 0) {
        mainOption[i] = dataObj[i];
      }
    }

    return { mainOption : {...mainOption, where: {...FormUtils.parse(this.filterOptions) , ...this.pageParams.where, ...this.sortHeaders}}, filters : this.filterOptions };
  }

  set pageOptionsOnChange(options: MatPaginator) {
    this.page = options.pageIndex + 1;
    this.limit = options.pageSize;
  }

  set sortOptions(sortOption: Sort) {
    if (sortOption.direction) {
      this.sortKey = sortOption.active;
      this.sortType = sortOption.direction === "asc" ? 1 : -1;
    } else {
      this.sortKey = null;
      this.sortType = null;
    }
  }

  currentIndex(index: number): number {
    return (this.page - 1) * this.limit + index + 1;
  }
  resetPages() {
    this.total = 0;
    this.page = 1;
    // console.log(this.paginator, '-----------------');
    // this.paginator.pageIndex = 0;
  }
  getSerialNumber(i) {
    return (
      i + (this.validPageOptions["page"] - 1) * this.validPageOptions["limit"]
    );
  }

  changeDateFormat(data) {
    for (let item in data) {
      if (data[item] instanceof Date) {
        console.log(data[item]);
        data[item] = data[item].toISOString();
      }
    }
    return data;
  }
}
