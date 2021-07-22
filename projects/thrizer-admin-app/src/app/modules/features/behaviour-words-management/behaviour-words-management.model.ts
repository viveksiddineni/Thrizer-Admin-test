import { Config } from "../../common/commonTable/listing/listing.types";
import { Table } from "../../common/commonTable/table/table.types";
import { SuggestionFilterComponent } from "./suggestion-filter/suggestion-filter.component";

export const BEHAVIOURS_WORDS_LIST_CONFIG: Config = {
  label: "",
  options: {
    search: true,
    pagination: true,
    filter: SuggestionFilterComponent,
    searchPlaceholder: "Search by title",
  },
  total: 0,
};

export class BehavioursTableDataSource implements Table.Source<any> {
  columns: Table.Column<any>[] = [
    {
      title: "S.No.",
      id: "sn",
      resolve: (row: any) => row["sn"],
    },
    {
      title: "Label",
      id: "label",
      sorting: false,
      templateBy: 'label',
      resolve: (row: any) => row["label"] || "NA",
    },
    {
      title: "Type",
      id: "type",
      sorting: false,
      templateBy: "type",
    },

    {
      title: "Status",
      id: "status",
      sorting: false,
      templateBy: "status",
    },

    {
      title: "Created At",
      id: "createdAt",
      sorting: true,
      templateBy: "createdAt",
    },

    {
      title: "Actions",
      id: "actions",
      sorting: false,
      templateBy: "actions",
    },
  ];
  options: Table.Options = {
    selection: false,
  };
  constructor(public data: any[]) {}
}
