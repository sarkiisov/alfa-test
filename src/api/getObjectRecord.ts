import { ObjectRecord } from '../types';

export const getObjectRecord = async (objectId: number): Promise<ObjectRecord> => {
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`;
  const data = await fetch(url).then((response) => response.json()).then((body) => ({
    objectID: body.objectID,
    title: body.title,
    primaryImageSmall: body.primaryImageSmall,
    artistDisplayName: body.artistDisplayName,
    artistDisplayBio: body.artistDisplayBio,
  }));
  return data;
};
