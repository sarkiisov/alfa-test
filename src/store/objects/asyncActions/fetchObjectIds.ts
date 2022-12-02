import { createAsyncThunk } from '@reduxjs/toolkit';
import { objectRequests } from '../../../api/objectRequests';

export const fetchObjectIds = createAsyncThunk<number[]>(
  'objects/fetchObjectIds',
  async () => {
    const data = await objectRequests.getObjectIds();
    return data.objectIDs;
  }
);
