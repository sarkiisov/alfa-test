import { FilterOptions, FilterState } from '../../types';
import { RootState } from '../configureStore';

export const filterSelectors = {
  getFilterOption: (state: RootState): FilterOptions => state.filter.filter,
  getProp: (propKey: keyof FilterState) => (state: RootState) => state.filter[propKey]
};
