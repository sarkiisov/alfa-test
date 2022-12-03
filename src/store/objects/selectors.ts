import { ObjectRecord } from '../../types/store/objects';
import { FilterOptions, ObjectsState } from '../../types';
import { RootState } from '../configureStore';

export const objectsSelectors = {
  getObjectsCount: (state: RootState): number => state.objects.ids.length,
  getLoadedObjects: (state: RootState): ObjectRecord[] => state.objects.objects,
  getFilteredLoadedObjects: (state: RootState): ObjectRecord[] => {
    const currentFilter = state.filter.filter;
    switch (currentFilter) {
      case FilterOptions.SHOW_ALL:
        return state.objects.objects;
      case FilterOptions.SHOW_LIKED:
        return state.objects.objects.filter((objectProps) => objectProps.isLiked);
      default:
        return state.objects.objects;
    }
  },
  getProp: (propKey: keyof ObjectsState) => (state: RootState) => state.objects[propKey]
};
