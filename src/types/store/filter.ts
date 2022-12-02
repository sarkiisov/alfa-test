export enum FilterOptions {
  SHOW_ALL,
  SHOW_LIKED
}

export type FilterState = {
  filter: FilterOptions;
};
