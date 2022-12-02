import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../configureStore';
import { objectRequests } from '../../../api/objectRequests';
import { ObjectRecord } from '../../../types';
import { setApiFetching } from '../reducer';

type Payload = {
  recordAmount: number;
};

const defaultPayload = {
  recordsAmount: 3
};

export const fetchObjectRecords = createAsyncThunk<ObjectRecord[], Payload | void, { state: RootState }>(
  'objects/fetchObjectRecords',
  async (payload, { getState, dispatch }) => {
    dispatch(setApiFetching(true));
    const { objects } = getState();
    const queryIds = objects.ids.slice(objects.objects.length, objects.objects.length + (payload ? payload.recordAmount : defaultPayload.recordsAmount));
    const rawData = await Promise.all([...queryIds.map((id: number) => objectRequests.getObjectRecord(id))]);
    const mappedData = rawData.map(({
      objectID, title, primaryImageSmall, artistDisplayName, artistDisplayBio
    }) => ({
      isLiked: false,
      id: objectID,
      title,
      primaryImageSmall,
      artistDisplayName,
      artistDisplayBio,
    })) as ObjectRecord[];
    dispatch(setApiFetching(false));
    return mappedData;
  }
);
