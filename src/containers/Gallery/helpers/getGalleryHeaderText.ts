import { FilterOptions } from '../../../types';

export const getGalleryHeaderText = (filterOption: FilterOptions, objectRecordsCount: number) => {
  switch (filterOption) {
    case FilterOptions.SHOW_ALL:
      return `Explore ${objectRecordsCount} paintings`;
    case FilterOptions.SHOW_LIKED:
      return 'Liked paintings';
    default:
      return '';
  }
};
