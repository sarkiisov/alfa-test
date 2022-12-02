/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ObjectsState, ObjectRecord } from '../../types';
import { fetchObjectIds, fetchObjectRecords } from './asyncActions';

const initialState: ObjectsState = {
  ids: [],
  objects: [],
};

const objectsSlice = createSlice({
  name: 'objects',
  initialState,
  reducers: {
    removeRecord: (state, { payload }: PayloadAction<number>) => {
      const index = state.ids.findIndex((id) => id === payload);
      if (index !== -1) {
        state.ids = state.ids.splice(index, 1);
        state.objects = state.objects.splice(index, 1);
      }
    },
    toggleLike: (state, { payload }: PayloadAction<number>) => {
      const object = state.objects.find((element) => element.id === payload);
      if (object) {
        object.isLiked = !object.isLiked;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchObjectIds.fulfilled, (state, action: PayloadAction<number[]>) => {
      state.ids = action.payload;
    });
    builder.addCase(fetchObjectRecords.fulfilled, (state, action: PayloadAction<ObjectRecord[]>) => {
      state.objects = state.objects.concat(action.payload);
    });
  }
});

export const { removeRecord, toggleLike } = objectsSlice.actions;
export default objectsSlice.reducer;
