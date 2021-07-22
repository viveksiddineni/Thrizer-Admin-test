// declare
export interface Options {
  search?: boolean;
  filter?: any;
  pagination?: boolean;
  searchPlaceholder?: string;
}
export interface Config {
  label: string;
  options?: Options;
  total: number;
  noRecord?: boolean;
}
