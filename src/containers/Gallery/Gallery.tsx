import React from 'react';
import { Card } from '../../components/Card';
import { LodaingButton } from '../../components/LoadingButton';
import { Typography } from '../../components/Typography';
import { HeartIcon } from '../../components/icons';
import { setFilter } from '../../store/filter/reducer';
import { filterSelectors } from '../../store/filter/selectors';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchObjectRecords } from '../../store/objects/asyncActions';
import { removeRecord, toggleLike } from '../../store/objects/reducer';
import { objectsSelectors } from '../../store/objects/selectors';
import { FilterOptions } from '../../types';
import {
  GalleryControls, GalleryEmptyMessage, GalleryFiltersWrapper, GalleryGrid, GalleryHeader, GalleryLikeButton, GalleryWrapper
} from './Gallery.styled';
import { getGalleryHeaderText, isFilterOptionActive } from './helpers';

export type GalleryProps = {

};

export const Gallery: React.FC<GalleryProps> = () => {
  const dispatch = useAppDispatch();
  const objectRecords = useAppSelector(objectsSelectors.getFilteredLoadedObjects);
  const objectRecordsCount = useAppSelector(objectsSelectors.getObjectsCount);
  const filterOption = useAppSelector(filterSelectors.getFilterOption);
  const isApiFetching = useAppSelector(objectsSelectors.getProp('isApiFetching')) as boolean;

  const handleRemoveCardClick = (id: number) => {
    dispatch(removeRecord(id));
  };

  const handleLikeCardClick = (id: number) => {
    dispatch(toggleLike(id));
  };

  const handleLoadClick = () => {
    dispatch(fetchObjectRecords());
  };

  const handleLikeFilterToggle = () => {
    const newFilterOption = filterOption === FilterOptions.SHOW_LIKED ? FilterOptions.SHOW_ALL : FilterOptions.SHOW_LIKED;
    dispatch(setFilter(newFilterOption));
  };

  return (
    <GalleryWrapper>
      <GalleryHeader>
        <Typography variant="h2">{getGalleryHeaderText(filterOption, objectRecordsCount)}</Typography>
        <GalleryFiltersWrapper>
          <GalleryLikeButton isActive={isFilterOptionActive(filterOption, FilterOptions.SHOW_LIKED)} onClick={handleLikeFilterToggle}>
            <HeartIcon />
          </GalleryLikeButton>
        </GalleryFiltersWrapper>
      </GalleryHeader>
      {
        (objectRecords.length)
          ? (
            <GalleryGrid>
              {
                objectRecords.map((recordProps) => (
                  <Card
                    key={recordProps.id}
                    onRemoveClick={() => handleRemoveCardClick(recordProps.id)}
                    onLikeClick={() => handleLikeCardClick(recordProps.id)}
                    {...recordProps}
                  />
                ))
              }
            </GalleryGrid>
          )
          : <GalleryEmptyMessage>Collection is empty</GalleryEmptyMessage>
      }
      <GalleryControls>
        {
          (filterOption === FilterOptions.SHOW_ALL && objectRecords.length < objectRecordsCount) &&
          <LodaingButton isLoading={isApiFetching} onClick={handleLoadClick}>Show more</LodaingButton>
        }
      </GalleryControls>
    </GalleryWrapper>
  );
};
