export const objectRequests = {
  getObjectIds: async () => {
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11';
    const data = await fetch(url).then((response) => response.json());
    return data;
  },
  getObjectRecord: async (objectId: number) => {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`;
    const data = await fetch(url).then((response) => response.json());
    return data;
  }
} as const;
