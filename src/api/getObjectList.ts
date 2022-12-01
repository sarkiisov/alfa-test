import { ObjectList } from '../types';

export const getObjectList = async (): Promise<ObjectList> => {
  const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11';
  const data = await fetch(url).then((response) => response.json()) as ObjectList;
  return data;
};
