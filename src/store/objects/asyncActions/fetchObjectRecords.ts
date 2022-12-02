import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../configureStore';
import { objectRequests } from '../../../api/objectRequests';
import { ObjectRecord } from '../../../types';

type Payload = {
  recordAmount: number;
};

const defaultPayload = {
  recordsAmount: 3
};

export const fetchObjectRecords = createAsyncThunk<ObjectRecord[], Payload | void, { state: RootState }>(
  'objects/fetchObjectRecords',
  async (payload, { getState }) => {
    const { objects } = getState();
    const queryIds = objects.ids.slice(objects.objects.length, objects.objects.length + (payload ? payload.recordAmount : defaultPayload.recordsAmount));
    const rawData = await Promise.all([...queryIds.map((id: number) => objectRequests.getObjectRecord(id))]);
    const mappedData = rawData.map(({
      objectId, title, primaryImageSmall, artistDisplayName, artistDisplayBio
    }) => ({
      isLiked: false,
      id: objectId,
      title,
      primaryImageSmall,
      artistDisplayName,
      artistDisplayBio,
    })) as ObjectRecord[];
    return mappedData;
  }
);
