import { createAsyncThunk } from '@reduxjs/toolkit';
import { objectRequests } from '../../../api/objectRequests';
import { setIdsArrLoaded } from '../reducer';

export const fetchObjectIds = createAsyncThunk<number[], void>(
  'objects/fetchObjectIds',
  async (_, { dispatch }) => {
    const data = await objectRequests.getObjectIds();
    dispatch(setIdsArrLoaded(true));
    return data.objectIDs.sort();
  }
);
