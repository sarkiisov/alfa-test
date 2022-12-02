export type ObjectRecord = {
  isLiked: boolean;
  id: number;
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  artistDisplayBio: string;
};

export type ObjectsState = {
  isIdsArrLoaded: boolean;
  isApiFetching: boolean;
  ids: number[];
  objects: ObjectRecord[];
};
