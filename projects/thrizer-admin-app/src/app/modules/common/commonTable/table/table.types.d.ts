export namespace Table {
  export interface Column<T> {
    title: string;
    id: string;
    templateBy?: string;
    sorting?: boolean;
    resolve?: (row: T) => string;
  }
  export interface Options {
    selection: boolean;
  }
  export interface Source<T> {
    columns: Column<T>[];
    data: T[];
    options?: Options;
  }
}
