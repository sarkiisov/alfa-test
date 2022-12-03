import { FilterOptions } from '../../../types';

export const isFilterOptionActive = (currentFilterOption: FilterOptions, filterOptionToCheck: FilterOptions) => currentFilterOption === filterOptionToCheck;
