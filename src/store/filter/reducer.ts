/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterOptions, FilterState } from '../../types/store/filter';

const initialState: FilterState = {
  filter: FilterOptions.SHOW_ALL
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<FilterOptions>) => {
      state.filter = payload;
    },
    resetFilter: (state) => {
      state.filter = FilterOptions.SHOW_ALL;
    }
  }
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
