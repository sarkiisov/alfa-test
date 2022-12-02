export type ObjectRecord = {
  isLiked: boolean;
  id: number;
  title: string;
  primaryImageSmall: string;
  artistDisplayName: string;
  artistDisplayBio: string;
};

export type ObjectsState = {
  ids: number[];
  objects: ObjectRecord[];
};
