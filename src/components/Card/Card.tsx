import React from 'react';
import {
  CardArtistBiography, CardWrapper, CardImage, CardControls, CardImageWrapper, CardInfoWrapper, CardTitle, CardIconButton, CardLikeButton
} from './Card.styled';
import { HeartIcon, XIcon } from '../icons';
import { ObjectRecord } from '../../types';

export type CardProps = ObjectRecord & {
  onRemoveClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onLikeClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Card: React.FC<CardProps> = ({
  primaryImageSmall, isLiked, title, artistDisplayName, artistDisplayBio, onRemoveClick, onLikeClick
}) => (
  <CardWrapper>
    <CardImageWrapper>
      <CardImage
        src={primaryImageSmall}
        loading="lazy"
        draggable={false}
      />
      <CardControls>
        <CardIconButton onClick={onRemoveClick}>
          <XIcon />
        </CardIconButton>
        <CardLikeButton onClick={onLikeClick} isActive={isLiked}>
          <HeartIcon />
        </CardLikeButton>
      </CardControls>
    </CardImageWrapper>
    <CardInfoWrapper>
      <CardTitle variant="h3" maxLines={2}>{title}</CardTitle>
      <CardArtistBiography maxLines={3} variant="body1">
        {artistDisplayName}
        {' '}
        {artistDisplayBio}
      </CardArtistBiography>
    </CardInfoWrapper>
  </CardWrapper>
);
