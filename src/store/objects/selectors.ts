import { ObjectsState } from '../../types';
import { RootState } from '../configureStore';

export const objectsSelectors = {
  getObjectsCount: (state: RootState): number => state.objects.ids.length,
  getLoadedObjectsCount: (state: RootState): number => state.objects.objects.length,
  getProp: (propKey: keyof ObjectsState) => (state: RootState) => state.objects[propKey]
};
