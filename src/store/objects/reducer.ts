/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ObjectsState, ObjectRecord } from '../../types';
import { fetchObjectIds, fetchObjectRecords } from './asyncActions';

const initialState: ObjectsState = {
  isIdsArrLoaded: false,
  isApiFetching: false,
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
        state.ids.splice(index, 1);
        state.objects.splice(index, 1);
      }
    },
    toggleLike: (state, { payload }: PayloadAction<number>) => {
      const object = state.objects.find((element) => element.id === payload);
      if (object) {
        object.isLiked = !object.isLiked;
      }
    },
    setIdsArrLoaded: (state, { payload }: PayloadAction<boolean>) => {
      state.isIdsArrLoaded = payload;
    },
    setApiFetching: (state, { payload }: PayloadAction<boolean>) => {
      state.isApiFetching = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchObjectIds.fulfilled, (state, { payload }: PayloadAction<number[]>) => {
      state.ids = payload;
    });
    builder.addCase(fetchObjectRecords.fulfilled, (state, { payload }: PayloadAction<ObjectRecord[]>) => {
      state.objects = state.objects.concat(payload);
    });
  }
});

export const {
  removeRecord, toggleLike, setIdsArrLoaded, setApiFetching
} = objectsSlice.actions;
export default objectsSlice.reducer;
